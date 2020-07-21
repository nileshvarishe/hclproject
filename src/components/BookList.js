import React from "react";

function Booklist({ bookdata, orderdata}) {
  const price = bookdata.saleInfo ? bookdata.saleInfo.listPrice.amount : 0;

  const bookObject = {
    id: bookdata.id,
    title: bookdata.volumeInfo.title,
    description: bookdata.volumeInfo.description,
    price: price,
    image: bookdata.volumeInfo.imageLinks.thumbnail,
  };

  return (
    <div className="box-book-list">
      <div key={bookdata.id} className="book-data-class">
        <h3>{bookObject.title}</h3>
        <p>
          {bookObject.description &&
            bookObject.description.slice(0, 30) + "..."}
        </p>
        <div className="image-div-class">
          <img
            className="image-class"
            src={bookObject.image}
            alt="Girl in a jacket"
          ></img>
          <div>
            <h3>Price : {bookObject.price}</h3>
            <button
              onClick={(e) => orderdata(e, bookObject)}
              className="button"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booklist;
