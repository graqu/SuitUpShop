import { createPortal } from "react-dom";
import React from "react";
import classes from "./Modal.module.css";

const targetDiv = document.getElementById("overlay-root");

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <div className={classes.backdrop} onClick={props.onClick}></div>,
        targetDiv
      )}
      {createPortal(
        <div className={classes.modal}>{props.children}</div>,
        targetDiv
      )}
    </>
  );
};

export default Modal;
