import Text from '@/components/Text';

const Loader = () => {
  return (
    <div className='flex justify-between flex-center w-full'>
      <img src='/assets/Loading.gif' alt='Loader' width={30} height={30} />
      <Text color='white'>
        Loading...
      </Text>
    </div>
  );
};

export default Loader;
