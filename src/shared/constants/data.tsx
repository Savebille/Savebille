import { CoatHanger, DeviceMobile, DotsThreeCircle, GasPump, Gift, HandCoins, House, Money, Pizza, TrendUp } from "@phosphor-icons/react";
import IMAGES from "./images";

 export const defaultIncomeCategories = [
  {
    icon: <Money size={20} color='white' />,
    name: 'Salario',
    color: 'green',
  },
  {
    icon: <TrendUp size={20} color='white' />,
    name: 'Inversión',
    color: 'blue',
  },
  {
    icon: <Gift size={20} color='white' />,
    name: 'Regalo',
    color: 'red',
  },
  {
    icon: <DeviceMobile size={20} color='white' />,
    name: 'Transferencia',
    color: 'orange',
  },
  {
    icon:   <img
    src={IMAGES.NEQUI_ICON}
    alt='nequiIcon'
    width={28}
    height={28}
    className="rounded-full"
  />,
  name: 'Nequi',
  color: 'lightGreen',
  },
  {
    icon:   <img
    src={IMAGES.DAVIPLATA_ICON}
    alt='daviplataIcon'
    width={28}
    height={28}
    className="rounded-full"
  />,
  name: 'Daviplata',
  color: 'lightGreen',
  },
  {
    icon: <DotsThreeCircle size={20} color='white' />,
    name: 'Otros',
    color: 'gray',
  },
];

export const defaultExpenseCategories = [
  {
    icon: <HandCoins size={21} color='white' />,
    name: 'Prestamo',
    color: 'primary',
  },
  {
    icon: <House size={21} color='white' />,
    name: 'Arriendo',
    color: 'red',
  },
  {
    icon: <Pizza size={21} color='white' />,
    name: 'Comida',
    color: 'orange',
  },
  {
    icon: <CoatHanger size={21} color='white' />,
    name: 'Ropa',
    color: 'purple',
  },
  {
    icon: <GasPump size={21} color='white' />,
    name: 'Gasolina',
    color: 'darkGreen',
  },
];