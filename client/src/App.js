import Amplify, { API } from "aws-amplify";
import { aws } from "./config";
import "./App.css";

console.log(`${aws.api}/Stage/hello`);

function App() {
  API.get("study-react-amplify", `${aws.api}/Stage/hello`, {
    headers: {},
    response: true
  })
    .then(response => console.log(response))
    .catch(error => console.log(error));

  return <div className="App">hello world </div>;
}

export default App;
