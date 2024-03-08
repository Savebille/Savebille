import * as React from 'react';
import { addDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormControl } from '../ui/form';
import { CalendarBlank } from '@phosphor-icons/react';
import Text from '../Text';

interface DatePickerWithPresetsProps {
  fieldProps: any;
}

export function DatePickerWithPresets({
  fieldProps,
}: DatePickerWithPresetsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'w-full h-auto flex items-center justify-start gap-4 p-0 text-left font-normal',
              !fieldProps.value && 'text-muted-foreground'
            )}
          >
            <CalendarBlank size={24} color='#8e98a7' />
            {fieldProps.value ? (
              <Text color='secondary' size='text-1' sx='leading-none'>
                {format(fieldProps.value, 'PPP')}
              </Text>
            ) : (
              <Text color='secondary' size='text-1' sx='leading-none'>
                Seleciona una fecha
              </Text>
            )}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className='absolute -left-[190px] flex w-auto flex-col space-y-2 p-2'>
        <Select
          onValueChange={(value) => {
            fieldProps.onChange(addDays(new Date(), parseInt(value)));
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder='Hoy' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='0'>
              <Text
                color='secondary'
                weight='medium'
                size='text-1'
                sx='leading-none'
              >
                Hoy
              </Text>
            </SelectItem>
            <SelectItem value='-1'>
              <Text
                color='secondary'
                weight='medium'
                size='text-1'
                sx='leading-none'
              >
                Ayer
              </Text>
            </SelectItem>
            <SelectItem value='-3'>
              <Text
                color='secondary'
                weight='medium'
                size='text-1'
                sx='leading-none'
              >
                Hace 3 días
              </Text>
            </SelectItem>
            <SelectItem value='-7'>
              <Text
                color='secondary'
                weight='medium'
                size='text-1'
                sx='leading-none'
              >
                Hace 1 semana
              </Text>
            </SelectItem>
          </SelectContent>
        </Select>

        <div className='rounded-md border'>
          <Calendar
            mode='single'
            selected={fieldProps.value}
            onSelect={fieldProps.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date('1900-01-01')
            }
            initialFocus
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
