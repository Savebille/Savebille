import React, { useState } from "react";

import dayjs from "dayjs";

import Text from "../../../components/Text";
import { Plus } from "@phosphor-icons/react";
import BottomSheet from "@/components/BottomSheet";
import { Button } from "@/components/ui/button";
import NewIncomeModal from "./components/NewIncomeModal";
import NewExpenseModal from "./components/NewExpenseModal";

const Home: React.FC = () => {
  const cardsInfo = [
    {
      id: 1,
      title: "Balance",
      amount: 6000,
      currency: "COP",
      desc: "4 registros",
    },
    {
      id: 2,
      title: "Ingresos",
      amount: 10000,
      currency: "COP",
      desc: "1 registro",
    },
    {
      id: 3,
      title: "Gastos",
      amount: 4000,
      currency: "COP",
      desc: "3 registros",
    },
  ];

  const now = dayjs();

  // Card Header State

  const [currentCardInfo, setCurrentCardInfo] = useState<string | null>(null);

  const handleCardClick = (cardTitle: string) => {
    if (currentCardInfo === cardTitle) {
      setCurrentCardInfo(null);
    } else {
      setCurrentCardInfo(cardTitle);
    }
  };

  const [showModalExpense, setShowModalExpense] = useState(false);
  const [showModalIncome, setShowModalIncome] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <NewExpenseModal
        showModal={showModalExpense}
        setShowModal={setShowModalExpense}
      />
      <NewIncomeModal
        showModal={showModalIncome}
        setShowModal={setShowModalIncome}
      />
      {/* Header content */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex flex-col">
          <Text color="primary" weight="bold" size="h4">
            Listado de gastos e ingresos
          </Text>
          <Text
            color="secondary"
            weight="regular"
            size="text-1"
            sx="mt-2"
          >{`Revisa tu actividad - ${now}`}</Text>
        </div>

        <BottomSheet
          triggerContent={
            <button className="flex items-center justify-between px-3 py-2 bg-h-info rounded-md mt-4 sm:mt-0 transition ease-in-out hover:scale-105 duration-200 text-h-white text-[14px] font-normal gap-2">
              Agregar
              <Plus size={16} color={"var(--h-white)"} />
            </button>
          }
          closeContent={
            <div className="flex flex-col w-full items-center justify-center gap-4 bg-white py-8">
              <Button
                onClick={() => {
                  setShowModalIncome(true);
                }}
              >
                Ingreso
              </Button>
              <Button
                onClick={() => {
                  setShowModalExpense(true);
                }}
              >
                Gasto
              </Button>
            </div>
          }
        ></BottomSheet>
      </div>

      {/* Main content */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mt-6 w-full">
        {cardsInfo.map((card) => (
          <div
            key={card.title}
            onClick={() => handleCardClick(card.title)}
            className={`flex flex-col bg-white ${
              currentCardInfo === card.title
                ? "border border-h-info shadow-md"
                : "border-none border-transparent shadow-sm"
            }  rounded-md p-4 w-full lg:max-w-64 transition ease-in-out hover:shadow-md hover:scale-105 duration-200 cursor-pointer`}
          >
            <div className="flex items-center justify-between mb-3">
              <Text size="h5" color="secondary" weight="regular">
                {card.title}
              </Text>
              <Text size="h5" color="secondary" weight="regular">
                {card.currency}
              </Text>
            </div>
            <Text size="h5" color="primary" weight="bold" sx="mb-2">
              ${card.amount}
            </Text>
            <Text size="text-1" color="info" weight="regular">
              {card.desc}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Home);
