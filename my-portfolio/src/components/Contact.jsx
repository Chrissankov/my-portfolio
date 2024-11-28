import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the user's email from the form
    const userEmail = form.current.email.value;

    // Send email to yourself (your email)
    emailjs
      .sendForm(
        "service_2dzxn8t",
        "template_tjoy2e8",
        form.current,
        "CMH0IxOHrb9zJR6g-"
      )
      .then(
        (result) => {
          // Show alert for admin notification
          alert("Message sent to admin successfully!");
        },
        (error) => {
          // Show alert for error
          alert("Error sending message to admin: " + error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact--title">
        Contact <span>Me</span>
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input--group">
          <div className="input-box">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="number" name="phone" placeholder="Phone Number" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>
        <div className="input--group-2">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="button" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
