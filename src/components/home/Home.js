import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Address from "../address/Address";
import AddressRender from "../addressRender/AddressRender";
import "./styles.css";

function Home() {
  //state variables
  const [address, setAddress] = useState([]);
  const [detail, setDeatil] = useState(false);
  const [addressBody, setAddressBody] = useState([]);

  //handle address details body
  const handleDetail = () => {
    setDeatil(!detail);
  };

  const handleAddressBody = (_id) => {
    let tempAddress = [...address];
    let preAddress = tempAddress.find((address) => address._id === _id);
    let index = tempAddress.indexOf(preAddress);
    let body = tempAddress[index];
    console.log(body);
    setAddressBody([body]);
  };
  //fecthing addresses from server
  useEffect(() => {
    fetch("/addresses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAddress(data);
      });
  }, []);
  return (
    <div className="home">
      <div className="welcom">
        {" "}
        <h1>Welcome to Address Book</h1>
        <Link to="add address">
          <button className="home-add-address-btn">add address</button>
        </Link>
      </div>
      {detail === false && (
        <div className="address-list">
          {address.map((item) => (
            <Address
              key={item._id}
              id={item._id}
              name={item.name}
              handleDetail={handleDetail}
              handleAddressBody={handleAddressBody}
            />
          ))}
        </div>
      )}
      {detail === true && (
        <div>
          {addressBody.map((item) => (
            <AddressRender
              key={item._id}
              name={item.name}
              phoneNumber={item.phoneNumber}
              email={item.email}
              facebook={item.facebook}
              skype={item.skype}
              linkedin={item.linkedin}
              handleDetail={handleDetail}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
