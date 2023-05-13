import React from "react";
import { createBrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar";
import News from "./components/News";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div key={"general"}>
        <NavBar />,
        <News pageSize={6} category="general" />
      </div>
    ),
  },
  {
    path: "/science",
    element: (
      <div key={"science"}>
        <NavBar />,
        <News pageSize={6} category="science" />
      </div>
    ),
  },
  {
    path: "/business",
    element: (
      <div key={"business"}>
        <NavBar />,
        <News pageSize={6} category="business" />
      </div>
    ),
  },
  {
    path: "/entertainment",
    element: (
      <div key={"entertainment"}>
        <NavBar />,
        <News pageSize={6} category="entertainment" />
      </div>
    ),
  },
  {
    path: "/general",
    element: (
      <div key={"general"}>
        <NavBar />,
        <News pageSize={6} category="general" />
      </div>
    ),
  },
  {
    path: "/health",
    element: (
      <div key={"health"}>
        <NavBar />,
        <News pageSize={6} category="health" />
      </div>
    ),
  },
  {
    path: "/sports",
    element: (
      <div key={"sports"}>
        <NavBar />,
        <News pageSize={6} category="sports" />
      </div>
    ),
  },
  {
    path: "/technology",
    element: (
      <div key={"technology"}>
        <NavBar />,
        <News pageSize={6} category="technology" />
      </div>
    ),
  },
]);

export { router };
