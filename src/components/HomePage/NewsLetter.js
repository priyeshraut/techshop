import { useState } from "react";

const NewsLetter = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="newsLetter bigScreenMarginInline sectionPadding">
      <div className="text">
        <h2 className="h2style">Newsletter</h2>
        <p>Sign up to receive updates on new arrivals and special offers</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShow(true);
        }}
      >
        <label htmlFor="email">Email *</label>
        <div className="formItem">
          <input
            type="email"
            id="email"
            placeholder="Your Email Here"
            required
          />
          <button
            type="submit"
          >
            Suscribe
          </button>
        </div>
      </form>
      {show && <p>Thanks for submitting !</p>}
    </div>
  );
};

export default NewsLetter;
