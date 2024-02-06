import React, { useEffect, useMemo, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {
  ChartLine,
  Coins,
  CreditCard,
  Gear,
  House,
  Info,
  SignOut,
} from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import Text from '../Text';
import ROUTES from '../../shared/constants/routes';
import Divider from '../Divider';
interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem = ({
  icon,
  text,
  active: initialActive,
  onClick,
}: SidebarItemProps) => {
  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    setActive(initialActive);
  }, [initialActive]);

  const handleClick = () => {
    if (!active) {
      setActive(true);
      onClick();
    }
  };

  return (
    <>
      {active ? (
        <li
          onClick={handleClick}
          className={`
        flex py-2 px-4 items-center justify-between my-1 cursor-pointer rounded-[10px] bg-h-info
    `}
        >
          <Text
            size='medium'
            weight='medium'
            sx='mr-2'
            color={active ? 'white' : 'primary'}
          >
            {text}
          </Text>
          {icon}
        </li>
      ) : (
        <li
          onClick={handleClick}
          className={`
        relative flex py-2 px-2 items-center my-1 cursor-pointer rounded-[10px]
        ${active ? 'bg-h-info text-white' : 'hover:bg-h-blue-light'}
    `}
        >
          {icon}
          <Text
            size='small'
            weight='regular'
            color={active ? 'white' : 'primary'}
            sx='ml-3'
          >
            {text}
          </Text>
        </li>
      )}
    </>
  );
};

const options = [
  {
    label: 'Home',
    icon: <House size={20} color={'var(--h-white)'} />,
    path: ROUTES.ROOT,
  },
  {
    label: 'Estadisticas',
    icon: <ChartLine size={20} color='var(--h-secondary)' />,
    path: '/stats',
  },
  {
    label: 'Tarjetas',
    icon: <CreditCard size={20} color='var(--h-secondary)' />,
    path: '/cards',
  },
  {
    label: 'Proximos pagos',
    icon: <Coins size={20} color='var(--h-secondary)' />,
    path: '/payments',
  },
  {
    label: 'Ajustes',
    icon: <Gear size={20} color='var(--h-secondary)' />,
    path: '/settings',
  },
  {
    label: 'Ayuda',
    icon: <Info size={20} color='var(--h-secondary)' />,
    path: '/help',
  },
  {
    label: 'Cerrar sesión',
    icon: <SignOut size={20} color='var(--h-secondary)' />,
    path: ROUTES.LOGIN,
  },
];

const CollapsibleSidebar: React.FC = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string | null>(ROUTES.ROOT);
  const navigate = useNavigate();

  const activeRouteIndex = useMemo(() => {
    return options.findIndex((route) => route.path === location.pathname);
  }, [options, location.pathname]);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [activeRouteIndex]);

  const handleItemClick = (path: string) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === path ? null : path));
  };

  const onLogout = () => {
    localStorage.removeItem('token');
    navigate(ROUTES.LOGIN);
  };

  return (
    <aside
      className={`h-full fixed top-0 left-0 z-[90] bg-white border-r border-h-gray w-60 hidden md:hidden lg:block`}
    >
      <nav className='flex flex-col h-full'>
        <div className='p-9 flex items-center justify-center h-[100px] border-b border-h-gray m-0'>
          <button onClick={() => navigate(ROUTES.ROOT)}>
            <img
              src='https://cdn.iconscout.com/icon/premium/png-512-thumb/finance-1433977-1212011.png?f=webp&w=256'
              alt='avatar'
              width={42}
              height={42}
            ></img>
          </button>
        </div>

        <div>
          <ul className='flex flex-col justify-between p-4'>
            {options.map((route, index) => (
              <Link to={route.path} key={index}>
                <SidebarItem
                  icon={React.cloneElement(route.icon, {
                    weight: 'light',
                  })}
                  text={route.label}
                  active={route.path === activeItem}
                  onClick={() => handleItemClick(route.path)}
                />
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default React.memo(CollapsibleSidebar);
