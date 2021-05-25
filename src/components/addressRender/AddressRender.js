import React from "react";
import "./styles.css";

function AddressRender({
  name,
  email,
  phoneNumber,
  facebook,
  skype,
  linkedin,
  handleDetail,
}) {
  return (
    <div className="address-detail">
      <div>
        <h5>
          <i className="fas fa-user-tie avatar"></i> <span>{name}</span>
        </h5>
        <p>
          <i className="fas fa-phone-alt phone"></i> <span>{phoneNumber}</span>
        </p>
        <p>
          <i className="fas fa-envelope-open-text email"></i>
          <span>{email}</span>
        </p>
        <p>
          <i className="fab fa-facebook facebook"></i> <span>{facebook}</span>
        </p>
        <p>
          <i className="fab fa-skype skype"></i> <span>{skype}</span>
        </p>
        <p>
          <i className="fab fa-linkedin linkedin"></i> <span>{linkedin}</span>
        </p>
      </div>
    </div>
  );
}

export default AddressRender;
