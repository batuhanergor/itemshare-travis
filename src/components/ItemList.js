import React from "react";
import Item from "./Item";
import { Grid } from "@material-ui/core";
// import "../styles/ItemPage.scss";
import "../styles/ItemList.scss";
import SearchIcon from "@material-ui/icons/Search";

const ItemList = ({ items }) => {
  return items.length ? (
    <Grid container spacing={3} justify="center">
      {items.map(([id, item]) =>
        <Grid item key={id}> <Item item={item} /></Grid>)}</Grid>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        textAlign: "center",
        padding: 25
      }}
    >
      <div>
        <SearchIcon style={{ fontSize: "125", color: "coral" }}></SearchIcon>
      </div>
      <div>
          We couldn't find the item you're looking for. Please try searching a
          different item!

      </div>
    </div>
  );
};

export default ItemList;
