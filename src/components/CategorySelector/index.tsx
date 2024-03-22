import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { ReactNode } from 'react';
import { BookmarkSimple } from '@phosphor-icons/react';
import Text from '../Text';

export interface Option {
  icon: ReactNode;
  name: string;
  color:
    | 'red'
    | 'purple'
    | 'blue'
    | 'darkGreen'
    | 'lightGreen'
    | 'yellow'
    | 'orange';
}

interface selectorProps {
  options: any;
  fieldProps: any;
}

const getColorByName = (name: string) => {
  switch (name) {
    case 'green':
      return 'bg-h-success';
    case 'blue':
      return 'bg-[#3498DB]';
    case 'red':
      return 'bg-h-error';
    case 'gray':
      return 'bg-h-gray';
    case 'orange':
      return 'bg-ct-orange';
    case 'purple':
      return 'bg-ct-purple';
    case 'yellow':
      return 'bg-ct-yellow';
    case 'lightGreen':
      return 'bg-ct-lightGreen';
    case 'darkGreen':
      return 'bg-ct-darkGreen';
    case 'primary':
      return 'bg-h-primary';
    default:
      return 'bg-h-blue-light';
  }
};

const CategorySelector = ({ options, fieldProps }: selectorProps) => {
  return (
    <div className='flex items-center gap-4'>
      <FormLabel>
        <BookmarkSimple size={24} color='#8e98a7' />
      </FormLabel>

      <Select
        onValueChange={fieldProps.onChange}
        defaultValue={fieldProps.value}
      >
        <FormControl>
          <SelectTrigger className='w-full h-6 text-h-secondary'>
            <SelectValue placeholder='Categoria' />
          </SelectTrigger>
        </FormControl>

        <SelectContent className='max-h-48 overflow-y-auto'>
          {options.map((item: Option) => (
            <SelectItem key={item.name} value={item.name}>
              <FormLabel>
                <div className='flex items-center'>
                  <div
                    className={`${getColorByName(
                      item.color
                    )} flex items-center justify-center rounded-full w-7 h-7`}
                  >
                    {item.icon}
                  </div>
                  <Text color='primary' weight='medium' size='h5' sx='ml-4'>
                    {item.name}
                  </Text>
                </div>
              </FormLabel>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelector;
