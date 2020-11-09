import React from "react";
import { Helmet } from "react-helmet";
// import { useParams } from "react-router-dom";
import EditPlant from "../components/edit-plant";
function AddMoviePage() {
  return (
    <main>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <EditPlant />
    </main>
  );
}

export default AddMoviePage;
