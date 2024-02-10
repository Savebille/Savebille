import React, { useEffect, useMemo, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {
  Book,
  ChartLine,
  Coins,
  Gear,
  House,
  Info,
  SignOut,
} from '@phosphor-icons/react';
import { useLocation } from 'react-router-dom';
import Text from '../Text';
import ROUTES from '../../shared/constants/routes';
import IMAGES from '../../shared/constants/images';
interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  active?: boolean;
  onClick: () => void;
}

export const SidebarItem = ({
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
          className={`flex py-2 px-4 items-center justify-between cursor-pointer rounded-[10px] bg-h-info`}
        >
          <Text
            size='medium'
            weight='medium'
            color={active ? 'white' : 'primary'}
          >
            {text}
          </Text>
          {icon}
        </li>
      ) : (
        <li
          onClick={handleClick}
          className='
        relative flex py-2 px-2 items-center cursor-pointer rounded-[10px]
        hover:bg-h-blue-light gap-3'
        >
          {icon}
          <Text
            size='small'
            weight='regular'
            color={active ? 'white' : 'primary'}
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
    label: 'Mis categorias',
    icon: <Book size={20} color='var(--h-secondary)' />,
    path: ROUTES.CATEGORIES,
  },
  {
    label: 'Estadisticas',
    icon: <ChartLine size={20} color='var(--h-secondary)' />,
    path: ROUTES.STATS,
  },
  {
    label: 'Proximos pagos',
    icon: <Coins size={20} color='var(--h-secondary)' />,
    path: ROUTES.PAYMENTS,
  },
  {
    label: 'Ajustes',
    icon: <Gear size={20} color='var(--h-secondary)' />,
    path: ROUTES.SETTINGS,
  },
  {
    label: 'Ayuda',
    icon: <Info size={20} color='var(--h-secondary)' />,
    path: ROUTES.HELP,
  },
  {
    label: 'Cerrar sesión',
    icon: <SignOut size={20} color='var(--h-secondary)' />,
    path: ROUTES.AUTH,
  },
];

const Sidebar: React.FC = () => {
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

  return (
    <aside
      className={`h-full fixed top-0 left-0 z-[90] bg-white border-r border-h-gray w-60 hidden lg:block`}
    >
      <nav className='flex flex-col h-full'>
        <div className='p-4 flex items-center justify-center h-[100px] border-b border-h-gray'>
          <button onClick={() => navigate(ROUTES.ROOT)}>
            <img
              src={IMAGES.CASHICON}
              alt='SavbilleIcon'
              width={60}
              height={60}
            ></img>
          </button>
        </div>

        <div>
          <ul className='flex flex-col justify-between p-4 gap-2'>
            {options.map((route) => (
              <Link to={route.path} key={route.label}>
                <SidebarItem
                  icon={React.cloneElement(route.icon, {
                    color:
                      route.path === activeItem
                        ? 'var(--h-white)'
                        : 'var(--h-secondary)',
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

export default React.memo(Sidebar);
