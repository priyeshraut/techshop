import { Link } from "react-router-dom";
import useCartItem from "../../hooks/useCartItem";

const CartItem = (props) => {

  const {
    itemName,
    image,
    itemId,
    id,
    item,
    formattedPrice,
    formattedCutPrice,
    handleRemoveItem,
    handleDecrease,
    handleIncrease, count
  } = useCartItem(props);

  return (
    <div className="cart cartBgWhite">
      <Link to={"/product/" + id}>
        <div className="img">
          <img src={image} alt="img" />
        </div>
      </Link>
      <div className="itemInfoSection">
        <Link to={"/product/" + id}>
          <h2>{itemName}</h2>
        </Link>
        <p>
          <span className="cutPrice">₹{formattedCutPrice}</span>
          <span className="origionalPrice">₹{formattedPrice}</span>
        </p>
        <div className="searchResutlQtyCont cartItemQtyCont">
          <div id="qty">Quantity</div>
          <div className="searchResutlQtyCont_inner">
            <div onClick={() => handleDecrease(item)} id="decrease">
              -
            </div>
            <div id="box">{count}</div>
            <div onClick={() => handleIncrease(item)} id="increase">
              +
            </div>
          </div>
        </div>
        <button
          onClick={() => handleRemoveItem(itemId)}
          type="button"
          className="whiteBgBtn button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
