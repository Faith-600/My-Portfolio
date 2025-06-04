import { FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <div>
      <section className="contact-section">
        <h2 className="contact-heading">Get in Touch</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/mdkzkaeg"
          method="POST"
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
          <button type="submit" className="contact-button">
            Send Message
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
