import React from 'react'
import Text from '../Text';

interface SubmitButtonProps {
  text: string
}

const Button: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button className='w-full h-[50px] rounded-xl bg-h-info flex justify-center items-center transition ease-in-out hover:scale-105 duration-200'>
      <Text weight='medium' color='white' size='extraLarge'>
        {text}
      </Text>
    </button>
  );
};

export default Button