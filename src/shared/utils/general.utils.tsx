import { Airplane, Car, Hamburger, House } from "@phosphor-icons/react";

const getIconByCategory = (category: string) => {
  switch (category) {
    case 'Carro':
      return (
        <Car className="w-4 h-4" />
      )
    case 'Casa':
      return (
        <House className="w-4 h-4" />
      )
    case 'Comida':
      return (
        <Hamburger className="w-4 h-4" />
      )
    case 'Viaje':
      return (
        <Airplane className="w-4 h-4" />
      )

    default:
      return <></>
  }
}

export {
  getIconByCategory
}