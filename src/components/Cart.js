import React, { useState } from "react";
import SelectedBook from "./SelectedBook";
import PaymentInfo from "./PaymentInfo";

let initAdd = `L2/1005, Hari Ganga Society
Opp. New RTO, Yerwada
Pune - 411006`;

function Cart() {
  let [address, setAddress] = useState(initAdd);
  let [addEdit, setAddEdit] = useState(false);

  function saveAddressHandle(e) {
    e.preventDefault();
    setAddEdit(!addEdit);
  }

  function textChangeHandle(e) {
    setAddress(e.target.value);
  }

  return (
    <div>
      <div className="box-cart-book-list">
        <form onSubmit={saveAddressHandle}>
          <div className="shipping-add-class">
            <h3>Shipping Address</h3>
            <div className="address-class">Address</div>
            {addEdit === false ? (
              <p>{address}</p>
            ) : (
              <textarea
                name="addText"
                id="descript"
                rows="8"
                onChange={textChangeHandle}
                value={address}
              />
            )}
          </div>
          <div>
            <button type="submit" className="button">
              {addEdit === false ? "Edit Address" : "Save Address"}
            </button>
          </div>
        </form>
      </div>
      <div className="box-cart-book-list">
        <div className="shopping-bag-class">
          <h2>Shopping Bag</h2>
          <div className="address-class">List of Selected Item</div>
          <SelectedBook></SelectedBook>
        </div>
      </div>
      <div className="box-cart-payment-info">
        <div className="shipping-add-class">
          <h3>Payment Info</h3>
          <PaymentInfo></PaymentInfo>
        </div>
      </div>
    </div>
  );
}

export default Cart;
