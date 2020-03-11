import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import MainPage from "./components/MainPage";
import ItemPage from "./components/ItemPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import UserProvider from "./contexts/UserContext";
import AccountPage from "./components/AccountPage";

// css styling: clean up imports after webpack is built in
import "./App.css";
// import "./styles/Banner.scss";
// import "./styles/ItemPage.scss";
// import "./styles/Login.scss";
// import "./styles/ModalManager.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Firebase
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCBTX-6ANlkTp1VBa3DtteC3IidMEVuv1g",
  authDomain: "itemshare-94837.firebaseapp.com",
  databaseURL: "https://itemshare-94837.firebaseio.com",
  projectId: "itemshare-94837",
  storageBucket: "itemshare-94837.appspot.com",
  messagingSenderId: "536577401914",
  appId: "1:536577401914:web:ab909fc4da2fcf0302c103"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();
const storageRef = firebase.storage().ref();

const App = () => {
  const [items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) {
        setAllItems(Object.entries(snap.val().items));
        setItems(Object.entries(snap.val().items));
      }
    };
    db.on("value", handleData, error => alert(error));
    return () => {
      db.off("value", handleData);
    };
  }, []);

  return (
    <UserProvider>
      <Router>
        <Banner />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <MainPage
                items={allItems}
                allItems={allItems}
                setItems={setItems}
              />
            )}
          />
          <Route
            path="/results"
            exact
            render={() => (
              <MainPage items={items} setItems={setItems} allItems={allItems} />
            )}
          />
          <Route path="/login" exact render={() => <LoginPage />} />
          <Route
            path="/account"
            exact
            render={() => <AccountPage allItems={allItems} />}
          />
          <Route path="/:id" render={() => <ItemPage allItems={allItems} />} />
        </Switch>
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
export { db, storageRef };
