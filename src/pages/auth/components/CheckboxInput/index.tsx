import React from 'react';
import Text from '../../../../components/Text';

interface CheckboxInputProps {
  labelText: string;
  anchorText: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  labelText,
  anchorText,
}) => {
  return (
    <>
      <label className='w-auto h-auto flex items-center text-h-secondary gap-2'>
        <input type='checkbox' className='checkbox-input' />
        <Text color='secondary' size='small'>{labelText}</Text>
      </label>

      <a href='#' className='w-auto h-auto flex items-center'>
        <Text color='info' sx='underline' size='small'>
          {anchorText}
        </Text>
      </a>
    </>
  );
};

export default CheckboxInput;
