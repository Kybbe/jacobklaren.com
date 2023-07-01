import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import rateLimit from "./rate-limit";

const limiter = rateLimit({
	interval: 60 * 1000 * 60, // 1 hour
	uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		await limiter.check(res, 3, "CACHE_TOKEN"); // 10 requests per minute
	} catch {
		res.status(429).json({ error: "Rate limit exceeded" });
	}

	const { name, email, company, message } = req.body;

	const username = process.env.MAIL_ADDRESS;
	const password = process.env.MAIL_PASSWORD;

	const obj = {
		from: `<Portfolio>${username}`,
		to: "jacob.klaren@outlook.com",
		subject: "New message from portfolio",
		text: "",
		html: `<h2>Name: ${name || "noName"} @${
			company || "noCompany"
		}</h2> <a href="mailto:${email}">${email || "noMail"}</a> <p>Message: ${
			message || "noMessage"
		}</p>`,
	};

	const transport = nodemailer.createTransport({
		host: "smtp.office365.com",
		port: 587,
		secure: false,
		auth: {
			user: username,
			pass: password,
		},
		maxConnections: 3,
		pool: true,
	});

	transport.sendMail(obj, (err, info) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error sending email");
		} else {
			res.status(200).send("Email sent");
		}
	});
}
