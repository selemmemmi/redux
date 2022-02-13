import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/actions/actions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: "#333",
    display: "flex",
    flexDirection: "column",
    height: "25vh",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function SimpleModal({ id, text }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const [open, setOpen] = React.useState(false);
  const [change, setChange] = useState(text);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <input
        className="modalInput"
        type="text"
        onChange={(e) => setChange(e.target.value)}
        value={change}
      />
      <button
        className="modalBtn"
        onClick={() => {
          dispatch(editTask(id, change));
          handleClose();
        }}
      >
        CHANGE
      </button>
    </div>
  );

  return (
    <div>
      <button
        // style={styleBtn}
        // className="btn-modale "
        type="button"
        onClick={handleOpen}
      >
        EDIT
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {body}
      </Modal>
    </div>
  );
}
