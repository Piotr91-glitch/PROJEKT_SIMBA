import React from "react";
import { Card } from "react-bootstrap";
import RatingBar from "./RatingBar";

const Item = ({ name, rating, id, dispatch }) => {
  const handleEdit = () => {
    dispatch({ type: "edit", id, newName: prompt("Podaj nowe imię:", name) });
  };

  const handleDelete = () => {
    dispatch({ type: "delete", id });
  };

  const handleRate = () => {
    dispatch({ type: "rate", id });
  };

  return (
    <Card style={{ width: "18rem" }} className="border mb-3 p-3 ms-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <RatingBar rate={rating} />
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-success" onClick={handleRate}>
            Rate
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
