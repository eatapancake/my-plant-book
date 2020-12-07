import React from "react";
import { Helmet } from "react-helmet";
import AddPlant from "../components/add-plant";

function AddMoviePage(props) {
  return (
    <main>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <AddPlant {...props} />
    </main>
  );
}

export default AddMoviePage;
