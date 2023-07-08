"use client";

import ContactForm from "@/components/Contact/ContactForm";
import { useState } from "react";
import styles from "./Contactpage.module.scss";

export default function Contact() {
	const [stepError, setStepError] = useState<boolean | string>(false);
	const [step, setStep] = useState(0);
	const totalSteps = 4;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<boolean | string>(false);
	const [success, setSuccess] = useState(false);

	const [data, setData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});

	function validateEmail(email: string) {
		const re =
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		return re.test(String(email).toLowerCase());
	}

	function checkBeforeNextStep() {
		if (step === 0 && validateEmail(data.email) === false) {
			setStepError("Please enter a valid email address.");
			return false;
		}
		if (step === 0 && (data.name === "" || data.email === "")) {
			setStepError(
				"Please fill out your name and email if you really want me to contact you..."
			);
			return false;
		}
		return true;
	}

	function nextStep() {
		setStepError(false);
		const continueWithStep = checkBeforeNextStep();
		if (!continueWithStep) return;
		setStep(step + 1);
	}

	function previousStep() {
		setStepError(false);
		setStep(step - 1);
	}

	function succesSubmit(form: HTMLFormElement) {
		setLoading(false);
		setSuccess(true);
		setError(false);
		form.reset();

		setTimeout(() => {
			setSuccess(false);
		}, 7000);
	}

	function failedSubmit(response: Response) {
		setLoading(false);
		setSuccess(false);

		if (response.status === 429) {
			setError("You've sent too many emails. Please try again later.");
		} else if (response.status === 400) {
			setError("Please fill out all required fields.");
		} else {
			setError("Something went wrong! Please try again later.");
		}

		setTimeout(() => {
			setError(false);
		}, 3000);
	}

	async function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		setLoading(true);
		setError(false);

		const response = await fetch("/api/sendMail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			succesSubmit(form);
		} else {
			failedSubmit(response);
		}
	}

	return (
		<main className={styles.main}>
			<div className={styles.top}>
				<div className={styles.textPart}>
					<h1 className={styles.title}>
						Tell me <span className={styles.accent}>your dream project</span>,
						and I'll make sure it comes to life!
					</h1>

					<h2 className={styles.subtitle}>
						I'm currently looking for new opportunities, so if you have a
						project that you think I could help you with,{" "}
						<span className={styles.accent}>don't hesitate to contact me!</span>
					</h2>
				</div>

				<ContactForm
					step={step}
					loading={loading}
					success={success}
					error={error}
					stepError={stepError}
					submitForm={e => submitForm(e)}
					data={data}
					setData={setData}
				/>
			</div>

			<div className={styles.bottom}>
				<p className={styles.counter}>
					{step + 1} / {totalSteps}
				</p>

				<div className={styles.buttonContainer}>
					{step > 0 && (
						<button
							type="button"
							className={`${styles.button} ${styles.previous}`}
							onClick={() => previousStep()}
						>
							Previous
						</button>
					)}
					{step < totalSteps - 1 && (
						<button
							type="button"
							className={`${styles.button} ${styles.next}`}
							onClick={() => nextStep()}
						>
							Next
						</button>
					)}
				</div>
			</div>
		</main>
	);
}
