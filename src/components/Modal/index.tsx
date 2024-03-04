import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Plus } from '@phosphor-icons/react';
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  buttonText: string
}

const Modal = ({ children, buttonText }: ModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className='flex items-center px-3 py-2 bg-h-info rounded-md mt-4 sm:mt-0 transition ease-in-out hover:scale-105 duration-200 text-h-white text-[14px] font-normal gap-2'>
        <Plus size={16} color={'var(--h-white)'} />
        {buttonText}
      </AlertDialogTrigger>
      <AlertDialogContent>
        {children}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Guardar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Modal;
