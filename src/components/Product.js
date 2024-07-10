import { Link } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const Product = (props) => {
  const {
    image,
    itemName,
    sale,
    addToCart,
    qty,
    item,
    id,
    handleAddItem,
    handleDecrease,
    handleIncrease,
    count,
    formattedPrice,
    formattedCutPrice,
  } = useProduct(props);

  return (
    <div className="item" id="proItem">
      <Link to={"/product/" + id}>
        {sale && !addToCart && <div id="setFlag">Sale</div>}
        <div className="itemImg">
          <img src={image} alt="Product Image" />
        </div>
      </Link>
      <div className="itemDesc_addtoCartCont">
        <Link to={"/product/" + id}>
          <div className="itemDesc">
            <div id="text-container">
              <p className="itemName">{itemName}</p>
            </div>
            <p className="price">
              {!addToCart && (
                <span className="cutPrice">₹{formattedCutPrice}</span>
              )}
              <span>₹{formattedPrice}</span>
            </p>
          </div>
        </Link>
        <div className="addToCart_Qty_Cont">
          {qty && (
            <div className="searchResutlQtyCont">
              <div id="qty">Qty</div>
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
          )}
          {addToCart && (
            <div onClick={() => handleAddItem(item)} className="addToCart">
              Add to Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
