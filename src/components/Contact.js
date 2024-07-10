import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";
import ContactUs from "./ContactPage/ContactUs";
import NewsLetter from "./HomePage/NewsLetter";
import MoveToTop from "./MoveToTop";

const Contact = () => { 
  const {firstComponentRef, topLinkRef} = useFirstComponentAndMoveToTop(); 
  return (
    <main ref={firstComponentRef}>
        <ContactUs />
        <section className="newsLetterSection">
        <NewsLetter />
        </section>
        <MoveToTop ref={topLinkRef} />
    </main>
  );
};

export default Contact;
