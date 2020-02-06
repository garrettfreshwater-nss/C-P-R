import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Cpr from "./components/Cpr"

ReactDOM.render(
    <Router>
        <Cpr />
    </Router>
    , document.getElementById("root"))
