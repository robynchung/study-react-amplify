import api from "../config";

export default [
  {
    name: "helloWorld",
    endpoint: `${api}/hello`,
    service: "lambda",
    region: "us-east-2"
  }
];
