import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logo_item_share from "..//logo_item_share.png";
import { Button, Toolbar, AppBar } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "../styles/Login.scss";
import "firebase/auth";
import "../styles/Banner.scss";

const Banner = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("Successfully signed out.");
      })
      .catch(() => {
        alert("Couldn't log out. Try again.");
      });
  };

  return (
    <AppBar position="sticky" className="nav-bar">
      <Toolbar>
        <Link to="/">
          <img src={logo_item_share} alt="" />
        </Link>
        <div>
          {location.pathname === "/login" ? (
            <div></div>
          ) : Object.entries(user).length === 0 ? (
            <Link to="/login">
              <Button
                variant="contained"
                color="primary"
                className="login-button login-link"
              >
                Login
              </Button>
            </Link>
          ) : (
            <div>
              <Link
                to="/account"
                style={{ position: "absolute", width: "200px", right: "150px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button login-link"
                >
                  My Account
                </Button>
              </Link>
              <Button
                variant="contained"
                color="primary"
                className="login-button login-link"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
