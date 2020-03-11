/* eslint-disable indent */
import React, { Fragment, useState } from "react";
import NewItemModal from "./NewItemModal";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import "../../styles/ModalManager.scss";

const ModalManager = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Fragment>
      <NewItemModal state={{ modalOpen, setModalOpen }} />
      <Grid container justify="flex-end" className="add-button-container">
        <Button
          className="add-button"
          variant="contained"
          onClick={() => setModalOpen(true)}
        >
          Post an Item
        </Button>
      </Grid>
    </Fragment>
  );
};

export default ModalManager;
