import ROUTES from '../../shared/constants/routes';
import {
    ChartLine,
    Coins,
    House,
    SignOut,
  } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';


// ...

const MobileMenu: React.FC = () => {


  const options = [
    {
      label: 'Home',
      icon: <House size={18} color='var(--h-primary)'  />,
      path: ROUTES.ROOT,
    },
    {
      label: 'Balance',
      icon: <ChartLine size={18} color='var(--h-primary)' />,
      path: ROUTES.ROOT,
    },
    {
      label: 'Pagos',
      icon: <Coins size={18} color='var(--h-primary)' />,
      path: ROUTES.ROOT,
    },
    {
      label: 'Cuenta',
      icon: <SignOut size={18} color='var(--h-primary)' />,
      path: ROUTES.LOGIN,
    },
  ];

  return (
    <div className='flex w-full bottom-0 fixed h-12 lg:hidden'>
      <div className='w-full'>
        <ul className='flex w-full text-base items-center justify-between'>
          {options.map((option, i) => (
            <NavLink
              key={i}
              to={option.path}
              className='border-t border-slate-300 flex flex-col justify-center items-center w-full h-full hover:bg-h-info '
            >
              <div className='mt-[6px]'>{option.icon}</div>
              <span>{option.label}</span>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu