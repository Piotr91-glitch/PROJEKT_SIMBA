import React from "react";

const RatingBar = ({ rate }) => {
  const maxStars = 10;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centrowanie gwiazdek
        overflow: "hidden", // Zapobiega wychodzeniu poza rodzica
        whiteSpace: "nowrap", // Zapobiega zawijaniu gwiazdek
      }}
    >
      {Array.from({ length: maxStars }).map((_, index) => (
        <span
          key={index}
          style={{
            fontSize: "15px", // Rozmiar gwiazdek
            color: index < rate ? "#FFD700" : "#ddd", // Wypełniona lub pusta gwiazdka
            margin: "0 2px", // Odstępy między gwiazdkami
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
