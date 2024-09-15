"use client";

import React, {useRef, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    // Validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("Invalid email format"),
        subject: Yup.string().required("Subject is required").nonNullable(),
        message: Yup.string(),
    });

    const formOptions = {resolver: yupResolver(validationSchema)};
    // @ts-ignore
    const {register, handleSubmit, formState} = useForm<FormData>(formOptions);
    const {errors} = formState;

    const onSubmit = async (data: FormData, e: React.BaseSyntheticEvent) => {
        setIsLoading(true);

        // Get reCAPTCHA token
        const recaptchaToken = await recaptchaRef.current?.executeAsync();
        recaptchaRef.current?.reset(); // Reset reCAPTCHA

        if (!recaptchaToken) {
            toast.error("reCAPTCHA validation failed. Please try again.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...data, recaptchaToken}), // Send reCAPTCHA token with form data
            });

            const result = await response.json();
            setIsLoading(false);
            if (response.ok) {
                toast.success("Message sent successfully!");
                e.target.reset();
            } else {
                toast.error(result.error || "Failed to send message. Please try again.");
            }
        } catch (error) {
            setIsLoading(false);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
                <div className="ptf-form-group">
                    <label data-number="01">What’s your name?</label>
                    <input
                        type="text"
                        {...register("name")}
                        className={`${errors.name ? "is-invalid" : ""}`}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>

                <div className="ptf-form-group">
                    <label data-number="02">What’s your email address?</label>
                    <input
                        type="email"
                        {...register("email")}
                        className={`${errors.email ? "is-invalid" : ""}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="ptf-form-group">
                    <label data-number="03">What would you like to talk about?</label>
                    <select
                        {...register("subject")}
                        className={`${errors.subject ? "is-invalid" : ""}`}
                    >
                        <option value=""></option>
                        <option value="Get Expert Advice">Get Expert Advice</option>
                        <option value="Discuss Your Vision">Discuss Your Vision</option>
                        <option value="Start Your Project">Start Your Project</option>
                    </select>
                    {errors.subject && <div className="invalid-feedback">{errors.subject.message}</div>}
                </div>

                <div className="ptf-form-group">
                    <label data-number="04">Tell us more...</label>
                    <textarea
                        rows={3}
                        {...register("message")}
                        className={`${errors.message ? "is-invalid" : ""}`}
                    />
                    {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                {/* ReCAPTCHA Widget */}
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    size="invisible"
                />

                {/* Submit button with loading spinner */}
                <button type="submit" className="ptf-submit-button" disabled={isLoading}>
                    {isLoading ? (
                        <div className="spinner"></div> // Display spinner when loading
                    ) : (
                        <>
                            Submit
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 17">
                                <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"/>
                            </svg>
                        </>
                    )}
                </button>
            </form>

            <style jsx>{`
                .spinner {
                    margin-top: 24px;
                    border: 6px solid rgba(0, 0, 0, 0.1);
                    border-left-color: #000;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </>
    );
};

export default ContactForm;
