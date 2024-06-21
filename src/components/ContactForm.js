import React from "react";

function ContactForm() {
    return (
        <section id="contact" className="container my-5">
            <h2 className="text-center">Contact Us</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </section>
    );
}

export default ContactForm;
