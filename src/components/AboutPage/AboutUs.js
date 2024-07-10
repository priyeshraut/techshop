import aboutSmall from "../../images/about/small.webp";
import aboutBig from "../../images/about/big.webp";

const AboutUs = () => {
  return (
    <section className="aboutSection">
    <div className="aboutUs">
          <h2 className="h2style">About TechShed</h2>
          <div className="about container">
            <picture>
              <source
                srcSet={aboutSmall}
                media="(max-width: 553px)"
              />
              <img src={aboutBig} alt="" />
            </picture>
            <div className="aboutIntro">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                eum tempora facilis, laudantium sit cum quos ducimus eos ullam
                ex fugit corrupti facere modi deleniti inventore, illum ut
                explicabo porro aut aperiam ipsum accusantium at temporibus
                minus! Tempore fugit culpa amet vel, eum nam ut officia
                necessitatibus voluptatibus aperiam eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi maxime illum culpa fuga explicabo autem ea
                perspiciatis, soluta eaque deserunt deleniti minus beatae aut,
                vero, doloremque vitae sit modi error accusamus. Cumque
                cupiditate atque eos laboriosam, ipsam officia error eius,
                consectetur, culpa obcaecati eveniet mollitia quia magnam
                quibusdam! Consequatur voluptatum quos sequi? Velit voluptatibus
                quaerat consequatur doloribus minus, atque eveniet sit ut in,
                fuga ipsum adipisci illo rem officia vero?
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutUs
