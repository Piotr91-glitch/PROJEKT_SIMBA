import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Lab2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Przykładowe dane
  const people = [
    { id: "1", name: "Jan Kowalski", age: 30 },
    { id: "2", name: "Anna Nowak", age: 25 },
    { id: "3", name: "Piotr Wiśniewski", age: 40 },
    { id: "4", name: "Marcin Najman", age: 40 },
    { id: "5", name: "Sasha Gray", age: 44 },
    { id: "6", name: "Jacek Murański", age: 47 },
  ];

  // Obsługa brakującego identyfikatora
  if (!id) {
    return <h1 style={{ color: "red" }}>Brak identyfikatora osoby.</h1>;
  }

  // Wyszukiwanie osoby na podstawie ID
  const person = people.find((p) => p.id === id);

  // Obsługa braku osoby z danym ID
  if (!person) {
    return (
      <h1 style={{ color: "red" }}>
        Nie znaleziono osoby o tym identyfikatorze: {id}.
      </h1>
    );
  }

  // Obsługa przycisków "Previous" i "Next"
  const currentIndex = people.findIndex((p) => p.id === id);
  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(`/lab2/${people[currentIndex - 1].id}`);
    }
  };
  const handleNext = () => {
    if (currentIndex < people.length - 1) {
      navigate(`/lab2/${people[currentIndex + 1].id}`);
    }
  };

  return (
    <div>
      <h1>Profil osoby</h1>
      <p><strong>ID:</strong> {person.id}</p>
      <p><strong>Imię i nazwisko:</strong> {person.name}</p>
      <p><strong>Wiek:</strong> {person.age}</p>

      {/* Przyciski nawigacji */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === people.length - 1}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Lab2;
