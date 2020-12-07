import { useState, useEffect } from "react";
import { plantsCollection, usersCollection } from "../data/firebase";

function useAllPlants(userID) {
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
    const unsubscribe = usersCollection
      .doc(userID)
      .collection("plants")
      .orderBy("name", "desc")
      .onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return [plants, isLoading, errorMessage];
}

export default useAllPlants;
