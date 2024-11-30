import React from "react"; // React, potrzebny dla komponentu funkcjonalnego
import FlexContainer from "../components/FlexContainer"; // Kontener, który renderuje kafelki
import Item from "../components/Item"; // Komponent do renderowania każdego elementu
import { useReducer } from "react"; // Hook do obsługi reduktora



const initialState = [
  { id: 1, name: "Ala", rating: 7 },
  { id: 2, name: "Ela", rating: 9 },
  { id: 3, name: "Karol", rating: 5 },
  { id: 4, name: "Ola", rating: 8 },
  { id: 5, name: "Monik", rating: 6 },
  { id: 6, name: "Robert", rating: 4 },
  { id: 7, name: "Robert", rating: 4 },
  { id: 8, name: "Robert", rating: 4 },
  { id: 9, name: "Robert", rating: 4 },
  { id: 10, name: "Robert", rating: 4 },
  { id: 11, name: "Robert", rating: 4 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "RATE_ITEM":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, rating: item.rating === 10 ? 0 : item.rating + 1 }
          : item
      );
    default:
      return state;
  }
};

const pageStyle = {
  backgroundColor: "#f5f7fa", // Delikatny pastelowy niebieski
  minHeight: "100vh", // Pełna wysokość ekranu
  padding: "20px",
};

const Lab3Page = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRate = (id) => {
    dispatch({ type: "RATE_ITEM", payload: id });
  };

  return (
    <div style={pageStyle}>
      <h1>Laboratorium 3</h1>
      <FlexContainer
        element={Item}
        data={state}
        onRate={handleRate} // Przekazywanie funkcji do obsługi zdarzeń
      />
    </div>
  );
};




export default Lab3Page;
