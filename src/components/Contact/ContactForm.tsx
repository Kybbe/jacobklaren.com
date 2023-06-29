import styled from "styled-components";

export default function ContactForm() {
	function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.currentTarget;
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

		/* fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(() => {
			alert("Message sent successfully!");
			form.reset();
		}); */
	}

	return (
		<Form
			className="contact-form"
			onSubmit={e => {
				submitForm(e);
			}}
		>
			<Input type="text" name="fullname" placeholder="Name" required />
			<Input type="email" name="email" placeholder="Email" required />
			<Input
				type="text"
				name="company name"
				placeholder="Company Name"
				required
			/>
			<Textarea name="message" placeholder="Message" required />
			<Button type="submit">Send</Button>
		</Form>
	);
}

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1em;
	padding: 1em;
	margin: 0 auto;

	width: 90%;

	@media (min-width: 900px) {
		width: 50%;
	}
`;

const Input = styled.input`
	padding: 0.5em;
	border: none;
	border-radius: 0.5em;
	background-color: rgb(var(--background));
	color: rgb(var(--text));
	font-size: 1em;
	font-weight: 500;
	outline: none;
	transition: all 0.2s ease-in-out;

	&:focus {
		box-shadow: 0 0 0 2px rgb(var(--accent));
	}
`;

const Textarea = styled.textarea`
	padding: 0.5em;
	border: none;
	border-radius: 0.5em;
	background-color: rgb(var(--background));
	color: rgb(var(--text));
	font-size: 1em;

	outline: none;
	transition: all 0.2s ease-in-out;

	&:focus {
		box-shadow: 0 0 0 2px rgb(var(--accent));
	}
`;

const Button = styled.button`
	padding: 0.5em;
	border: none;
	border-radius: 0.5em;
	background-color: rgb(var(--accent));
	color: rgb(var(--text));
	font-size: 1em;
	font-weight: 500;
	outline: none;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: rgb(var(--accent-hover));
	}
`;
