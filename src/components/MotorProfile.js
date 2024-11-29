import React from "react";

const MotorProfile = ({ id, name, productionDate, color }) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{name}</h3>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Data Produkcji:</strong> {productionDate}
      </p>
      <p>
        <strong>Kolor:</strong> {color}
      </p>
    </div>
  );
};

export default MotorProfile;
