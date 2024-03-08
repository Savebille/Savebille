import React from "react";
import { default as ModalMUI } from "@mui/material/Modal";
import { X } from "@phosphor-icons/react";

type Props = {
  sx?: string;
  open: boolean;
  type?: "dialog" | "fullscreen";
  children: React.ReactNode;
  onClose?: () => void;
  showCloseButton?: boolean;
};

const Modal = ({
  open,
  children,
  onClose,
  sx = "",
  type = "fullscreen",
  showCloseButton = true,
  ...props
}: Props) => {
  return (
    <>
      {type === "dialog" ? (
        <dialog
          {...props}
          open={open}
          className={`fixed z-50 ${sx}`}
          onClose={onClose}
        >
          <div>{children}</div>
        </dialog>
      ) : (
        <ModalMUI open={open} onClose={onClose}>
          <div
            className={`bg-white absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] max-w-4xl p-4 lg:p-5 rounded-xl ${sx}`}
          >
            {children}

            {showCloseButton && (
              <div className="w-8 h-8 flex items-center justify-center hover:bg-h-blue-light absolute top-3 right-3 rounded-md cursor-pointer">
                <button
                  onClick={onClose}
                  className="bg-h-primary rounded-md w-5 h-5 flex justify-center items-center"
                >
                  <X size={13} weight="bold" className="z-50 text-white " />
                </button>
              </div>
            )}
          </div>
        </ModalMUI>
      )}
    </>
  );
};

export default Modal;
