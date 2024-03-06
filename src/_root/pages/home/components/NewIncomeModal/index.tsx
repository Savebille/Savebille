import { ChangeEvent, useState } from "react";

import {
  BookmarkSimple,
  Calculator,
  CalendarBlank,
  File,
  Gift,
  Money,
  TrendUp,
  X,
} from "@phosphor-icons/react";

import Text from "@/components/Text";
import Modal from "@/components/Modal";
import Selector from "@/components/Selector";
import IMAGES from "@/shared/constants/images";

const categoryOptions = [
  {
    icon: <Money size={24} color="#61B449" />,
    label: "Salario",
    color: "success",
  },
  {
    icon: <TrendUp size={24} color="#3183FF" />,
    label: "Inversión",
    color: "info",
  },
  {
    icon: <Gift size={24} color="#FF5252" />,
    label: "Regalo",
    color: "error",
  },
];

const dateSelections = [
  {
    id: 1,
    title: "Hoy",
  },
  {
    id: 2,
    title: "Ayer",
  },
  {
    id: 3,
    title: "Otra fecha",
  },
];

const NewIncomeModal = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const formatNumber = (input: string): string => {
    input = input.replace(/[^0-9.]/g, "").replace(/^\.+/g, "");

    const parts = input.split(".");
    let integerPart = parts[0] || "";
    let decimalPart = parts[1] || "";

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    decimalPart = decimalPart.slice(0, 2);

    return integerPart + (decimalPart ? "." + decimalPart : "");
  };

  const [currentDate, setCurrentDate] = useState<string | null>("Hoy");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumber(e.target.value);
    setInputValue(formattedValue);
  };

  const handleDateClick = (buttonTitle: string) => {
    if (currentDate === buttonTitle) {
      setCurrentDate(null);
    } else {
      setCurrentDate(buttonTitle);
    }
  };

  return (
    <Modal buttonText='Agregar'>
      {/* Header */}
      <div className='flex items-center justify-between w-full mb-10'>
        <Text size='h1' color='primary' weight='semibold'>
          Nuevo ingreso
        </Text>
      </div>

      {/* Form */}
      <form action='' className='flex flex-col'>
        {/* First field */}
        <fieldset className='flex w-full items-center justify-between mb-10'>
          <label htmlFor='amount' className='flex items-center'>
            <Calculator size={24} color='#8e98a7' className='cursor-pointer' />
            <div className='flex items-center ml-6'>
              <Text size='h3' color='success' sx='mr-2'>
                $
              </Text>
              <input
                className='text-[20px] leading-none text-h-success placeholder:text-h-success focus:outline-none'
                type='text'
                id='amount'
                placeholder='0.00'
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
          </label>

          <div className='flex items-center'>
            <img
              src={IMAGES.COLFLAG}
              alt='bandera de Colombia'
              width={24}
              height={24}
            />
            <Text size='h3' color='secondary' weight='light' sx='ml-2'>
              COP
            </Text>
          </div>
        </fieldset>

        {/* Second field */}
        <fieldset className='flex w-full  items-center justify-start mb-10'>
          <button type='button'>
            <CalendarBlank size={24} color='#8e98a7' />
          </button>

          {dateSelections.map((date) => (
            <button
              key={date.id}
              type='button'
              onClick={() => handleDateClick(date.title)}
              className={`ml-6 p-2 rounded-xl shadow transition duration-200 min-w-14 flex items-center justify-center ${
                currentDate === date.title ? 'bg-h-success' : 'bg-h-gray-input'
              }`}
            >
              <Text
                color={`${currentDate === date.title ? 'white' : 'primary'}`}
                size='text-1'
                weight='light'
              >
                {date.title}
              </Text>
            </button>
          ))}
        </fieldset>

        {/* Third  field */}
        <fieldset className='flex w-full  items-center justify-start mb-10'>
          <label htmlFor='description' className='flex flex-row items-center'>
            <File size={24} color='#8e98a7' className='cursor-pointer' />
            <input
              className='w ml-6 text-[14px] leading-none text-h-primary placeholder:text-h-secondary focus:outline-none'
              id='description'
              type='text'
              placeholder='Descripción'
            />
          </label>
        </fieldset>

        {/* Fourth field */}
        <fieldset className='flex w-full items-center mb-10'>
          <label htmlFor='category' className='flex items-center w-full'>
            <BookmarkSimple size={24} color='#8e98a7' />

            <div className='flex flex-grow ml-6'>
              <Selector options={categoryOptions} />
            </div>
          </label>
        </fieldset>
      </form>
    </Modal>
  );
};

export default NewIncomeModal;
