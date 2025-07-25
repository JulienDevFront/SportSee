import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import './assets/styles/index.css';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <HomePage />
  </BrowserRouter>,
);
