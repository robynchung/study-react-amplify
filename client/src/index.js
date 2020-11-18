import React from "react";
import ReactDOM from "react-dom";
import Amplify, { API } from "aws-amplify";
import App from "./App";
import { aws } from "./config";
import "./index.css";

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
