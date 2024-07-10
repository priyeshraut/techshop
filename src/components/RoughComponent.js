import { useRef } from "react";

const RoughComponent = ({faqHeading, faqDesc}) => {
    const faq = useRef(null);

    console.log(faq)

    const showHideFaq = () => {
        faq.current.classList.toggle("showfaq");
    }


  return (
    <div ref={faq} className="faq">
      <div className="faq-q">
        <p>{faqHeading}</p>
        <div onClick={showHideFaq} className="faqArrow">
          <i className="ri-arrow-down-s-line"></i>
          <i className="ri-arrow-up-s-line"></i>
        </div>
      </div>
      <div className="faqAnswer">
        <p>
          {faqDesc}
        </p>
        <ul>
          <li>
            <i className="ri-facebook-fill"></i>
          </li>
          <li>
            <i className="ri-instagram-line"></i>
          </li>
          <li>
            <i className="ri-twitter-x-fill"></i>
          </li>
          <li>
            <i className="ri-youtube-fill"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoughComponent;
