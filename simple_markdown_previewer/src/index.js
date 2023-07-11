import React from "react"
import {createRoot} from "react-dom/client";
import Hello from "./Hello";
import * as ReactDOM from "react-dom";


// const root = createRoot(document.getElementById("root"));
// root.render(<Hello name={"hong"}/>);

ReactDOM.render(<Hello name={"hong"}/>, document.getElementById("root"))