import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MyOrderList from "./MyOrderList";

export function MyOrder() {
  const myOrder = useSelector((state) => state.order);
  const orderDispatch = useDispatch();

  function removeBookHandle(id) {
    orderDispatch({ type: "REMOVE", id, myOrder});
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

export function removeFromCart(id,myOrder) {
  const filterData = myOrder.filter((item, index) => id !== item.id);
  return filterData;
}
