import React from "react"
import {createRoot} from "react-dom/client";
import App from "./App";
// import * as ReactDOM from "react-dom";
// ReactDOM.render(<App name={"hong"}/>, document.getElementById("root"))


const root = createRoot(document.getElementById("root"));
root.render(<App name={"hong"}/>);
