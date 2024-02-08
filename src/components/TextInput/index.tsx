interface TextInputProps {
  labelText: string;
  placeHolder: string;
  type: string;
  idName: string;
}

const TextInput: React.FC<TextInputProps> = ({
  labelText,
  placeHolder,
  type,
  idName,
}) => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <label htmlFor={idName} className='text-h-primary'>
        {labelText}
      </label>
      <input
        type={type}
        id={idName}
        placeholder={placeHolder}
        className='w-full h-[50px] border-[1px] border-h-gray rounded-[10px] px-4 bg-h-gray-input focus:outline-none'
      />
    </div>
  );
};

export default TextInput;
