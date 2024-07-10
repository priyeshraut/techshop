import { useState } from "react";

const CartOrderSummary = ({ totalCartQty, totalCartPrice }) => {
  const formattedTotalCartPrice = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
  }).format(totalCartPrice);

  const formattedTotalTaxPrice = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
  }).format((totalCartPrice * 18) / 100);

  const formattedTotalPrice = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
  }).format(totalCartPrice + (totalCartPrice * 18) / 100);

  return (
    <div className="priceDetialsCont">
      <div className="priceDetials cartBgWhite">
        <h2>
          Order Summary ({totalCartQty} {totalCartQty === 1 ? "item" : "items"})
        </h2>
        <div>
          <p>
            Total Product Price <b>:</b>
          </p>
          <p>+ ₹{formattedTotalCartPrice}</p>
        </div>
        <div>
          <p>
            Total Tax (5%) <b>:</b>
          </p>
          <p>+ ₹{formattedTotalTaxPrice}</p>
        </div>
        <div>
          <p>
            Order Total <b>:</b>
          </p>
          <p>₹{formattedTotalPrice}</p>
        </div>
        <button type="button" className="button whiteBgBtn" id="priceBtn">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default CartOrderSummary;
