import { Eye, EyeSlash } from '@phosphor-icons/react';
import React, { useState } from 'react';

interface PasswordInputProps {
  idName: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ idName }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handlePasswordVisibility = () =>
    setPasswordVisibility(!passwordVisibility);

  return (
    <div className='flex flex-col items-start gap-1'>
      <label htmlFor={idName} className='text-h-primary text-sm'>
        Password
      </label>
      <div className='relative w-full'>
        <input
          type={passwordVisibility ? 'text' : 'password'}
          id={idName}
          placeholder='Enter your password...'
          className='w-full h-auto pl-4 pr-12 py-3 border-[1px] border-h-gray rounded-[10px] bg-h-gray-input focus:outline-none text-sm'
        />
        {passwordVisibility ? (
          <Eye
            className='absolute top-[25%] right-4 text-h-secondary cursor-pointer'
            onClick={() => handlePasswordVisibility()}
            size={20}
          />
        ) : (
          <EyeSlash
            className='absolute top-[25%] right-4 text-h-secondary cursor-pointer'
            onClick={() => handlePasswordVisibility()}
            size={20}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
