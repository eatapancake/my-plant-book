import React, { useState } from "react";
import LoadingSpinner from "./loading-spinner";
import ErrorMessage from "./error-message";
import Plant from "./plant";
import useAllPlants from "../hooks/use-all-plants";
import "./plant-listing.css";

function PlantListing(props) {
  const userId = props.user.uid;

  const [plants, isLoading, errorMessage] = useAllPlants(userId);
  const [test, setTest] = useState(1);
  // const [filterDropdown, setFilterDropdown] = useState(plants);

  const onTestChange = (event) => {
    // setFilterDropdown(plants.filter((plant) => plant.data.water === test));
    // setFilterDropdown(plants);

    setTest(event.target.value);
    console.log(test);
  };
  const onHandleChange = (event) => {};

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
      <label className="plant-listing__Filter">Amount of Water Filter:</label>

      <select value={test} onChange={onTestChange}>
        {plants.map((myPlantDoc) => {
          const MyPlantID = myPlantDoc.id;
          const MyPlantData = myPlantDoc.data();
          return (
            <option key={MyPlantID} value={MyPlantData.water}>
              {MyPlantData.water}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Submit" onChange={onHandleChange} />

      <ul className="plant-list" onChange={onTestChange}>
        {/* {filterDropdown.map((plantDoc) => { */}
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
