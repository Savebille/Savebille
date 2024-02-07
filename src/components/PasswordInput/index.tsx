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
    <div className='flex flex-col items-start gap-2'>
      <label htmlFor={idName} className='text-h-primary hidden lg:block'>
        Password
      </label>
      <div className='relative w-full'>
        <input
          type={passwordVisibility ? 'text' : 'password'}
          id={idName}
          placeholder='Enter your password...'
          className='w-full h-[50px] border-[1px] border-h-gray rounded-[10px] pl-4 pr-12 bg-h-gray-input focus:outline-none'
        />
        {passwordVisibility ? (
          <Eye
            className='absolute top-1/2 -translate-y-3 right-4 text-h-secondary cursor-pointer'
            onClick={() => handlePasswordVisibility()}
            size={24}
          />
        ) : (
          <EyeSlash
            className='absolute top-1/2 -translate-y-3 right-4 text-h-secondary cursor-pointer'
            onClick={() => handlePasswordVisibility()}
            size={24}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
