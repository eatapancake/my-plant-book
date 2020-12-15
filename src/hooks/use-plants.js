import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function usePlant(userId, plantId) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [plantData, setPlantData] = useState(null);

  useEffect(() => {
    async function getPlant() {
      setIsLoading(true);

      try {
        const plantSnapshot = await usersCollection
          .doc(userId)
          .collection("plants")
          .doc(plantId)
          .get();

        if (!plantSnapshot.exists) {
          throw new Error("No such movie exists!");
        }

        const data = plantSnapshot.data();
        setPlantData(data);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again.");
        console.error(error);
      }

      setIsLoading(false);
    }

    getPlant();
  }, [plantId]);

  return [plantData, isLoading, errorMessage];
}

export default usePlant;
