import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Text from '../Text';
import { ReactNode } from 'react';

export interface Option {
  icon: ReactNode;
  label: string;
  color:
    | 'info'
    | 'success'
    | 'yellow'
    | 'error'
    | 'primary'
    | 'secondary'
    | 'gray'
    | 'white';
}

interface selectorProps {
  options: any;
}

const Selector = ({ options }: selectorProps) => {
  return (
    <Select>
      <SelectTrigger className='w-full text-h-secondary'>
        <SelectValue placeholder='Categoria' />
      </SelectTrigger>
      <SelectContent>
        {options.map((item: Option) => (
          <SelectItem key={item.label} value={item.label}>
            <label className='flex flex-row items-center justify-start gap-2'>
              {item.icon}
              <input
                type='text'
                readOnly
                value={item.label}
                className={`text-h-${item.color} text-[14px] bg-transparent focus:outline-none cursor-default`}
              />
            </label>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Selector;
