import React from "react";

function Greeting({ name }) {
  return (
    <div>
    <h2>Hello from the Greeting Component!</h2>
    <p>This is your first custom component in React.</p>
    <p>Welcome, {name}!</p>
    <p>We are glad to have you here.</p>
    </div>
   );     
}   

export default Greeting;
// In this code, we have a functional component called Greeting that takes a prop called name.
// It returns a simple JSX structure that includes an h1 element with a greeting message.
// The component is then exported for use in other parts of the application.
// This is a simple example of how to create a functional component in React.
