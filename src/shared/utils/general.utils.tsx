import { CoatHanger, GasPump, Gift, HandCoins, House, Money, Pizza, TrendUp } from "@phosphor-icons/react";

const getIconByCategory = (category: string) => {
  switch (category) {
    case 'Salario':
      return (
        <Money size={24} color='#2ECC71' />
      )
    case 'Inversion':
      return (
        <TrendUp size={24} color='#E67E22' />
      )
    case 'Regalo':
      return (
        <Gift size={24} color='#8E44AD' />
      )
    case 'Prestamo':
      return (
        <HandCoins size={24} color='#3498DB' />
      )
    case 'Arriendo':
      return (
        <House size={24} color='#2ECC71' />
        )
    case 'Comida':
      return (
        <Pizza size={24} color='#E67E22' />
        ) 
    case 'Ropa':
      return (
        <CoatHanger size={24} color='#3498DB' />
        )
    case 'Gasolina':
        return (
        <GasPump size={24} color='#8E44AD' />
        )

    default:
      return <></>
  }
}

export {
  getIconByCategory
}