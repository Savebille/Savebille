import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { ReactNode } from 'react';
import { Input } from '../ui/input';
import { BookmarkSimple } from '@phosphor-icons/react';

export interface Option {
  icon: ReactNode;
  label: string;
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

const Selector = ({ options, fieldProps }: selectorProps) => {
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
        <SelectContent>
          {options
            .filter(( item: { type: string; } ) => item.type === 'Ingreso') 
            .map((item: Option) => (
              <SelectItem key={item.label} value={item.label}>
                <FormLabel className='flex  flex-row items-center justify-start '>
                  {item.icon}
                  <Input
                    type='text'
                    readOnly
                    value={item.label}
                    className={`text-ct-${item.color} outline-none cursor-default border-none bg-transparent -ml-2`}
                  />
                </FormLabel>
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  );
};

export default Selector;
