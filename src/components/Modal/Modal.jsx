import { forwardRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  return createPortal(
    <dialog ref={ref} className="modal">
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

Modal.displayName = "Modal";

export default Modal;
