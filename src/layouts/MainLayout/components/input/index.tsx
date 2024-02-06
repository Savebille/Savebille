import {  MagnifyingGlass } from '@phosphor-icons/react';
import Text from '../../../../components/Text';



function Input() {
    return  <div className='bg-h-gray-input lg:flex lg:items-center lg:justify-between p-2 lg:w-[400px] lg:ml-[220px] xl:m-0 rounded-md h-[42px] md:hidden hidden '>
    <div className='flex items-center justify-between h-[20px] lg:w-[400px] gap-2 '>
      <div className='flex justify-center items-center md:block'>
        <MagnifyingGlass color='#233145' size={20} />
      </div>
      <input
        type='text'
        placeholder='Type here to search'
        className='bg-h-gray-input h-full w-full border-h-info focus:outline-none text-h-secondary text-sm'
      />
    </div>

    <div className='bg-h-white h-[32px] w-[52px] rounded-lg py-1 flex justify-center items-center shadow md:hidden lg:block'>
      <Text size='medium' weight='semibold' color='primary'>
        ⌘ F 
      </Text>
    </div>
  </div>
}

export default Input