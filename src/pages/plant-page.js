import React from "react";
import { Helmet } from "react-helmet";
import PlantListing from "../components/plant-listing";

function PlantPage() {
  return (
    <main>
      <Helmet>
        <title>Plants</title>
      </Helmet>
      <PlantListing />
    </main>
  );
}

export default PlantPage;
