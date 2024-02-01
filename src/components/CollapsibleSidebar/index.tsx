import React, { useEffect, useMemo, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  ChartLine,
  Coins,
  CreditCard,
  Gear,
  House,
  Info,
  SignOut,
} from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";
import Text from "../Text";
import ROUTES from "../../shared/constants/routes";
import Divider from "../Divider";

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
    <li
      onClick={handleClick}
      className={`
        relative flex py-2 px-2 items-center justify-between my-1 cursor-pointer rounded-md
        ${
          active ? "bg-primary text-white" : "hover:bg-[#DAEDFE] text-[#162D4C]"
        }
    `}
    >
      <Text
        size="s"
        weight="regular"
        sx="mr-2"
        color={active ? "white" : "medium"}
      >
        {text}
      </Text>
      {icon}
    </li>
  );
};

const CollapsibleSidebar: React.FC = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string | null>(ROUTES.ROOT);
  const navigate = useNavigate();

  const routes = [
    {
      label: "Home",
      icon: <House size={22} />,
      path: ROUTES.ROOT,
    },
    {
      label: "Estadisticas",
      icon: <ChartLine size={22} />,
      path: '/stats',
    },
    {
      label: "Tarjetas",
      icon: <CreditCard size={22} />,
      path: '/cards',
    },
    {
      label: "Proximos pagos",
      icon: <Coins size={22} />,
      path: '/payments',
    },
  ];

  const bottomRoutes = [
    {
      label: "Ajustes",
      icon: <Gear size={22} />,
      path: '/settings',
    },
    {
      label: "Ayuda",
      icon: <Info size={22} />,
      path: '/help',
    },
    {
      label: "Cerrar sesión",
      icon: <SignOut size={22} />,
      path: ROUTES.LOGIN,
    },
  ];

  const activeRouteIndex = useMemo(() => {
    return routes.findIndex((route) => route.path === location.pathname);
  }, [routes, location.pathname]);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [activeRouteIndex]);

  const handleItemClick = (path: string) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === path ? null : path));
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate(ROUTES.LOGIN);
  };

  return (
    <aside
      className={`h-full fixed top-0 left-0 z-[90] bg-white shadow-md w-52`}
    >
      <nav className="flex flex-col h-full">
        <div className="p-4 pb-2 flex items-center justify-center">
          <button onClick={() => navigate(ROUTES.ROOT)}>
            <img
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/finance-1433977-1212011.png?f=webp&w=256"
              alt="avatar"
              width={40}
              height={40}
            ></img>
          </button>
        </div>

        <div>
          <ul className="flex flex-col p-4">
            {routes.map((route, index) => (
              <Link to={route.path} key={index}>
                <SidebarItem
                  icon={React.cloneElement(route.icon, {
                    weight: route.path === activeItem ? "fill" : "regular",
                  })}
                  text={route.label}
                  active={route.path === activeItem}
                  onClick={() => handleItemClick(route.path)}
                />
              </Link>
            ))}
          </ul>
          <Divider sx="mx-4" />
          <ul className="flex flex-col p-4">
            {bottomRoutes.map((route, index) => (
              <Link to={route.path} key={index}>
                <SidebarItem
                  icon={React.cloneElement(route.icon, {
                    weight: route.path === activeItem ? "fill" : "regular",
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
