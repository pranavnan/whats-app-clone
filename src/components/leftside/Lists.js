import React, { useState } from "react";
import Searchbar from "./Searchbar";
import classes from "../../styles/List.module.css";
import Persons from "./Persons";

function Lists() {
  const [searchInput, setSearchInput] = useState("");

  function onSearchHandler(value) {
    setSearchInput(value);
  }

  return (
    <div className={classes.list_wrapper}>
      <Searchbar searchInput={searchInput} onSearch={onSearchHandler} />
      <Persons searchInput={searchInput} />
    </div>
  );
}

export default Lists;
