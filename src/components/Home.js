import React, { useState, useEffect } from "react";
import Booklist from "./BookList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../services/bookAPIService";

export function Home() {
  const orderDispatch = useDispatch();
  const [bookList, setBookList] = useState([]);
  const myOrderId = useSelector((state) => state.orderId);
  
  function orderHandle(e, bookObj) {
    const orderId = myOrderId+1;
    bookObj.orderId = orderId;
    orderDispatch({ type: "ADD", bookObj, orderId});
  }

  useEffect(() => {
    (async () => {
      const books = await fetchBooks();
      setBookList(books);
    })();
  }, []);

  return (
    <div>
      {bookList.items &&
        bookList.items.map((item) => (
          <Booklist
            bookdata={item}
            orderdata={orderHandle}
            key={item.id}
           ></Booklist>
        ))}
    </div>
  );
}
