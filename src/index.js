import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

import awsConfig from "./aws-exports";
import "./index.css";

Amplify.configure(awsConfig);

ReactDOM.render(<Application />, document.getElementById("root"));
