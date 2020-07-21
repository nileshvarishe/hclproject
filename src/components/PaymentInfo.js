import React from "react";

import { useSelector } from "react-redux";

function PaymentInfo() {
  const myOrder = useSelector((state) => state.order);
  let itemPrice = myOrder.reduce((accu, item) => accu + item.price, 0);
  let totalPrice = itemPrice ? itemPrice + 0.05 * itemPrice + 5.0 : 0;
  let tax = itemPrice && 0.05 * itemPrice;

  return (
    <div>
      <div>
        <p> Item Price = $ {itemPrice}</p>
        <p> Tax = $ {tax.toFixed(2)}</p>
        <p> Shipping Charge = $ {itemPrice && 5.0}</p>
        <p> Total = $ {totalPrice.toFixed(2)}</p>
      </div>
      <div>
        <button className="button">Checkout</button>
        <button className="button">Cancel</button>
      </div>
    </div>
  );
}

export default PaymentInfo;
