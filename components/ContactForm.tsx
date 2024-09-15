"use client"

import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ContactForm = () => {
    // for validation
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .required("Email is required")
            .email("Entered value does not match email format"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string(),
    });

    const formOptions = {resolver: yupResolver(validationSchema)};
    // get functions to build form with useForm() hook
    const {register, handleSubmit, formState} = useForm(formOptions);
    const {errors} = formState;

    function onSubmit(data, e) {
        // display form data on success
        console.log("Message submitted: " + JSON.stringify(data));
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
            <div className="ptf-form-group">
                <label data-number="01">What’s your name?</label>
                <input
                    autoFocus={true}
                    type="text"
                    name="name"
                    {...register("name")}
                    className={`${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && (
                    <div className="invalid-feedback">{errors.name?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="02">What’s your email address?</label>
                <input
                    name="email"
                    type="text"
                    {...register("email")}
                    className={` ${errors.email ? "is-invalid" : ""}`}
                />
                {errors.email && (
                    <div className="invalid-feedback">{errors.email?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="03">What would you like to talk about?</label>
                <select
                    name="subject"
                    {...register("subject")}
                    className={`${errors.subject ? "is-invalid" : ""}`}
                >
                    <option value="Get Expert Advice">Get Expert Advice</option>
                    <option value="Discuss Your Vision">Discuss Your Vision</option>
                    <option value="Start Your Project">Start Your Project</option>
                </select>
                {errors.subject && (
                    <div className="invalid-feedback">{errors.subject?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            <div className="ptf-form-group">
                <label data-number="04">Tell us more...</label>
                <textarea
                    rows={3}
                    // @ts-ignore
                    type="text"
                    name="message"
                    className={` ${errors.message ? "is-invalid" : ""}`}
                />
                {errors.message && (
                    <div className="invalid-feedback">{errors.email?.message}</div>
                )}
            </div>
            {/* End .ptf-form-group */}

            {/* <!--Spacer--> */}
            <div
                className="ptf-spacer"
                // @ts-ignore
                style={{"--ptf-xxl": "3rem"}}></div>

            <button className="ptf-submit-button">
                Submit
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 17 17"
                >
                    <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"/>
                </svg>
            </button>
            {/* End .ptf-submit-button */}
        </form>
    );
};

export default ContactForm;
