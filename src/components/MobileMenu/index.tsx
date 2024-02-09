import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChartLine,
  Coins,
  House,
  Gear,
  User,
  Info,
  SignOut,
} from '@phosphor-icons/react';
import ROUTES from '../../shared/constants/routes';
import Text from '../Text';

interface MenuItemProps {
  icon: JSX.Element,
  text: string,
  active?: boolean,
  onClick?: () => void
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
    if( text === 'Ajustes' ) {
      setActive()
    }

    if (!active) {
      setActive(true);
      onClick();
    } else if (
      text === 'Ajustes'
    ) {
      setActive( false )
    }
  };

  return (
    <>
      {active ? (
        <li
          onClick={handleClick}
          className={`
        flex flex-col w-full py-2 px-4 items-center justify-center cursor-pointer gap-1 bg-h-info
    `}
        >
          {icon}
          <Text
            size='small'
            weight='regular'
            sx='ml-3'
            color={active ? 'white' : 'primary'}
          >
            {text}
          </Text>
        </li>
      ) : (
        <li
          onClick={handleClick}
          className={`
        relative flex flex-col w-full py-2 px-2 items-center my-1 cursor-pointer
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


const MobileMenu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const [ShowAccountMenu, setShowAccountMenu] = useState(false)

  const [activeItem, setActiveItem] = useState( ROUTES.ROOT )

  const handleItemClick = ( path: string, label: string ) => {

    if( label === 'Ajustes' ) {
      setShowAccountMenu(!ShowAccountMenu)
    } else {
      setActiveItem((prevActiveItem) => (prevActiveItem === path ? null : path))
    }

    
  }

  const options = [
    {
      label: 'Home',
      icon: <House size={18} color='var(--h-secondary)' />,
      path: ROUTES.ROOT
    },
    {
      label: 'Balance',
      icon: <ChartLine size={18} color='var(--h-secondary)' />,
      path: ROUTES.BALANCE
    },
    {
      label: 'Pagos',
      icon: <Coins size={18} color='var(--h-secondary)' />,
      path: ROUTES.PAYMENTS
    },
    {
      label: 'Ajustes',
      icon: <Gear size={20} color='var(--h-secondary)' />,
      path: ''
    },
  ];

  const activeRouteIndex = useMemo(( ) => {
    return options.findIndex(( route ) => route.path === location.pathname )
  }, [ options , location.pathname ])
  
  useEffect(() => {
    setActiveItem( location.pathname )

  }, [activeRouteIndex])

  
  const settingsOptions = [
    {
      label: 'Cuenta',
      icon: <User size={18} color='var(--h-secondary)' />,
      onClick: () => navigate(ROUTES.ROOT),
    },
    {
      label: 'Ayuda',
      icon: <Info size={18} color='var(--h-secondary)' />,
      onClick: () => navigate(ROUTES.ROOT),
    },
    {
      label: 'Cerrar Sesion',
      icon: <SignOut size={18} color='var(--h-secondary)' />,
      onClick: () => navigate(ROUTES.AUTH),
    }
  
  ]

  return (
    <>
      <div className='bg-h-gray-input flex w-full bottom-0 fixed lg:hidden'>
        <div className='w-full'>
          <ul className='flex w-full px-2 text-base items-center justify-between border-t border-h-gray '>
            {options.map((option) => (
              <Link to={ option.path }>
               <MenuItem 
               text={ option.label }
               icon={ option.icon }
               onClick={  () => handleItemClick( option.path , option.label )  }
               active={ option.path === activeItem}
              />
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {ShowAccountMenu && (<div className='bg-h-white shadow-sm fixed bottom-[68px] right-0 rounded-md w-[240px] lg:hidden '>
        <ul>
          {settingsOptions.map((item) => (
            <div
              onClick={item.onClick}
              key={item.label}
              className='flex justify-center items-center p-3 w-full h-full hover:bg-h-blue-light'
            >
              <div className='mr-2'>{item.icon}</div>
              <Text color='primary' sx='mt-1'>
                {item.label}
              </Text>
            </div>
          ))}
        </ul>
      </div>)}
    </>
  );
};

export default MobileMenu