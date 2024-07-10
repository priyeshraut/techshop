import { useState } from "react";

const ContactForm = () => {
  const [show, setShow] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setShow(true);
      }}
    >
      <div className="one">
        <label htmlFor="firstName">First Name</label>
        <div>
          <input type="text" name="firstName" id="firstName" required />
        </div>
      </div>
      <div className="two">
        <label htmlFor="lastName">Last Name</label>
        <div>
          <input type="text" name="lastName" id="lastName" required />
        </div>
      </div>
      <div className="one">
        <label htmlFor="email">Email</label>
        <div>
          <input type="email" name="email" id="email" required />
        </div>
      </div>
      <div className="two">
        <label htmlFor="subject">Subject</label>
        <div>
          <input type="text" name="subject" id="subject" required />
        </div>
      </div>
      <div className="message">
        <label htmlFor="message">Message</label>
        <div>
          <textarea
            name="message"
            id="message"
            required
            cols="1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="btn">
        <button type="submit" className="button">
          Submit
        </button>
      </div>
      {show && (
        <div className="thanks">
          <p>Thanks for submitting !</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
