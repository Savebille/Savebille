import { CategoryIconsProps } from '@/shared/constants/data';
import { ReactNode, SetStateAction } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface CircleCategoryColorProps {
  item: CategoryIconsProps;
  field: ControllerRenderProps<
    {
      type: string;
      name: string;
      icon: string;
      color: string;
    },
    'icon'
  >;
  selectedIcon: ReactNode;
  setSelectedIcon?: React.Dispatch<SetStateAction<ReactNode>>;
  setActiveCategoryIcons?: React.Dispatch<SetStateAction<boolean>>;
  handleIconSelectionClick?: (icon: ReactNode) => void;
}

export const CircleCategoryIcon = ({
  item,
  field,
  selectedIcon,
  setSelectedIcon,
  setActiveCategoryIcons,
  handleIconSelectionClick,
}: CircleCategoryColorProps) => (
  <div
    onClick={() => {
      field.onChange(item.name);
      setSelectedIcon && setSelectedIcon(item.icon);

      setActiveCategoryIcons && setActiveCategoryIcons(false);
      handleIconSelectionClick && handleIconSelectionClick(item.icon);
    }}
    className={`bg-h-secondary ${
      selectedIcon === item.icon && 'border border-h-primary'
    } w-8 h-8 rounded-full shadow-md cursor-pointer transition duration-200 hover:scale-110 flex justify-center items-center`}
  >
    {item.icon}
  </div>
);
