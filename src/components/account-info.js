import React, { useState } from "react";
import ErrorMessage from "./error-message";
import { provider, auth } from "../data/firebase";
// import "./account-info.css";

function AccountInfo(props) {
  const { user } = props;
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      setErrorMessage("Something went wrong, please try again");
      console.error(error);
    }
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      await auth.signOut();
    } catch (error) {
      setErrorMessage("Something went wrong, please try again");
    }
    setIsLoading(false);
  };

  let contents;
  if (user) {
    const { displayName } = user;
    contents = (
      <>
        <p>Welcome back, {displayName}! You can log out below</p>
        <button className="login-form__button" onClick={signOut}>
          {" "}
          {isLoading ? "Logging Out..." : "Log Out"}
        </button>
      </>
    );
  } else {
    contents = (
      <>
        <p>
          You can log in or create an account by linking your Google Account.
          Follow the instructions in the pop up window.{" "}
        </p>
        <button
          className="login-form__button"
          onClick={signIn}
          disabled={isLoading}
        >
          {isLoading ? "Logging In..." : "Log In"}
        </button>
      </>
    );
  }
  return (
    <div className="account-container">
      <h1>Account Info</h1>
      <div className="login-form">
        <h2>Social Login</h2>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {contents}
      </div>
    </div>
  );
}

export default AccountInfo;
