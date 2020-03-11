import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  Input,
  Button,
  Select,
  MenuItem,
  Switch,
  Card,
  Grid
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import "../styles/Login.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    domain: "u.northwestern.edu",
    password: ""
  });

  const [formType, setFormType] = useState("Login");
  const history = useHistory();
  const { state } = useLocation();

  const goBack = () =>
    state ? history.push(state.prevURL) : history.push("/");

  const setUserField = (field, data) => {
    setLoginInfo({ ...loginInfo, [field]: data });
  };

  const login = e => {
    e.preventDefault();
    const { email, domain, password } = loginInfo;
    firebase
      .auth()
      .signInWithEmailAndPassword(`${email}@${domain}`, password)
      .then(() => {
        alert("Lgged in successfully.");
        goBack();
      })
      .catch(error => alert(error.message));
  };

  const signUp = e => {
    e.preventDefault();
    const { email, domain, password } = loginInfo;
    firebase
      .auth()
      .createUserWithEmailAndPassword(`${email}@${domain}`, password)
      .then(() => {
        alert("You successfully signed up!");
        goBack();
      })
      .catch(error => alert(error.message));
  };

  const handleFormChange = e => {
    if (e.target.checked) {
      setFormType("Signup");
    } else {
      setFormType("Login");
    }
  };

  return (
    <Grid container justify="center" className="page-container">
      <Grid item xs={12} sm={12} md={6} lg={6}>
        {
          <Button
            onClick={goBack}
            color="default"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            className="back-button"
          >
            Back
          </Button>
        }
        <Card className="login-card">
          {/* <CardHeader className="login-header"></CardHeader> */}
          <form
            className="form"
            onSubmit={formType === "Login" ? login : signUp}
            style={{ textAlign: "center" }}
          >
            <div>
              Login
              <Switch
                onChange={handleFormChange}
                checked={formType !== "Login"}
              />
              Signup
            </div>
            <Grid container className="email">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  className="input"
                  placeholder="Email"
                  value={loginInfo.email}
                  onChange={e => setUserField("email", e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                @
                <Select
                  className="select"
                  autoWidth={true}
                  labelId="domain-select"
                  value={loginInfo.domain}
                  onChange={e => setUserField("domain", e.target.value)}
                >
                  <MenuItem value="u.northwestern.edu">
                    u.northwestern.edu
                  </MenuItem>
                  <MenuItem value="northwestern.edu">northwestern.edu</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid container className="password">
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Input
                  className="input"
                  placeholder="Password"
                  value={loginInfo.password}
                  type="password"
                  onChange={e => setUserField("password", e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              className="login-button"
              variant="contained"
              color="primary"
              type="submit"
            >
              {formType}
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
