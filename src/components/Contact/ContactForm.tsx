/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from "react";
import Loader from "../Loader";
import Airplane from "./Airplane";
import styles from "./ContactForm.module.scss";

interface Props {
	step: number;
	loading: boolean;
	success: boolean;
	error: boolean | string;
	stepError: boolean | string;
	submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
	data: {
		name: string;
		email: string;
		company: string;
		message: string;
	};
	setData: (data: {
		name: string;
		email: string;
		company: string;
		message: string;
	}) => void;
}

const ContactForm: FC<Props> = ({
	step,
	loading,
	success,
	error,
	stepError,
	submitForm,
	data,
	setData,
}) => (
	<form
		className={styles.form}
		onSubmit={e => {
			submitForm(e);
		}}
	>
		{stepError && (
			<p
				className="error"
				style={{
					color: "rgb(var(--error))",
				}}
			>
				{stepError}
			</p>
		)}
		{step === 0 && (
			<>
				<label className={styles.label} htmlFor="fullname">
					Full Name
				</label>
				<input
					className={styles.input}
					type="text"
					name="fullname"
					id="fullname"
					placeholder="Full name (required)"
					required
					value={data.name}
					onChange={e => {
						setData({ ...data, name: e.target.value });
					}}
				/>

				<label className={styles.label} htmlFor="email">
					Email
				</label>
				<input
					className={styles.input}
					type="email"
					name="email"
					id="email"
					placeholder="Email (required)"
					required
					value={data.email}
					onChange={e => {
						setData({ ...data, email: e.target.value });
					}}
				/>
			</>
		)}

		{step === 1 && (
			<>
				<label className={styles.label} htmlFor="company">
					Company
				</label>
				<input
					className={styles.input}
					type="text"
					name="company"
					id="company"
					placeholder="Company Name"
					value={data.company}
					onChange={e => {
						setData({ ...data, company: e.target.value });
					}}
				/>
			</>
		)}

		{step === 2 && (
			<>
				<label className={styles.label} htmlFor="message">
					Message
				</label>
				<textarea
					className={styles.textarea}
					name="message"
					placeholder="Message"
					value={data.message}
					onChange={e => {
						setData({ ...data, message: e.target.value });
					}}
				/>
			</>
		)}

		{step === 3 && (
			<div className={styles.lastScreenContainer}>
				<h2
					style={{
						fontSize: "1.5em",
					}}
				>
					Dear {data.name}!
				</h2>
				<p
					style={{
						fontSize: "1.2em",
					}}
				>
					Thank you for your interest in working with me. I will get back to you
					at {data.email} as soon as possible.
				</p>
				<button
					type="submit"
					className={
						(success ? styles.success : error ? styles.error : "") +
						styles.button
					}
				>
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
				</button>
				{success && (
					<div className={styles.splineContainer}>
						<Airplane />
					</div>
				)}
			</div>
		)}
	</form>
);

export default ContactForm;
