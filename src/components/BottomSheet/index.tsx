import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "@phosphor-icons/react";
interface BottomSheetProps {
  triggerContent: React.ReactNode;
  closeContent: React.ReactNode;
  mainContent?: React.ReactNode;
}

const BottomSheet = ({
  triggerContent,
  mainContent,
  closeContent,
}: BottomSheetProps) => {
  return (
    <>
      <Drawer>
        <DrawerTrigger>{triggerContent}</DrawerTrigger>
        <DrawerContent>
          {mainContent}
          <DrawerClose>
            <button className="absolute top-5 right-5">
              <X size={20} color={"var(--h-primary)"} />
            </button>
            {closeContent}
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BottomSheet;
