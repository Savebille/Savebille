import IMAGES from '@/shared/constants/images';

const Loader = () => (
  <div className='flex items-center w-full '>
    <img
      src={IMAGES.ICONS.LOADER}
      alt='loader'
      width={20}
      height={20}
    />
  </div>
);

export default Loader;
