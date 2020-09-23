import React from "react";

const TableHead = ({ bookingsList }) => {
  const ColumnTitles = Object.keys(bookingsList[0]);

  return (
    <thead className="thead-dark">
      <tr>
        {ColumnTitles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}

        <th>Nights</th>
      </tr>
    </thead>
  );
};

export default TableHead;