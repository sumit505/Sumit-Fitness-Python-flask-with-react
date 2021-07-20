import React from 'react'

export const Contact = () => {
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
                <form className="contact_form" id="contact_form">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email Address" />
                    <input type="text" name="subject" id="subject" placeholder="Subject" />
                    <textarea name="concern" id="concern" cols="30" rows="10" placeholder="SEND MESSAGE"></textarea>
                    <button type="submit" className="btn btn_dark">SEND MESSAGE</button>
                </form>
            </section>
        </div>
    )
}
