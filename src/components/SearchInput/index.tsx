import { MagnifyingGlass } from '@phosphor-icons/react';

interface SearchInputProps {
  placeHolder: string;
  width: string;
  height: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeHolder,
  width,
  height,
}) => {
  return (
    <div
      className={`flex items-center justify-start ${width} ${height} gap-2`}
    >
      <button className='flex justify-center items-center'>
        <MagnifyingGlass color='#233145' size={20} />
      </button>

      <input
        type='text'
        placeholder={placeHolder}
        className='bg-h-gray-input h-full w-full focus:outline-none text-h-secondary text-sm'
      />
    </div>
  );
};

export default SearchInput;
