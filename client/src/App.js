import { useEffect } from "react";
import { API } from "aws-amplify";

function App() {
  useEffect(() => {
    API.post("study-react-amplify", `/Stage/hello`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  });

  return <div className="App">hello world </div>;
}

export default App;
