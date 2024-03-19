import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
interface ModalProps {
  triggerContent: React.ReactNode;
  mainContent?: React.ReactNode;
  title?: string;
  description?: string;
  hasHeader?: boolean;
  closeModal?: boolean;
}

const Modal = ({
  triggerContent,
  title,
  description,
  mainContent,
  hasHeader,
  closeModal,
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        {hasHeader && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        )}

        {mainContent} 

        <DialogClose asChild>
          {closeModal && <button>Cerrar</button>}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
