import React, { useState, useEffect } from "react";
import Booklist from "./BookList";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../services/bookAPIService";

export function Home() {
  const orderDispatch = useDispatch();
  const [bookList, setBookList] = useState([]);

  function orderHandle(e, bookObj) {
    orderDispatch({ type: "ADD", bookObj });
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
