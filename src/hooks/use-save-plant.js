import { useState } from "react";
import { usersCollection } from "../data/firebase";

function useSavePlant() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (plantData, userId, plantId) => {
    setIsSaving(true);
    setFormMessage("");
    try {
      if (plantId === undefined) {
        await usersCollection.doc(userId).collection("plants").add(plantData);
      } else {
        await usersCollection
          .doc(userId)
          .collection("plants")
          .doc(plantId)
          .set(plantData);
      }

      console.log("Saved");
    } catch (error) {
      setFormMessage("Something went wrong. Please try againnnnn");
      console.error(error);
    }

    setIsSaving(false);
  };
  return [save, isSaving, formMessage];
}
export default useSavePlant;
