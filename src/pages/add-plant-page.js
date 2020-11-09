import React from "react";
import { Helmet } from "react-helmet";
import AddPlant from "../components/add-plant";

function AddMoviePage() {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddPlant />
    </main>
  );
}

export default AddMoviePage;
