import React from "react";
import ReactDOM from "react-dom";
import Amplify, { API } from "aws-amplify";

import "./index.css";
import App from "./App";
import awsConfig from "./aws-exports";
import { aws } from "./config";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

Amplify.configure({
  API: {
    endpoints: [
      {
        name: "study-react-amplify",
        endpoint: aws.api,
        service: "lambda",
        region: "us-east-2"
      }
    ]
  }
});

API.configure();

console.log(API);
