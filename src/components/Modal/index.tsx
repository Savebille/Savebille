import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import React from 'react';
import { Button } from '../ui/button';

interface ModalProps {
  children: React.ReactNode;
  buttonText: string;
}

const ModalMovement = ({ children, buttonText }: ModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className='flex items-center justify-center w-80'>
          <Button>{buttonText}</Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>{children}</AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalMovement;
