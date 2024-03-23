import { CategoryColorsProps } from '@/shared/constants/data';
import { SetStateAction } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface CircleCategoryColorProps {
  item: CategoryColorsProps;
  field: ControllerRenderProps<
    { name: string; type: string; icon: string; color: string },
    'color'
  >;
  selectedColor: string;
  setSelectedColor?: React.Dispatch<SetStateAction<string>>;
  setActiveCategoryColors?: React.Dispatch<SetStateAction<boolean>>;
  handleColorSelectionClick?: (color: string) => void;
}

export const CircleCategoryColor = ({
  item,
  field,
  selectedColor,
  setSelectedColor,
  setActiveCategoryColors,
  handleColorSelectionClick,
}: CircleCategoryColorProps) => (
  <div
    onClick={() => {
      field.onChange(item.color);
      setSelectedColor && setSelectedColor(item.color);
      setActiveCategoryColors && setActiveCategoryColors(false);
      handleColorSelectionClick && handleColorSelectionClick(item.color);
    }}
    className={`${item.color} w-6 h-6 rounded-full shadow-md cursor-pointer transition duration-200 hover:scale-110 flex justify-center items-center`}
  >
    {selectedColor === item.color && (
      <div className='bg-white w-[14px] h-[14px] rounded-full'></div>
    )}
  </div>
);
