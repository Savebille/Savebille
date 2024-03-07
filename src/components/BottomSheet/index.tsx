import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { X } from '@phosphor-icons/react';

interface BottomSheetProps {
  children: React.ReactNode;
  openButton: React.ReactNode;
  onCloseBottomSheet?: () => void;
}

const BottomSheet = ({
  children,
  openButton,
  onCloseBottomSheet,
}: BottomSheetProps) => {
  return (
    <Drawer>
      <DrawerTrigger>{openButton}</DrawerTrigger>

      <DrawerContent className='p-5'>
        {children}

        <DrawerClose>
          <>
            <button className='absolute top-5 right-5'>
              <X size={20} color={'var(--h-primary)'} />
            </button>
            {onCloseBottomSheet && onCloseBottomSheet()}
          </>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default BottomSheet;
