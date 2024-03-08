import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "@phosphor-icons/react";
interface BottomSheetProps {
  triggerContent: React.ReactNode;
  closeContent?: React.ReactNode;
  mainContent?: React.ReactNode;
  close: boolean;
}

const BottomSheet = ({
  triggerContent,
  mainContent,
  close,
}: BottomSheetProps) => {
  return (
    <>
      <Drawer>
        <DrawerTrigger>{triggerContent}</DrawerTrigger>
        <DrawerContent>
          {mainContent}
          <DrawerClose>
            <>
              {close && (
                <button className="absolute top-5 right-5">
                  <X size={20} color={"var(--h-primary)"} />
                </button>
              )}
            </>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BottomSheet;
