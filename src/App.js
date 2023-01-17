import React, { useState } from "react";
import Grid from "./components/Grid/";

import Header from "./components/Navbar/";

import "materialize-css";
import "./App.scss";

export default function App() {

  const [filter, setFilter] = useState("character");

  const getFilter = (filter) => {
    setFilter(filter)
  }

  return (
    <div className="App">
      <Header func={getFilter} />
      <div className="Grid">
        <Grid filter={filter} />
      </div>
    </div>
  );
}
