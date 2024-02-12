import React from 'react';

interface IconButtonProps {
  iconSource: string;
  iconAltText: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconSource, iconAltText }) => {
  return (
    <button className='w-full h-auto p-1 lg:w-[50%] rounded-[10px] border-[1px] border-h-gray hover:bg-h-gray-input flex justify-center items-center shadow transition ease-in-out hover:scale-105 duration-200'>
      <img src={iconSource} alt={iconAltText} />
    </button>
  );
};

export default IconButton;
