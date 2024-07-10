import { useSelector } from "react-redux";
import CartItem from "./CartComponents/CartItem";
import MoveToTop from "./MoveToTop";
import { Link } from "react-router-dom";
import CartOrderSummary from "./CartComponents/CartOrderSummary";
import useFirstComponentAndMoveToTop from "../hooks/useFirstComponentAndMoveToTop";

const Cart = () => {
  const { firstComponentRef, topLinkRef } = useFirstComponentAndMoveToTop();

  const cartItems = useSelector((store) => store.cart.items);

  const totalCartQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalCartPrice = cartItems.reduce((total, item) => (item.qty * item.price) + total, 0);


  return cartItems.length === 0 ? (
    <main ref={firstComponentRef}>
      <div className="emptyCart smallScreenPadding">
        <div className="cartEmptyText">Your TechShop Cart is empty</div>
        <Link to={"/"}>
          <button className="button whiteBgBtn">Continue Browsing</button>
        </Link>
      </div>
    </main>
  ) : (
    <main ref={firstComponentRef}>
      <article className="cartArticle allScreenMarginTop bigScreenPadding container mainContainer">
        <div className="cartItems">
          {cartItems.map((data) => (
            <CartItem
            key={data.id}
            item={data}
              id={data.id}
              itemId={data.id}
              itemName={data.itemName}
              price={data.price}
              cutPrice={data.cutPrice}
              image={data.image}
              qty={data.qty}
            />
          ))}
        </div>
          <CartOrderSummary totalCartPrice={totalCartPrice} totalCartQty={totalCartQty}  />
      </article>
      <MoveToTop topLinkRef={topLinkRef} />
    </main>
  );
};

export default Cart;
