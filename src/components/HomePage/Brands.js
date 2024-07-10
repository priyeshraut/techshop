import brand01 from "../../images/brands/1.webp"
import brand02 from "../../images/brands/2.webp"
import brand03 from "../../images/brands/3.webp"
import brand04 from "../../images/brands/4.webp"

const Brands = () => {
  return (
    <section className="BrandsSection">
    <div
        className="brands bestSellers allScreenMarginTop bigScreenMarginInline sectionPadding"
      >
        <h2 className="h2style">Brands</h2>
        <div className="companyBrands">
          <div className="brandImg">
            <img src={brand01} alt="" />
          </div>
          <div className="brandImg">
            <img src={brand02} alt="" />
          </div>
          <div className="brandImg">
            <img src={brand03} alt="" />
          </div>
          <div className="brandImg">
            <img src={brand04} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands;
