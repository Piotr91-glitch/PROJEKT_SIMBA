import React from "react";
import MotorProfile from "../components/MotorProfile";
import { motorData } from "../data/motorData";

const Lab1 = () => {
  return (
    <div>
      <h1>Lista Motorów</h1>
      {motorData.map((motor) => (
        <MotorProfile
          key={motor.id}
          id={motor.id}
          name={motor.name}
          productionDate={motor.productionDate}
          color={motor.color}
        />
      ))}
    </div>
  );
};

export default Lab1;
