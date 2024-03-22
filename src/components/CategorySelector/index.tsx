import { FormControl, FormLabel } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { BookmarkSimple } from '@phosphor-icons/react';
import Text from '../Text';
import CustomLoader from '../shared/CustomLoader';
import { Categories } from '@/_root/pages/categories';
import {  getIconByName } from '@/shared/utils/general.utils';

interface selectorProps {
  userOptions: Categories[];
  defaultOptions: any;
  fieldProps: any;
  isLoadingCategories: boolean;
}

const CategorySelector = ({
  userOptions,
  defaultOptions,
  fieldProps,
  isLoadingCategories,
}: selectorProps) => {
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
          {defaultOptions.map((item) => (
            <SelectItem
              key={item.name}
              value={`${item.iconName},${item.name},${item.color}`}
            >
              <FormLabel>
                <div className='flex items-center'>
                  <div
                    className={`${item.color} flex items-center justify-center rounded-full w-7 h-7`}
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

          {isLoadingCategories ? (
            <div className='mt-10'>
              <CustomLoader color='#3183ff' height={44} width={44} />
            </div>
          ) : (
            userOptions.map((item: Categories) => (
              <SelectItem
                key={item.name}
                value={`${item.icon},${item.name},${item.color}`}
              >
                <FormLabel>
                  <div className='flex items-center'>
                    <div
                      className={`${item.color} flex items-center justify-center rounded-full w-7 h-7`}
                    >
                      {getIconByName(item.icon)}
                    </div>
                    <Text color='primary' weight='medium' size='h5' sx='ml-4'>
                      {item.name}
                    </Text>
                  </div>
                </FormLabel>
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelector;
