import React from 'react';
import Text from '../Text';

interface AuthOptionMessageProps {
  anchorHref: string;
  paragraphText: string;
  textButton: string;
  onClick: () => void;
}

const AuthOptionMessage: React.FC<AuthOptionMessageProps> = ({
  anchorHref,
  paragraphText,
  textButton,
  onClick,
}) => {
  return (
    <div className='w-full h-auto flex flex-col justify-between sm:flex-row sm:justify-center items-center text-center gap-1'>
      <Text color='secondary' weight='regular' size='small'>
        {paragraphText}
      </Text>
      <a href={anchorHref} onClick={onClick}>
        <Text
          color='primary'
          weight='medium'
          size='small'
          sx='mr-4 hover:text-h-info transition duration-200'
        >
          {textButton}
        </Text>
      </a>
    </div>
  );
};

export default AuthOptionMessage;
