import { forwardRef, useLayoutEffect } from "react";
import useCarousel from "../../hooks/useCarousel";
import { Link } from "react-router-dom";

const Carousel = forwardRef((props, ref) => {
  const {
    imgOpacity,
    slide,
    handleDot,
    CarouselImages,
    imgBig,
    sourceMid,
    sourceSm
  } = useCarousel();

  return (
    <section ref={ref} className="carousel carouselSection">
      {/*  tagline  */}
      <div className="intro smallScreenPadding">
        <p>
        Discover the Latest Tech Trends</p>
        <h2>
          Incredible Prices <br />
          on All Your <br />
          Favorite Items
        </h2>
        <p>Get more for less on selected brands</p>
        <Link to={"/allproducts"}>
          <button type="button" className="button">
            Explore Now
          </button>
        </Link>
      </div>

      {/*  carousel  */}
      <picture className="carouselItem">
        <source
          id="sourceSm"
          className="source"
          srcSet={sourceSm}
          media="(max-width: 425px)"
        />
        <source
          id="sourceMid"
          className="source"
          srcSet={sourceMid}
          media="(min-width: 425px) and (max-width: 767px)"
        />
        <img style={{ opacity: imgOpacity }} src={imgBig} alt="carouselImage" />
      </picture>

      <div className="dots">
        {CarouselImages.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === slide ? "active" : ""}`}
            id={index}
            onClick={handleDot}
          ></div>
        ))}
      </div>
    </section>
  );
});

export default Carousel;
