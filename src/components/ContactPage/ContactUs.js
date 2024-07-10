import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="contactSection">
    <div className="contactUs">
      <h2 className="h2style">Get in Touch</h2>
      <div className="contactUsInner container">
        <div className="contact">
          <div className="contactDetails">
            <h3>Store Location</h3>
            <p>
              500 Terry Francine Street <br />
              San Francisco, CA 94158 <br />
              info@mysite.com <br />
              123-456-7890
            </p>
          </div>
          <div className="contactDetails">
            <h3>Opening Hours</h3>
            <p>
              Mon - Fri: 8am - 8pm <br />
              Saturday: 9am - 7pm <br />
              Sunday: 9am - 8pm
            </p>
          </div>
        </div>

        <div className="help">
          <h3>We're here to help!</h3>
          <p>
            Fill out the form with any query on your mind and we'll get back to
            you as soon as possible
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;
