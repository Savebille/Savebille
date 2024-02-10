import React from 'react'
import Text from '../../../../components/Text';

interface TextDividerProps {
  text: string;
}

const TextDivider: React.FC<TextDividerProps> = ({ text }) => {
  return (
    <div className='w-full h-auto items-center grid grid-cols-3'>
      <hr className='border-[1.5px] border-h-gray' />
      <div className='flex justify-center'>
        <Text weight='regular' color='primary' size='medium'>
          {text}
        </Text>
      </div>
      <hr className='border-[1px] border-h-gray' />
    </div>
  );
};

export default TextDivider