import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js"
import "./index.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faShoppingCart, faTimes, faBolt, faBook, faTags, faStarHalfAlt, faStar, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

library.add( faBars, faShoppingCart, faTimes, faBolt, faBook, faTags, faStarHalfAlt, faStar, faArrowLeft )


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);