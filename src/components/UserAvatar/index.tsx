import IMAGES from '../../shared/constants/images';

const UserAvatar = () => {
  return (
    <img
      src={IMAGES.SAVEBILLE}
      alt='userAvatar'
      className='w-11 h-11 rounded-full object-cover object-center'
    />
  );
};

export default UserAvatar;
