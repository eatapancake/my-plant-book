import React from "react";
import { Helmet } from "react-helmet";
import PlantListing from "../components/plant-listing";
import "./pages.css";

function PlantPage(props) {
  return (
    <main>
      <Helmet>
        <title className="main__title">Plants</title>
      </Helmet>
      <PlantListing {...props} />
    </main>
  );
}

export default PlantPage;
