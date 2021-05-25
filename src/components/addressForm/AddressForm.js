import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.css";

function AddressForm() {
  //state variables for form
  // const [name, setName] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [facebook, setFacebook] = useState("");
  // const [skype, setSkype] = useState("");
  // const [linkedIn, setLinkedIn] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("/addresses", {
      method: "POST",
      body: JSON.stringify({
        ...data,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log({...data}));

      reset()
  };
  return (
    <div className="form-div">
      <form className="address-form" onSubmit={handleSubmit(onSubmit)}>
        <label className="name-label">
          <i className="fas fa-user-tie name-input"></i> <span>name</span>
        </label>
        <input
          {...register("name") }
          type="text"
          placeholder="name"
          name="name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <label className="phoneNumber-label">
          {" "}
          <i className="fas fa-phone-alt phoneNumber-input"></i>{" "}
          <span>phone number</span>
        </label>
        <input
          {...register("phoneNumber")}
          type="tel"
          placeholder="phone number"
          name="phoneNumber"
          // value={phoneNumber}
          // onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label className="email-label">
          <i className="fas fa-envelope-open-text email-input"></i>
          <span>email</span>
        </label>
        <input
          {...register("email", )}
          type="email"
          placeholder="email"
          name="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <label className="facebook-label">
          {" "}
          <i className="fab fa-facebook facebook-input"></i>
          <span>facebook</span>
        </label>
        <input
          {...register("facebook")}
          type="text"
          placehold="facebook handle"
          name="facebook"
          // value={facebook}
          // onChange={(e) => setFacebook(e.target.value)}
        />
        <label className="skype-label">
          {" "}
          <i className="fab fa-skype skype-input"></i>
          <span>skype</span>
        </label>
        <input
          {...register("skype")}
          type="text"
          placeholder="skype handle"
          name="skype"
          // value={skype}
          // onChange={(e) => setSkype(e.target.value)}
        />
        <label className="linkedIn-label">
          <i className="fab fa-linkedin linkedIn-input"></i>
          <span>linkedin</span>
        </label>
        <input
          {...register("linkedin")}
          type="text"
          placeholder="linkedIn handle"
          name="linkedin"
          // value={linkedIn}
          // onChange={(e) => setLinkedIn(e.target.value)}
        />
        <input type="submit" value="Add Address" className="add-address-btn" />
      </form>
    </div>
  );
}

export default AddressForm;
