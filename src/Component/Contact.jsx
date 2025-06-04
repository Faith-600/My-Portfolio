import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        navigate('/thankyou'); // Redirect to ThankYou page
      } else {
        console.error('Form submission failed:', response.statusText);
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <section className="contact-section">
        <h2 className="contact-heading">Get in Touch</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/mdkzkaeg"
          method="POST"
          onSubmit={handleSubmit}
        >

            <input
    type="hidden"
    name="_next"
    value="https://my-portfolio-sigma-gules-12.vercel.app/thankyou"
  />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="contact-textarea"
          ></textarea>
         <button
            type="submit"
            className="contact-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-socials">
          <p>Connect with me:</p>
          <a
            href="mailto:ezekielfaithtoyin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FiMail className="social-icon" />
            Email
          </a>
          <a
            href="https://github.com/Faith-600"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ezekiel-faith-0003ba222"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
            LinkedIn
          </a>
        </div>

        <footer className="contact-footer">
          <p>&copy; {new Date().getFullYear()} Faith. All rights reserved.</p>
        </footer>
      </section>
    </div>
  )
}

export default Contact
