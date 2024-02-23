import IMAGES from '@/shared/constants/images';

const Loader = () => (
  <div className='flex-center w-full'>
    <img
      src={IMAGES.ICONS.LOADER}
      alt='loader'
      width={20}
      height={20}
      className='animate-spin'
    />
  </div>
);

export default Loader;
