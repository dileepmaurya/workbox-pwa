import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';
import styled from 'styled-components'

const Button = styled.button``;
const App = () => (
    <>
      <Button type="button" className="btn btn-primary">Primery</Button>
    </>
);
const wrapper = document.getElementById("react-app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;