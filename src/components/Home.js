import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div className="hero">
                <h1 className="primary_heading">PUT YOURSELF FIRST</h1>
                <Link to="contact" className="btn btn_light">CONTACT NOW</Link>
            </div>
            <section className="message">
                <div>
                    <h1 className="primary_heading">GET THERE WITH FITNESS FIRST</h1>
                    <p className="secondary_para">To eat a well-balanced diet means eating a variety of foods from each of the five food group daily, in the amounts recommended. Eating many different foods each day ensures you’re getting different types and amounts of key nutrients, and can help prevent diseases such as diabetes, cancer and cardiovascular disease. The following 7-day meal plan is a sampler from Fitness First’s program.</p>
                    <p className="secondary_para">Follow this plan for 8 weeks by choosing one of the breakfast, lunch or dinner options each day, or choose all meals in option 1 on day 1, then all meals in option 2 on day 2 and so on. Repeat after Day 7.</p>
                </div>
                <div className="message_img">
                    <img src="https://images.pexels.com/photos/4164772/pexels-photo-4164772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="message_img">
                    <img src="https://images.pexels.com/photos/4164525/pexels-photo-4164525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
            </section>
            <section className="email_register">
                <div>
                    <h1 className="primary_heading">PUT YOURSELF FIRST</h1>
                    <p className="secondary_para">Let’s make this the year you start saying ‘yes’ to yourself. Get your free 5-day trial pass and let us show you what you’re capable of.</p>
                    <div className="email_input">
                        <input type="email" name="email" id="email" />
                        <button>JOIN</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
