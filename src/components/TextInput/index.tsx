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
    <div className='flex flex-col items-start gap-1'>
      <label htmlFor={idName} className='text-h-primary text-sm'>
        {labelText}
      </label>
      <input
        type={type}
        id={idName}
        placeholder={placeHolder}
        className='w-full h-auto px-4 py-3 border-[1px] border-h-gray rounded-[10px]  bg-h-gray-input focus:outline-none text-sm'
      />
    </div>
  );
};

export default TextInput;
