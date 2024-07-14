import { shopByCategoryData } from "../../utils/mockData";
import Category from "./Category";

const ShopByCategory = () => {
  return (
    <section className="ShopbyCategorySection">
    <div
        className="shopByCategory allScreenMarginTop bigScreenMarginInline sectionPadding"
      >
        <h2 className="h2style">Shop by Category</h2>
        <div className="caterories">
          {
            shopByCategoryData.map((data) => (
              <Category key={data.catHeading} catImg={data.catImg} catHeading={data.catHeading} route={data.route} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ShopByCategory;