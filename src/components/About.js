import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";
import AboutUs from "./AboutPage/AboutUs";
import Career from "./AboutPage/Career";
import MoveToTop from "./MoveToTop";

const About = () => {
  const { firstComponentRef, topLinkRef } = useFirstComponentAndMoveToTop();

  return (
    <main ref={firstComponentRef}>
      <AboutUs />
      <Career />
      <MoveToTop ref={topLinkRef} />
    </main>
  );
};

export default About;
