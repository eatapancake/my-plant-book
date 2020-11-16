import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import EditPlant from "../components/edit-plant";
function AddMoviePage() {
  const { id } = useParams();
  return (
    <main>
      <Helmet>
        <title className="main__title">Edit</title>
      </Helmet>
      <EditPlant id={id} />
    </main>
  );
}

export default AddMoviePage;
