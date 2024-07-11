import PaymentMethodImg from "./FooterComponents/PaymentMethodImg";
import { paymentMethodImgData } from "../utils/mockData";
import FooterNavigation from "./FooterComponents/FooterNavigation";
import NeedHelp from "./NeedHelp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>{location.pathname !== "/login" &&
      <>
      <NeedHelp />
      <FooterNavigation />
      <section className="footerPaymentMethods">
        <p>We accept the following paying methods</p>
        <div className="paymentMethods">
          {paymentMethodImgData.map((data) => (
            <PaymentMethodImg key={data.id} img={data.img} />
          ))}
        </div>
      </section>
      </>
      }
      <p className="footerLower">
        Copyright &copy; <span className="year">{currentYear}</span>{" "}
        www.techshop.com - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
