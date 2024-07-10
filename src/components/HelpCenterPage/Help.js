import Faq from "./Faq";
import { faqData } from "../../utils/mockData";
import { useState } from "react";

const Help = () => {
  const [showIdx, setShowIdx] = useState(null);

  return (
    <section className="helpSection">
      <div className="help container">
        <h2 className="h2style">TechShed Help Center</h2>
        <div className="helpCenter">
          <div className="faqSearch">
            <div>
              <h3>Frequently asked questions</h3>
            </div>
            <div>
              <p>Choose a category</p>
              <select name="select" id="select">
                <option value="General">General</option>
                <option value="settinUpFaq">Setting up FAQs</option>
              </select>
            </div>
            <ul className="category">
              <li>
                General
              </li>
              <li>
                Setting up FAQs
              </li>
            </ul>
          </div>
          {faqData.map((data, idx) => (
            <Faq
              key={data.id}
              faqHeading={data.faqHeading}
              faqDesc={data.faqDesc}
              showFaq={showIdx === idx ? true : false}
              setShowIdx={() => setShowIdx(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
