import React, { useState } from "react";
import ErrorMessage from "./error-message";
// import "./plant-form.css";

function PlantForm(props) {
  const { message, isSaving, onSubmit } = props;
  // const { initialState = {}, message, isSaving, onSubmit } = props;

  //   if (initialState.title === undefined) initialState.title = "Bloop";
  //   if (initialState.rating === undefined) initialState.rating = 3;
  //   if (initialState.releaseYear === undefined) initialState.releaseYear = 2020;

  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(null);
  //   const [releaseYear, setReleaseYear] = useState(null);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [sunlight, setSunlight] = useState(null);
  const [water, setWater] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onTypeChange = (event) => {
    setType(event.target.value);
  };
  const onSunlightChange = (event) => {
    setSunlight(event.target.value);
  };
  const onWaterChange = (event) => {
    setWater(event.target.value);
  };

  const onPlantSubmit = async (event) => {
    event.preventDefault();
    onSubmit(name, type, sunlight, water);
  };

  return (
    <form className="plant-form" onSubmit={onPlantSubmit}>
      <h2 className="plant-form__name">Plant Details</h2>
      {message && <p className="plant-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="plant-form__controls" disabled={isSaving}>
        <label className="plant-form__label">Plant Name:</label>
        <input
          className="plant-form__input"
          type="text"
          value={name}
          onChange={onNameChange}
        />
        <label className="plant-form__label">Type:</label>
        <input
          className="plant-form__input"
          type="text"
          value={type}
          onChange={onTypeChange}
        />
        <label className="plant-form__label">Sunlight (hours):</label>
        <input
          className="plant-form__input"
          type="number"
          value={sunlight}
          onChange={onSunlightChange}
        />
        <label className="plant-form__label">Amount of water (1-3):</label>
        <input
          className="plant-form__input"
          type="number"
          value={water}
          onChange={onWaterChange}
        />
        <input
          className="plant-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
      </fieldset>
    </form>
  );
}

export default PlantForm;
