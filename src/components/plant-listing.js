import React from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { plantsCollection } from "../data/firebase";
import Plant from "./plant";
import useAllPlants from "../hooks/use-all-plants";
import "./plant-listing.css";

function PlantListing(props) {
  const userId = props.user.uid;

  const [plants, isLoading, errorMessage] = useAllPlants(userId);
  return (
    <div className="plants-container">
      <h1>Plants</h1>
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
      <ul className="plant-list">
        {plants.map((plantDoc) => {
          const plantID = plantDoc.id;
          const plantData = plantDoc.data();

          return (
            <li key={plantID}>
              <Plant id={plantID} data={plantData} userId={userId} />
            </li>
          );
        })}
      </ul>
    </div>
  );

  // return <div>Plant listing.. test</div>;
}
export default PlantListing;
