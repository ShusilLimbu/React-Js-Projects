import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './textUtils.css';
// import App from './usefuWebsite.js';
// import Counterapp from './Counterapp.js';
// import Dice from './Dice.js'
// import SICalculator from "./SICalculater";
import App from "./App.js";

const rootElement=document.getElementById('root');
const root=createRoot(rootElement);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)