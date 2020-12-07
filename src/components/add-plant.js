import React from "react";

import useSavePlant from "../hooks/use-save-plant";
// import "./add-plant.css";
import PlantForm from "./plant-form";

function AddPlant(props) {
  const userId = props.user.uid;
  const [savePlant, isSaving, formMessage] = useSavePlant();

  const onPlantSubmit = async (name, type, sunlight, water, season = {}) => {
    savePlant({ name, type, sunlight, water, season }, userId);
  };
  // alert(`You want to add ${title} ${rating} ${releaseYear}`);

  return (
    <div className="add-container">
      <h1>Add Plant</h1>
      <PlantForm
        onSubmit={onPlantSubmit}
        isSaving={isSaving}
        message={formMessage}
      />
    </div>
  );
}

export default AddPlant;
