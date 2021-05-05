import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme"; 
import App from "./App";

import "./index.css";

ReactDOM.render(
    <ThemeProvider theme={ theme }>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);