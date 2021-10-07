import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const reactAppData = window.rpReactPlugin || {};
const { appSelector } = reactAppData;
const appAnchorElement = document.querySelector(appSelector);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    appAnchorElement
    // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import * as serviceWorker from './serviceWorker'

// const reactAppData = window.rpReactPlugin || {}
// const { appSelector } = reactAppData
// const appAnchorElement = document.querySelector(appSelector)

// if (appAnchorElement) {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     appAnchorElement
//   )
// }

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
