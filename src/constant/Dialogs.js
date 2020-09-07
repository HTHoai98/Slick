import dynamic from "next/dynamic";
import React from "react";

const SignInForm = dynamic(() =>
  import("../components/Form/SignInForm"),
);


export const DialogKey = {
  signIn: "signIn",
};

const Dialogs = {
  [DialogKey.signIn]: <SignInForm />,
};

export default Dialogs;
