import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChartLine,
  Coins,
  House,
  SignOut,
  Book,
  ArrowsOut,
} from '@phosphor-icons/react';
import ROUTES from '../../shared/constants/routes';
import Text from '../Text';
import React from 'react';
interface MenuItemProps {
  icon: JSX.Element;
  text: string;
  active?: boolean;
  onClick: () => void;
}

export const MenuItem = ({
  icon,
  text,
  active: initialActive,
  onClick,
}: MenuItemProps) => {
  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    setActive(initialActive);
  }, [initialActive]);

  const handleClick = () => {
    if (!active) {
      setActive(true);
      onClick();
    } else if (text === '') {
      setActive(false);
    }
  };

  return (
    <>
      {active ? (
        <li
          onClick={handleClick}
          className='
        flex flex-col w-full py-2 items-center gap-1 cursor-pointer
        bg-h-info transition duration-200'
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
      ) : (
        <li
          onClick={handleClick}
          className='
        flex flex-col w-full py-2 items-center gap-1 cursor-pointer
        hover:bg-h-blue-light transition duration-200'
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

const MobileMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const [activeItem, setActiveItem] = useState(ROUTES.ROOT);

  const handleItemClick = (path: string) => {
    //@ts-expect-error
    setActiveItem((prevActiveItem) => (prevActiveItem === path ? null : path));
    setShowAccountMenu(false);
  };

  const handleMoreOptions = () => {
    setShowAccountMenu((prev) => !prev);
  };

  const options = [
    {
      label: 'Home',
      icon: <House size={20} />,
      path: ROUTES.ROOT,
    },
    {
      label: 'Estadisticas',
      icon: <ChartLine size={20} />,
      path: ROUTES.STATS,
    },
    {
      label: 'Pagos',
      icon: <Coins size={20} />,
      path: ROUTES.PAYMENTS,
    },
  ];

  const activeRouteIndex = useMemo(() => {
    return options.findIndex((route) => route.path === location.pathname);
  }, [options, location.pathname]);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [activeRouteIndex]);

  const settingsOptions = [
    {
      label: 'Mis categorias',
      icon: <Book size={20} color='var(--h-secondary)' />,
      onClick: () => navigate(ROUTES.CATEGORIES),
    },
    {
      label: 'Cerrar Sesión',
      icon: <SignOut size={20} color='var(--h-secondary)' />,
      onClick: () => navigate(ROUTES.SIGNUP),
    },
  ];

  return (
    <>
      <div className='bg-h-gray-input flex w-full bottom-0 fixed lg:hidden'>
        <div className='flex w-3/4'>
          <ul className='flex w-full text-base items-center justify-between border-t border-h-gray'>
            {options.map((option) => (
              <Link to={option.path} key={option.label} className='w-full'>
                <MenuItem
                  text={option.label}
                  icon={React.cloneElement(option.icon, {
                    color:
                      option.path === activeItem
                        ? 'var(--h-white)'
                        : 'var(--h-secondary)',
                    weight: 'light',
                  })}
                  onClick={() => handleItemClick(option.path)}
                  active={option.path === activeItem}
                />
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={handleMoreOptions}
          className='w-1/4 flex items-center justify-center border-t border-h-gray hover:bg-h-blue-light cursor-pointer transition duration-200'
        >
          <ArrowsOut size={20} color='var(--h-secondary)' />
        </div>
      </div>

      {showAccountMenu && (
        <div className='bg-h-white shadow fixed bottom-[61.2px] right-0 rounded-l-xl w-[200px] lg:hidden'>
          <ul className='flex flex-col w-full h-auto  items-center'>
            {settingsOptions.map((item) => (
              <li
                onClick={item.onClick}
                key={item.label}
                className='flex justify-center items-center p-3 w-full h-full rounded-l-xl   hover:bg-h-blue-light gap-3 transition duration-200'
              >
                <div>{item.icon}</div>

                <Text color='primary' size='small' weight='regular'>
                  {item.label}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
