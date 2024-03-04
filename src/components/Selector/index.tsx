import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Text from '../Text';
import { ChartLineUp, Gift, Money } from '@phosphor-icons/react';

const Selector = () => {
  return (
    <Select>
      <SelectTrigger className='w-full'>
        <SelectValue placeholder='Theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='Salario'>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Money size={24} />
            <Text size='text-1' color='primary'>
              Salario
            </Text>
          </div>
        </SelectItem>

        <SelectItem value='Inversión'>
          <div className='flex flex-row items-center justify-start gap-2'>
            <ChartLineUp size={24} />
            <Text size='text-1' color='primary'>
              Inversión
            </Text>
          </div>
        </SelectItem>

        <SelectItem value='Regalo'>
          <div className='flex flex-row items-center justify-start gap-2'>
            <Gift size={24} />
            <Text size='text-1' color='primary'>
              Regalo
            </Text>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Selector;
