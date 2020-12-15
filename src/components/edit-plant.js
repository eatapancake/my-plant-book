import React, { useState, useEffect } from "react";
import { plantsCollection } from "../data/firebase";
import usePlant from "../hooks/use-plants";
import useSavePlant from "../hooks/use-save-plant";
import "./edit-plant.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import PlantForm from "./plant-form";

function EditPlant(props) {
  const plantId = props.id;
  const userId = props.user.uid;

  const [plantData, isLoading, errorMessage] = usePlant(userId, plantId);
  const [savePlant, isSaving, formMessage] = useSavePlant();

  const onPlantSubmit = async (name, type, sunlight, water, season = {}) => {
    savePlant({ name, type, sunlight, water, season }, userId, plantId);
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
