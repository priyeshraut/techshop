import { productData } from "../utils/productData";
import MoveToTop from "./MoveToTop";
import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";
import useProductDetail from "../hooks/useProductDetail";

const ProductDetail = () => {
  const { firstComponentRef, topLinkRef } = useFirstComponentAndMoveToTop();

  const {
    itemName,
    itemDesc,
    itemInfo,
    returnRefundPolicy,
    shippingInfo,
    image,
    formattedPrice,
    formattedCutPrice,
    count,
    handleDecrease,
    handleIncrease,
    handleAddItem,
    actualId,
  } = useProductDetail();

  return (
    <main ref={firstComponentRef} className="productDetials">
      <article>
        <div className="navigation">
          <i className="ri-arrow-left-s-line"></i>
          <p>Back to Home</p>
        </div>
        <div className="img">
          <div className="productImg">
            <img src={image} alt="" />
          </div>
          <p>{itemDesc}</p>
        </div>
        <section className="itemInfoSection">
          <h1>{itemName}</h1>
          <p>SKU: 0063</p>
          <p>
            <span className="cutPrice">₹{formattedPrice}</span>
            <span className="origionalPrice">₹{formattedCutPrice}</span>
          </p>
          <div className="searchResutlQtyCont cartItemQtyCont">
            <div id="qty">Quantity</div>
            <div className="searchResutlQtyCont_inner">
              <div onClick={handleDecrease} id="decrease">
                -
              </div>
              <div id="box">{count}</div>
              <div onClick={handleIncrease} id="increase">
                +
              </div>
            </div>
          </div>
          <button
            onClick={() => handleAddItem(productData[actualId])}
            type="button"
            className="button whiteBgBtn"
          >
            Add to Cart
          </button>
          <button type="button" className="button whiteBgBtn">
            Buy Now
          </button>
          <p>{itemDesc}</p>
        </section>
        <section className="itemDescSection">
          <div className="faq">
            <div>
              <h2>Product Info</h2>
              <div className="icons">
                <i className="ri-add-line"></i>
                <i className="ri-subtract-line"></i>
              </div>
            </div>
            <p>{itemInfo}</p>
          </div>
          <div className="faq">
            <div>
              <h2>Return & Refund Policy</h2>
              <div className="icons">
                <i className="ri-add-line"></i>
                <i className="ri-subtract-line"></i>
              </div>
            </div>
            <p>{returnRefundPolicy}</p>
          </div>
          <div className="faq">
            <div>
              <h2>Shipping Info</h2>
              <div className="icons">
                <i className="ri-add-line"></i>
                <i className="ri-subtract-line"></i>
              </div>
            </div>
            <p>{shippingInfo}</p>
          </div>
        </section>
      </article>
      <MoveToTop topLinkRef={topLinkRef} />
    </main>
  );
};

export default ProductDetail;
