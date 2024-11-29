import React, { useReducer } from "react";
import AppContext from "../data/AppContext";
import AppReducer, { initialState } from "../data/AppReducer";
import FlexContainer from "../components/FlexContainer";
import Item from "../components/Item"; // Import komponentu Item

const Lab4Page = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ items: state, dispatch }}>
      <div style={{ backgroundColor: "#f5f7fa", minHeight: "100vh", padding: "20px" }}>
        <h1>Laboratorium 4</h1>
        <FlexContainer element={Item} data={state} />
      </div>
    </AppContext.Provider>
  );
};

export default Lab4Page;
