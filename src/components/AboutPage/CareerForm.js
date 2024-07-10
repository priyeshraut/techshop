import { useState } from "react";

const CareerForm = () => {
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
        <label htmlFor="phone">Phone</label>
        <div>
          <input type="tel" name="phone" id="phone" required />
        </div>
      </div>
      <div className="one">
        <label htmlFor="select">Position You Apply for</label>
        <div>
          <select name="select" id="select">
            {" "}
            required
            <option value="">Select Position</option>
            <option value="">In-store Sales</option>
            <option value="">Store Leadership</option>
            <option value="">In-store Operations</option>
            <option value="">Wearhouse & Logistics</option>
            <option value="">Ecommerce</option>
          </select>
        </div>
      </div>
      <div className="two">
        <label htmlFor="date">Available Start Date *</label>
        <div>
          <input
            type="date"
            name="date"
            id="date"
            required
            placeholder="Start Date"
          />
        </div>
      </div>
      <div className="link">
        <label htmlFor="url">Link to Resume</label>
        <div>
          <input
            type="text"
            name="url"
            id="url"
            required
            placeholder="Enter URL"
          />
        </div>
      </div>
      <div className="btn">
        <button type="submit" className="button whiteBgBtn">
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

export default CareerForm;
