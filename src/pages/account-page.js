import React from "react";
import { Helmet } from "react-helmet";
import AccountInfo from "../components/account-info.js";

function AccountPage(props) {
  return (
    <main>
      <Helmet>
        <title>Account</title>
      </Helmet>
      <AccountInfo user={props.user} />
      {/* <AccountInfo {...props} /> */}
    </main>
  );
}

export default AccountPage;
