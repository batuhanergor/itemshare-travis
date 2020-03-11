import React from "react";
import { Link, useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import "../styles/Item.scss";

export default function Item({ item }) {
  const { pathname, search } = useLocation();
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/${item.id}`,
        state: { prevURL: `${pathname}${search}` }
      }}
    >
      <Grid container className="page-container">
        <Card className="product-list-card ">
          <Grid container justify="center">
            <CardMedia className="product-media" image={item.img} />
          </Grid>
          <CardContent className="card-content">
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className="name-typography"
            >
              {item.name}
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              className="typography"
            >
              Price: ${item.price} /week
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              component="p"
              className="typography"
            >
              Available Until: {item.availableTill}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Link>
  );
}
