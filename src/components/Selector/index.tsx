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
          <div key={item.label}>
            <SelectItem value={item.label}>
              <div className='flex flex-row items-center justify-start gap-2'>
                {item.icon}
                <Text size='text-1' color={item.color}>
                  {item.label}
                </Text>
              </div>
            </SelectItem>
          </div>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Selector;
