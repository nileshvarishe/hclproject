import React from "react";
import { useSelector } from "react-redux";

function SelectedBook() {
  const myOrder = useSelector((state) => state.order);

  const tableData = myOrder.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.title}</td>
        <td>{item.description.slice(0, 30) + "..."}</td>
        <td>{item.price}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
}

export default SelectedBook;
