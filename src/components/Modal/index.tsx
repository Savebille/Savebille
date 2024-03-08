import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface ModalProps {
  triggerContent: React.ReactNode;
  mainContent?: React.ReactNode;
  title?: string;
  description?: string;
  hasHeader?:boolean;
}

const Modal = ({
  triggerContent,
  title,
  description,
  mainContent,
  hasHeader
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent 
        onInteractOutside={(e) => {
          e.preventDefault();
        }}>

          {hasHeader && (
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>
                {description}
              </DialogDescription>
            </DialogHeader>
          )}
        {mainContent}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
