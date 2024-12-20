import React, { useContext } from "react";
import AppContext from "../data/AppContext";

function FlexContainer({ element: Element }) {
  const { items, dispatch } = useContext(AppContext);

  return (
    <div className="d-flex flex-wrap">
      {items.map((item) => (
        <Element key={item.id} {...item} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default FlexContainer;
