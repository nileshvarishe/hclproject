import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MyOrderList from "./MyOrderList";

export function MyOrder() {
  const myOrder = useSelector((state) => state.order);
  const orderDispatch = useDispatch();

  function removeBookHandle(orderId) {
     orderDispatch({ type: "REMOVE", orderId, myOrder});
  }

  return (
    <div>
      {myOrder.map((item, index) => (
        <MyOrderList
          bookdata={item}
          index={index}
          removeBook={removeBookHandle}
        ></MyOrderList>
      ))}
    </div>
  );
}

export function removeFromCart(orderId,myOrder) {
  const filterData = myOrder.filter((item, index) => orderId !== item.orderId);
  return filterData;
}
