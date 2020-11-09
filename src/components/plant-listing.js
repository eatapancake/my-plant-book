import React, { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import { plantsCollection } from "../data/firebase";
import Plant from "./plant";

function PlantListing() {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    console.log("Fetching");

    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setPlants(docs);
    };
    const onError = (error) => {
      setErrorMessage(
        "There was a problem loading your page. Please try again..."
      );
      console.error(error);
    };
    const unsubscribe = plantsCollection
      .orderBy("name")
      .onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);
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
              <Plant id={plantID} data={plantData} />
            </li>
          );
        })}
      </ul>
    </div>
  );

  // return <div>Plant listing.. test</div>;
}
export default PlantListing;
