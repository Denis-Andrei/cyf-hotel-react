import React, { useState, useEffect } from "react";
import CustomerProfile from "./CustomerProfile ";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const SearchResults = ({ bookingsList }) => {
  const [id, setId] = useState("");
  const [data, setData] = useState({});

  const getTheId = id => {
    setId(id);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [id]);

  return (
    <div>
      <table className="table table-hover">
        <TableHead bookingsList={bookingsList} />
        <TableBody bookingsList={bookingsList} getTheId={getTheId} />
      </table>
      {id ? <CustomerProfile id={id} data={data} /> : ""}
    </div>
  );
};

export default SearchResults;
