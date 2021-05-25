import React from "react";
import "./styles.css";

function Address({id, name, handleAddressBody, handleDetail }) {
  return (
    <div
      className="address"
      onClick={() => {
        handleAddressBody(id);
        handleDetail();
      }}
    >
      <h3 className="address-name">{name}</h3>
      <p className="view-details">view details</p>
    </div>
  );
}

export default Address;
