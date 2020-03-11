import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import "../styles/Search.scss";
import Button from "@material-ui/core/Button";
import clothing_icon from "..//clothingicon.png";
import bike_icon from "..//bike.png";
import textbook_icon from "..//book.png";
import camera_icon from "..//camera.png";
import school_supplies_icon from "..//school_supplies.png";

const Search = ({ searchQuery }) => {
  const [currTerm, setCurrTerm] = useState(searchQuery ? searchQuery : "");
  const history = useHistory();
  const searchTerm = `/results?search_query=${currTerm}`;
  useEffect(() => {
    setCurrTerm(searchQuery ? searchQuery : "");
  }, [searchQuery]);

  const changeCurrTerm = e => {
    setCurrTerm(e.target.value);
  };

  const changeCurrTermPreset = label => {
    history.push(`/results?search_query=${label}`);
  };

  // Case of enter
  const handleEnter = e => {
    if (e.keyCode === 13) history.push(searchTerm);
  };

  return (
    <div className="searchbar">
      <b>
        <p className="myText">
          itemShare. Northwestern&apos;s premier rental marketplace.
        </p>
      </b>
      <Grid container justify="center">
        <Paper className="root">
          <InputBase
            className="input"
            placeholder="Search for items"
            value={currTerm}
            onChange={changeCurrTerm}
            onKeyDown={handleEnter}
          />
          <Link to={searchTerm}>
            <IconButton className="iconButton" aria-label="search"></IconButton>
            <SearchIcon />
          </Link>
        </Paper>
      </Grid>
      <div className="buttons" aria-label="small outlined button group">
        <Button
          className="bike"
          onClick={() => {
            changeCurrTermPreset("bike");
          }}
        >
          <img src={bike_icon} alt=""></img>
        </Button>
        <Button
          onClick={() => {
            changeCurrTermPreset("clothing");
          }}
          className="clothing"
        >
          <img src={clothing_icon} alt=""></img>
        </Button>
        <Button
          onClick={() => {
            changeCurrTermPreset("camera");
          }}
          className="camera"
        >
          <img src={camera_icon} alt=""></img>
        </Button>
        <Button
          onClick={() => {
            changeCurrTermPreset("book");
          }}
          className="textbooks"
        >
          <img src={textbook_icon} alt=""></img>
        </Button>
        <Button
          onClick={() => {
            changeCurrTermPreset("school_supplies");
          }}
          className="school-supplies"
        >
          <img src={school_supplies_icon} alt=""></img>
        </Button>
      </div>
    </div>
  );
};

export default Search;
