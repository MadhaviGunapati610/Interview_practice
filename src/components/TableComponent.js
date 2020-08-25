import React from "react";
// import { configure } from "axios-hooks";
// import LRU from "lru-cache";
import axios from "axios";

// const cache = new LRU({ max: 10 });
// configure({ axios, cache });
const TableComponent = () => {
  const [table, setTable] = React.useState([]);
  React.useState(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => {
        const table = res.data;
        setTable({ table });
      });
    const tableHead = table.map((head, index) => {
      return <th></th>;
    });
  });
  return (
    <div>
      TableComponent
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
