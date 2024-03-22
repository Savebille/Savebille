import React, { useEffect, useState } from 'react';

import Text from '../../../components/Text';
import { getCategoriesByUserId, getCurrentUser } from '@/lib/appwrite/api';
import CustomLoader from '@/components/shared/CustomLoader';
import NewCategoryModal from '@/_root/pages/categories/components/NewCategoryModal';
import { TrendDown, TrendUp } from '@phosphor-icons/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Divider from '@/components/Divider';
import {
  defaultExpenseCategories,
  defaultIncomeCategories,
} from '@/shared/constants/data';
import { getColorByName, getIconByName } from '@/shared/utils/general.utils';

export interface Categories {
  $id: string;
  type: string;
  name: string;
  icon: string;
  color: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  const getUserCategories = async () => {
    try {
      setIsLoadingCategories(true);
      const currentAccount = await getCurrentUser();
      //@ts-ignore
      const response: Categories[] = await getCategoriesByUserId(
        currentAccount?.$id
      );
      setCategories(response);
      setIsLoadingCategories(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingCategories(false);
    }
  };

  useEffect(() => {
    getUserCategories();
  }, []);

  return (
    <div className='w-full flex flex-col'>
      {/* Header content */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between'>
        <div className='flex flex-col'>
          <Text color='primary' weight='bold' size='h4'>
            Categorías
          </Text>
        </div>
        <NewCategoryModal fetchCategories={getUserCategories} />
      </div>

      {isLoadingCategories ? (
        <div className='mt-10'>
          <CustomLoader color='#3183ff' height={44} width={44} />
        </div>
      ) : (
        <Tabs defaultValue='incomes' className='w-96 mt-4'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='incomes'>Ingresos</TabsTrigger>
            <TabsTrigger value='expenses'>Gastos</TabsTrigger>
          </TabsList>
          <TabsContent value='incomes'>
            <div className='border border-h-gray flex flex-col rounded-md p-4 mt-4 overflow-auto max-h-[650px]'>
              <Text size='h5' weight='medium' sx='mb-3 mt-3'>
                Mis categorías
              </Text>

              <Divider />

              {categories.filter((category) => category.type === 'ingreso')
                .length === 0 ? (
                <Text
                  size='text-1'
                  weight='regular'
                  sx='mt-6 mb-3'
                  color='secondary'
                >
                  Aún no has creado tu primer categoría de ingresos
                </Text>
              ) : (
                <div className='mt-6 w-full'>
                  {categories
                    .filter((category) => category.type === 'ingreso')
                    .map((category) => (
                      <div
                        key={category.$id}
                        className='flex items-center justify-between rounded-md px-4 py-2 shadow-md mb-4'
                      >
                        <div className='flex items-center'>
                          <div
                            className={`${category.color} flex items-center justify-center rounded-full w-8 h-8`}
                          >
                            {getIconByName(category.icon)}
                          </div>
                          <Text
                            color='primary'
                            weight='medium'
                            size='h5'
                            sx='ml-4'
                          >
                            {category.name}
                          </Text>
                        </div>
                        {category.type === 'ingreso' ? (
                          <TrendUp size={24} color={'var(--h-success)'} />
                        ) : (
                          <TrendDown size={24} color={'var(--h-error)'} />
                        )}
                      </div>
                    ))}
                </div>
              )}

              <Text size='h5' weight='medium' sx='mt-3 mb-3'>
                Por defecto
              </Text>

              <Divider />

              <div className='mt-6 w-full'>
                {defaultIncomeCategories.map((category) => (
                  <div
                    key={`category-${category.name}`}
                    className='flex items-center justify-between rounded-md px-4 py-2 shadow-md mb-4'
                  >
                    <div className='flex items-center'>
                      <div
                        className={`${getColorByName(
                          category.color
                        )} flex items-center justify-center rounded-full w-8 h-8`}
                      >
                        {category.icon}
                      </div>
                      <Text color='primary' weight='medium' size='h5' sx='ml-4'>
                        {category.name}
                      </Text>
                    </div>

                    <TrendUp size={24} color={'var(--h-success)'} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value='expenses'>
            <div className='border border-h-gray flex flex-col rounded-md p-4 mt-4 overflow-auto max-h-[650px]'>
              <Text size='h5' weight='medium' sx='mb-3 mt-3'>
                Mis categorías
              </Text>

              <Divider />

              {categories.filter((category) => category.type !== 'ingreso')
                .length === 0 ? (
                <Text
                  size='text-1'
                  weight='regular'
                  sx='mt-6 mb-3'
                  color='secondary'
                >
                  Aún no has creado tu primer categoría para gastos
                </Text>
              ) : (
                <div className='mt-6 w-full'>
                  {categories
                    .filter((category) => category.type !== 'ingreso')
                    .map((category) => (
                      <div
                        key={`category-${category.name}`}
                        className='flex items-center justify-between rounded-md px-4 py-2 shadow-md mb-4'
                      >
                        <div className='flex items-center'>
                          <div
                            className={`${category.color} flex items-center justify-center rounded-full w-8 h-8`}
                          >
                            {getIconByName(category.icon)}
                          </div>
                          <Text
                            color='primary'
                            weight='medium'
                            size='h5'
                            sx='ml-4'
                          >
                            {category.name}
                          </Text>
                        </div>
                        {category.type === 'ingreso' ? (
                          <TrendUp size={24} color={'var(--h-success)'} />
                        ) : (
                          <TrendDown size={24} color={'var(--h-error)'} />
                        )}
                      </div>
                    ))}
                </div>
              )}

              <Text size='h5' weight='medium' sx='mt-3 mb-3'>
                Por defecto
              </Text>

              <Divider />

              <div className='mt-6 w-full'>
                {defaultExpenseCategories.map((category) => (
                  <div
                    key={`category-${category.name}`}
                    className='flex items-center justify-between rounded-md px-4 py-2 shadow-md mb-4'
                  >
                    <div className='flex items-center'>
                      <div
                        className={`${getColorByName(
                          category.color
                        )} flex items-center justify-center rounded-full w-8 h-8`}
                      >
                        {category.icon}
                      </div>
                      <Text color='primary' weight='medium' size='h5' sx='ml-4'>
                        {category.name}
                      </Text>
                    </div>

                    <TrendDown size={24} color={'var(--h-error)'} />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Categories;
