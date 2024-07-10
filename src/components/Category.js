import MoveToTop from "./MoveToTop";
import Product from "./Product";
import CategoryNavigation from "./HeaderComponents/CategoryNavigation";
import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";

const Category = ({ category, filterResults, totalProducts }) => {
  const { topLinkRef, firstComponentRef } = useFirstComponentAndMoveToTop();

  return (
    <main ref={firstComponentRef}>
    <section style={{backgroundColor: "white"}}>
      <div className="categorySection smallScreenPadding">
        <aside>
          <div className="browse">
            <p>Browse by</p>
            <CategoryNavigation allProducts={true} />
          </div>
        </aside>
        <div className="productCat">
          <h2 className="h2style">{category}</h2>
            <p>{totalProducts} products</p>
          <div className="items">
            {filterResults &&
              filterResults.map((data) => (
                <Product
                  key={data.id}
                  id={data.id}
                  itemName={data.itemName}
                  image={data.image}
                  price={data.price}
                  cutPrice={data.cutPrice}
                  sale={data.sale}
                />
              ))}
          </div>
        </div>
      </div>
      </section>
      <MoveToTop ref={topLinkRef} />
    </main>
  );
};

export default Category;
