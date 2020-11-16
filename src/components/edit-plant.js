import React, { useState, useEffect } from "react";
import { plantsCollection } from "../data/firebase";
import "./edit-plant.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import PlantForm from "./plant-form";

function EditPlant(props) {
  const { id } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [plantData, setPlantData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    async function getPlant() {
      setIsLoading(true);
      try {
        const plantSnapshot = await plantsCollection.doc(id).get();

        if (!plantSnapshot.exists) {
          throw new Error("no such movie exists! >:O ");
        }

        const data = plantSnapshot.data();
        setPlantData(data);
      } catch (error) {
        setErrorMessage("Something went wrong! PLease try again D:");
        console.error(error);
      }
      setIsLoading(false);
    }
    getPlant();
  }, [id]);

  const onPlantSubmit = async (name, type, sunlight, water, season = {}) => {
    setIsSaving(true);
    setFormMessage("");
    try {
      await plantsCollection.doc(id).set({
        name,
        type,

        sunlight,
        water,
        season,
      });
      setFormMessage("Saved Successfully!! ^ ^");
    } catch (error) {
      setFormMessage("Something went wrong >_<");
    }
    setIsSaving(false);
  };

  return (
    <div className="edit-container">
      <h2>Edit Plant</h2>

      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && (
        <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>
      )}
      {plantData && (
        <PlantForm
          initialState={plantData}
          onSubmit={onPlantSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditPlant;
