import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./plant-form.css";

function PlantForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;
  // const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.name === undefined) initialState.name = "Unknown";
  if (initialState.type === undefined) initialState.type = "Unknown";
  if (initialState.sunlight === undefined) initialState.sunlight = 0;
  if (initialState.water === undefined) initialState.water = 1;
  if (initialState.season === undefined) initialState.season = "Unknown";

  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(null);
  //   const [releaseYear, setReleaseYear] = useState(null);

  const [name, setName] = useState(initialState.name);
  const [type, setType] = useState(initialState.type);
  const [sunlight, setSunlight] = useState(initialState.sunlight);
  const [water, setWater] = useState(initialState.water);
  const [season, setSeason] = useState([initialState.season]);

  const [errorMessage, setErrorMessage] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onTypeChange = (event) => {
    setType(event.target.value);
  };
  const onSunlightChange = (event) => {
    const min = 0;
    const max = 24;
    const value = Number.parseInt(event.target.value);
    if (value < min) setSunlight(min);
    else if (value > max) setSunlight(max);
    else setSunlight(value);
  };
  const onWaterChange = (event) => {
    const min = 1;
    const max = 3;
    const value = Number.parseInt(event.target.value);
    if (value < min) setWater(min);
    else if (value > max) setWater(max);
    else setWater(value);
  };
  const onSeasonChange = (event) => {
    setSeason([0].concat(event.target.value));
  };
  const onSeasonChange2 = (event) => {
    setSeason([1].concat(event.target.value));
  };

  const onPlantSubmit = async (event) => {
    event.preventDefault();
    onSubmit(name, type, sunlight, water, season);
  };

  return (
    <form className="plant-form" onSubmit={onPlantSubmit}>
      <h2 className="plant-form__name">Plant Details</h2>
      {message && <p className="plant-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="plant-form__controls" disabled={isSaving}>
        <label className="plant-form__label">Plant Name: </label>
        <input
          className="plant-form__input"
          type="text"
          value={name}
          onChange={onNameChange}
        />
        {/* //------- */}
        <label className="plant-form__label"> 1. Season: </label>
        <select value={season[0]} onChange={onSeasonChange}>
          <option>Spring</option>
          <option>Summer</option>
          <option>Fall</option>
          <option>Winter</option>
        </select>
        <label className="plant-form__label">2. Season: </label>
        <select value={season[1]} onChange={onSeasonChange2}>
          <option>Spring</option>
          <option>Summer</option>
          <option>Fall</option>
          <option>Winter</option>
          <option>N/A</option>
        </select>
        <label className="plant-form__label">Type: </label>
        <input
          className="plant-form__input"
          type="text"
          value={type}
          onChange={onTypeChange}
        />
        <label className="plant-form__label">Sunlight (hours): </label>
        <input
          className="plant-form__input"
          type="number"
          value={sunlight}
          onChange={onSunlightChange}
        />
        <label className="plant-form__label">Amount of water (1-3): </label>
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
