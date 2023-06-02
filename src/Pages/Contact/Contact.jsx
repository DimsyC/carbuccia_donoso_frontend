import GithubLogo from '../../assets/github.svg';
import LinkedinLogo from '../../assets/linkedin.svg';
import "./Contact.scss";

function Contact() {
    return (
        <section id="contact">
            <p>
                If you're looking to hire, collaborate, or simply connect, feel free to reach out through the contact form below or connect with me on socials
            </p>
            <div className="form_container">
                <form >

                    <div className='custom_textfield'>
                        <label>Subject</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className="custom_textfield">
                        <label>Email</label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className="custom_textfield">
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                    <input className='button' type="submit" value="Send" />
                </form>
            </div>
            <div className="socials">
                <div className="logo-container">
                    <img src={GithubLogo} alt="Github Logo" className="logo" />
                </div>
                <div className="logo-container">
                    <img src={LinkedinLogo} alt="Linkedin Logo" className="logo" />
                </div>
            </div>
        </section>
    );
}

export default Contact;
