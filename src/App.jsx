import React from "react";
import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <h1>Hello from the App Component!</h1>
      <Greeting name="Angel Gabriel" />

    </div>
  );
}
export default App;
// In this code, we have a functional component called App that returns a simple JSX structure.
// It includes an h1 element with a greeting message and a Greeting component.
// The Greeting component is imported from another file and is passed a prop called name with the value "Michael Ha".
// The App component is then exported for use in other parts of the application.
// This is a simple example of how to create a functional component in React and use it within another component.
// The Greeting component is a custom component that can be reused in different parts of the application.
