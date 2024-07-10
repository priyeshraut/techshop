const Faq = ({ faqHeading, faqDesc, showFaq, setShowIdx }) => {
  
  const handleClick = () => {
    setShowIdx();
  };

  return (
    <div className="faq">
      <div className="faq-q">
        <p>{faqHeading}</p>
        <div onClick={handleClick} className="faqArrow">
          {!showFaq && <i className="ri-arrow-down-s-line"></i>}
          {showFaq && <i className="ri-arrow-up-s-line"></i>}
        </div>
      </div>
      {showFaq && (
        <div className="faqAnswer">
          <p>{faqDesc}</p>
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
      )}
    </div>
  );
};

export default Faq;
