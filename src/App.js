import React from "react";

import NavBar from "./components/NavBar";
import News from "./components/News";
import "./App.css";

const NewsApp = () => {
  return (
    <div>
      <NavBar />
      <News pageSize={4} />
    </div>
  );
};

export { NewsApp };
