import { useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";
import Airplane from "../Airplane";

export default function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<boolean | string>(false);
	const [success, setSuccess] = useState(false);

	function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const name = form.fullname.value;
		const email = form.email.value;
		const company = form.company.value;
		const message = form.message.value;

		const data = {
			name,
			email,
			company,
			message,
		};

		setLoading(true);
		setError(false);

		fetch("/api/sendMail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then(() => {
				setLoading(false);
				setSuccess(true);
				setError(false);
				form.reset();

				setTimeout(() => {
					setSuccess(false);
				}, 7000);
			})
			.catch(() => {
				setLoading(false);
				setError("Something went wrong!");
			});
	}

	return (
		<Form
			className="contact-form"
			onSubmit={e => {
				submitForm(e);
			}}
		>
			<Input
				type="text"
				name="fullname"
				placeholder="Name (required)"
				required
			/>
			<Input
				type="email"
				name="email"
				placeholder="Email (required)"
				required
			/>
			<Input type="text" name="company" placeholder="Company Name" />
			<Textarea name="message" placeholder="Message" />
			<Button type="submit" error={!!error} success={success}>
				{loading ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1em",
							justifyContent: "center",
						}}
					>
						<Loader size={18} />
						<span>Loading...</span>
					</div>
				) : (
					error || (success ? "Sent!" : "Send")
				)}
			</Button>
			{success && (
				<SplineContainer>
					<Airplane />
				</SplineContainer>
			)}
		</Form>
	);
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
`;

const Input = styled.input`
	padding: 0.5em;
	border: 1px solid rgba(var(--text), 0.2);
	background-color: rgb(var(--background));
	color: rgb(var(--text));
	border-radius: 0.5em;
	font-size: 1em;
	font-weight: 500;
	outline: none;
	transition: all 0.2s ease-in-out;

	&:focus {
		border: 1px solid rgb(var(--text));
	}
`;

const Textarea = styled.textarea`
	padding: 0.5em;
	border: 1px solid rgba(var(--text), 0.2);
	background-color: rgb(var(--background));
	color: rgb(var(--text));
	border-radius: 0.5em;
	font-size: 1em;
	font-weight: 500;
	outline: none;
	transition: all 0.2s ease-in-out;

	&:focus {
		border: 1px solid rgb(var(--text));
	}
`;

const Button = styled.button<{ error: boolean; success: boolean }>`
	padding: 0.5em;
	border: none;
	border-radius: 0.5em;
	background-color: rgb(var(--accent));
	background-color: ${props => props.error && "rgb(var(--error))"};
	background-color: ${props => props.success && "rgb(var(--success))"};
	color: rgb(var(--background));
	font-size: 1em;
	font-weight: 500;
	outline: none;
	transition: all 0.2s ease-in-out;

	&:hover,
	&:focus {
		background-color: rgb(var(--accent-hover));
		background-color: ${props => props.error && "rgb(var(--error))"};
		background-color: ${props => props.success && "rgb(var(--success))"};
	}
`;

const SplineContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 1000;
`;
