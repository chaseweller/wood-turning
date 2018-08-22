import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const home = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to ="/"> HOME </Link>
                </li>
                 <li>
                    <Link to = "/about"> ABOUT </Link>
                </li>
             </ul>
        </div>
    </Router>


);

