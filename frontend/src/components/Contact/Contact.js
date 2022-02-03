import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
import { useAlert } from 'react-alert';
import "./contact.css"
import Loader from '../Loader/Loader';
const axios = require("axios")

const Contact = () => {

    const alert = useAlert();
    const [loading, setloading] = useState(false);
    const [userDetails, setuserDetails] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const changeHandler = (e) => {
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    const submitForm = async (e) => {
        e.preventDefault()
        setloading(true)
        await axios.post('api/v1/contactForm', {
            "name": userDetails.name,
            "email": userDetails.email,
            "message": userDetails.message,
            "phone": userDetails.phone
        })
            .then(function (response) {
                setloading(false);
                return (alert.success("Mail Sent to Prasanna!!"))
            })
            .catch(function (error) {
                setloading(false);
                return (alert.error("Sorry, Something Went Wrong."))
            });
    }

    return (
        <>
            <div className="container">
                <div className="contact-me-container" id="contact">
                    <SideBar />
                    {loading ? <Loader /> : <div className="rightBar">
                        <div className="main">
                            <div className="contact-me-inner-container">
                                <div className="inner-heading">
                                    <h2>Contact Me</h2>
                                </div>
                                <form className="contact-form" onSubmit={submitForm} onChange={changeHandler}>
                                    <div className="form-input-field">
                                        <label htmlFor="exampleInputName1" className="form-label">Name:</label>
                                        <input type="text" className="form-control" id="exampleInputName1"
                                            placeholder="Enter Your Good Name..." name="name" value={userDetails.name} aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-input-field">
                                        <label htmlFor="exampleInputName1" className="form-label">Email:</label>
                                        <input type="email" className="form-control" id="exampleInputName1"
                                            placeholder="Enter Your Email" name="email" value={userDetails.email} aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-input-field">
                                        <label htmlFor="exampleInputName1" className="form-label">Phone:</label>
                                        <input type="phone" className="form-control" id="exampleInputName1"
                                            placeholder="Enter Your Phone Number" name="phone" value={userDetails.phone} aria-describedby="emailHelp" />
                                    </div>

                                    <div className="form-input-field">
                                        <label htmlFor="exampleInputName1" className="form-label">Message:</label>
                                        <textarea className="form-control" name="message" value={userDetails.message} placeholder="Leave a message here" id="floatingTextarea2"></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>}
                </div>
                <Footer />
            </div>
        </>
    )
};

export default Contact;
