import React from "react";

function MyOrderList({ bookdata, index, removeBook}) {

   return (
    <div>
      <div key={bookdata.id} className="box-book-list">
        <div className="book-data-class">
          <h3>{bookdata.title}</h3>
          <p>{bookdata.description && bookdata.description.slice(0, 30)+"..."}</p>
          <div className="image-div-class">
            <img
              className="image-class"
              src={bookdata.image}
              alt="Girl in a jacket"
            ></img>
            <div>
              <h3>Price : {bookdata.price}</h3>
              <button
                onClick={() => removeBook(bookdata.orderId)}
                 className="button"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrderList;
