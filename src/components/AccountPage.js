import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Switch } from "@material-ui/core";
import { db } from "../App";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

const AccountPage = ({ allItems }) => {
  const currUser = useContext(UserContext).user;
  const history = useHistory();

  if (!Object.keys(currUser).length) history.push("/");

  const myItems = allItems
    .filter(item => item[1].email === currUser.email)
    .map(item => item[1]);

  const handleAvailability = item => {
    db.child(`items/${item.id}`).update({
      ...item,
      isAvailable: !item.isAvailable
    });
  };

  const goBack = () => history.push("/");

  return (
    <div>
      <Button
        onClick={goBack}
        variant="contained"
        startIcon={<ArrowBackIcon />}
        className="back-button"
      >
        Back
      </Button>
      {myItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <img src={item.img} style={{ width: "100px" }}></img>
          Unavailable
          <Switch
            onChange={() => handleAvailability(item)}
            checked={item.isAvailable}
          />
          Available
        </div>
      ))}
    </div>
  );
};

export default AccountPage;
