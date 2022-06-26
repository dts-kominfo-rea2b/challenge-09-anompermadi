// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ props }) => {
  const { name, phone, email, photo } = props;
  return (
    <div className="Container">
      <img src={photo} alt={name} />
      <div className="Right">
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Contact;
