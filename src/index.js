import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <>
      <h1>Hello React app</h1>
    </>
);
const wrapper = document.getElementById("react-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;