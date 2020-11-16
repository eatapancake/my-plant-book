import React, { useState } from "react";
import { plantsCollection } from "../data/firebase";
// import "./add-plant.css";
import PlantForm from "./plant-form";

function AddPlant() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const onPlantSubmit = async (name, type, sunlight = {}, water, season) => {
    // alert(`You want to add ${title} ${rating} ${releaseYear}`);

    setIsSaving(true);
    setFormMessage("");
    try {
      await plantsCollection.add({
        name,
        type,
        sunlight,
        water,
        season,
      });
      console.log("Saved");
    } catch (error) {
      setFormMessage("Something went wrong. Please try again");
      console.error(error);
    }

    setIsSaving(false);
  };

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
