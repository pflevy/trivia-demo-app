import * as React from "react";
import classes from "./modal.module.css";

export interface ModalProps {
  toggleShowModal: Function;
}

const Modal: React.SFC<ModalProps> = ({ toggleShowModal, children }) => {
  return (
    <div onClick={() => toggleShowModal()} className={classes.modal}>
      {children}
    </div>
  );
};

export default Modal;
