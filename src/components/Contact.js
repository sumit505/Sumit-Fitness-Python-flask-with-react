import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

export const Contact = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            concern: ''
        }
    })

    const [showSpecificSubject, setShowSpecificSubject] = useState(false) 

    const contactFormSubmit = data => {
        console.log(data)
        alert("Your form submitted successfully!")
        setShowSpecificSubject(false)
        reset();
    }

    const checkSelectedSubject = (e) => {
        if(e.target.value === 'other') {
            setShowSpecificSubject(true)
            return
        }
        setShowSpecificSubject(false)
    }

    return (
        <div>
            <section className="contact">
                <div className="contact_details">
                    <h1 className="primary_heading">GET IN TOUCH</h1>
                    <p><strong>Address:</strong> W6W2+HR Parkmore, County Tipperary, Ireland</p>
                    <p><strong>Phone:</strong> +353 505 23681</p>
                    <p><strong>Email:</strong> fitnessfirst@contact.us.com</p>
                    <p>If you have any feedback or questions about our clubs, our website or our service in general, please send us a message by completing our enquiry form.</p>
                </div>
                <form className="contact_form" onSubmit={handleSubmit(contactFormSubmit)}>
                    <h1 className="secondary_heading">Send Us Your Query</h1>
                    <p></p>
                    <input {...register("name", { required: true })} placeholder="Name" />
                    <input type="email" {...register("email", { required: true, pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i })} placeholder="Email Address" />
                    <select {...register("subject", { required: true })} onChange={checkSelectedSubject}>
                        <option value="">Select a Subject</option>
                        <option value="membership">Membership</option>
                        <option value="payment">Payment</option>
                        <option value="other">Other</option>
                    </select>
                    { showSpecificSubject && <input {...register("specific_subject", { required: true })} placeholder="Your Specific Subject" />}
                    <textarea {...register("concern", { required: true })} id="concern" cols="30" rows="10" placeholder="SEND MESSAGE"></textarea>
                    <button type="submit" className="btn btn_dark">SEND MESSAGE</button>
                </form>
            </section>
        </div>
    )
}
