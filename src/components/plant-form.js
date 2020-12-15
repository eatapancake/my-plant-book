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
  // if (initialState.season[0] === undefined) initialState.season[0] = "Winter";
  // if (initialState.season[1] === undefined) initialState.season[1] = "Winter";

  //   const [title, setTitle] = useState("");
  //   const [rating, setRating] = useState(null);
  //   const [releaseYear, setReleaseYear] = useState(null);

  const [name, setName] = useState(initialState.name);
  const [type, setType] = useState(initialState.type);
  const [sunlight, setSunlight] = useState(initialState.sunlight);
  const [water, setWater] = useState(initialState.water);
  const [season = {}, setSeason = {}] = useState([]);
  // const [season2, setSeason2] = useState([initialState.season[1]]);

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
    setSeason(season.concat(event.target.value));
  };
  const onSeasonChange2 = (event) => {
    setSeason(season.concat(event.target.value));
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
        <select onChange={onSeasonChange}>
          <option value="N/A">N/A</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
        <label className="plant-form__label">2. Season: </label>
        <select onChange={onSeasonChange2}>
          <option value="N/A">N/A</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
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
