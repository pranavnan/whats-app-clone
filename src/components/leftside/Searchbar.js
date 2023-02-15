import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import classes from "../../styles/SearchBar.module.css";

function Searchbar(props) {
  function inputHandler(e) {
    console.log(e.target.value);
    props.onSearch(e.target.value);
  }

  return (
    <div className={classes.input_box}>
      <label htmlFor="input_id">
        <span>
          <AiOutlineSearch />
        </span>
      </label>
      <input
        onChange={inputHandler}
        value={props.searchInput}
        id="input_id"
        type="text"
        placeholder="Search User By Name"
      />
    </div>
  );
}

export default Searchbar;
