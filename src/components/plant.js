import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { usersCollection } from "../data/firebase";
import "./plant.css";

function Plant(props) {
  const { id, data, userId } = props;
  const { name, type, sunlight, water, season } = data;

  const waterString = "💧".repeat(water) + " ▪ ".repeat(3 - water);
  const seasonList = () => (
    <div>
      <ul>
        {season.map((season) => (
          <li key={season}> {season} </li>
        ))}
      </ul>
    </div>
  );
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const deletePlant = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = usersCollection.doc(userId).collection("plants").doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "something went wrong while deleting. Please try again..."
      );
      setIsDeleting(false);
    }
  };
  return (
    <div className="plant">
      <div className="plant__contents">
        <div className="plant__name">{name}</div>
        <div className="plant__type">type: {type}</div>
        <div>
          Seasons:
          <ul className="plant__seasons">
            {season.map((seasonObject) => {
              const season = seasonObject;
              return <li key={season}> {season} </li>;
            })}
          </ul>
        </div>
        <div className="plant__sunlight">
          Amount of sunlight: {sunlight} hours
        </div>
        <div className="plant__water">Amount of water: {waterString}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button
          className="plant__button"
          disabled={isDeleting}
          onClick={deletePlant}
        >
          <Delete />
        </button>
        <button
          className="plant__button"
          onClick={() => history.push(`/edit/${id}`)}
        >
          <Edit />
        </button>
      </div>
    </div>
  );

  // return <div>testing...</div>;
}

export default Plant;
