import {
    ChartLine,
    Coins,
    CreditCard,
    Gear,
    House,
    Info,
    SignOut,
  } from '@phosphor-icons/react';

const MobileMenu: React.FC = () => {
    return (
        <div className="bg-h-error flex justify-between w-full h-16 bottom-0 fixed lg:hidden text-center mt-2">
            <div className="bg-orange-600 w-full ">
                <div className='flex flex-col '>
                    <House size={20} color={'var(--h-white)'} />
                </div>
                <div className='flex'>
                    <a href="">Home</a>
                </div>
            </div>
            <div className="bg-amber-400 w-full">
                <ChartLine size={20} color='var(--h-secondary)' />
                <a href="">Mis categorias</a>
            </div>
            <div className="bg-green-600 w-full">
                <CreditCard size={20} color='var(--h-secondary)' />
                <a href="">Estadisticas</a>
            </div>
            <div className="bg-cyan-500 w-full">
                <Coins size={20} color='var(--h-secondary)' />
                <a href="">Cuenta</a>
            </div>
        </div>
    )
}

export default MobileMenu