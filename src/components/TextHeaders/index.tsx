import React from 'react';
import Text from '../Text';



interface TextHeadersProps {
  title: string;
  subtitle: string;
}


const TextHeaders: React.FC<TextHeadersProps> = ({ title, subtitle }) => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-between text-center gap-2'>
      <Text weight='medium' color='primary' size='title'>
        {title}
      </Text>
      <Text weight='regular' color='secondary' size='extraLarge'>
        {subtitle}
      </Text>
    </div>
  );
};

export default TextHeaders;
