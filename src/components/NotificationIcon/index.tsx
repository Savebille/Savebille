import { Bell } from "@phosphor-icons/react";

const NotificationIcon = () => {
  return (
    <button className='rounded-full h-11 w-11 flex items-center justify-center border-2 bg-h-gray-input border-h-gray'>
      <Bell size={20} />
    </button>
  );
};

export default NotificationIcon;
