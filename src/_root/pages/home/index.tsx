import React, { useEffect, useState } from "react";

import dayjs from "dayjs";

import Text from "../../../components/Text";
import NewMovementModal from "./components/NewMovementModal";
import MovementList from "./components/MovementList";
import { getCurrentUser, getMovementByUserId } from "@/lib/appwrite/api";
import CustomLoader from "@/components/shared/CustomLoader";
interface CardInfo {
  id: number;
  title: string;
  currency: string;
}

const cardsInfo = [
  {
    id: 1,
    title: "Balance",
    currency: "COP",
  },
  {
    id: 2,
    title: "Ingresos",
    currency: "COP",
  },
  {
    id: 3,
    title: "Gastos",
    currency: "COP",
  },
];
export interface Movements {
  $id: string;
  category: string;
  date: any;
  amount: number;
  type: string;
  description: string;
}

const Home: React.FC = () => {
  const now = dayjs();

  const [movements, setMovements] = useState<Movements[]>([]);
  const [currentCardInfo, setCurrentCardInfo] = useState<string | null>(null);
  const [isLoadingMovements, setIsLoadingMovements] = useState(false);

  const getUserMovements = async () => {
    try {
      setIsLoadingMovements(true);
      const currentAccount = await getCurrentUser();

      const response: Movements[] = await getMovementByUserId(
        currentAccount?.$id
      );
      setMovements(response);
      setIsLoadingMovements(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingMovements(false);
    }
  };

  const getTotalIncome = () => {
    return movements.reduce((total, movement) => {
      if (movement.type === "ingreso") {
        return total + movement.amount;
      }
      return total;
    }, 0);
  };

  const getTotalExpenses = () => {
    return movements.reduce((total, movement) => {
      if (movement.type === "gasto") {
        return total + movement.amount;
      }
      return total;
    }, 0);
  };

  const getIncomeCount = () => {
    return movements.filter((movement) => movement.type === "ingreso").length;
  };

  const getExpenseCount = () => {
    return movements.filter((movement) => movement.type === "gasto").length;
  };

  const getBalance = () => {
    return getTotalIncome() - getTotalExpenses();
  };

  const handleCardClick = (cardTitle: string) => {
    if (currentCardInfo === cardTitle) {
      setCurrentCardInfo(null);
    } else {
      setCurrentCardInfo(cardTitle);
    }
  };

  const getValueByInfo = (card: CardInfo) => {
    if (card.title === "Ingresos") {
      return getTotalIncome();
    } else if (card.title === "Gastos") {
      return getTotalExpenses();
    } else {
      return getBalance();
    }
  };

  const getColorByInfo = (card: CardInfo) => {
    if (card.title === "Ingresos") {
      return "success";
    } else if (card.title === "Gastos") {
      return "error";
    } else {
      return getBalance() >= 0 ? "success" : "error";
    }
  };

  useEffect(() => {
    getUserMovements();
  }, []);

  return (
    <div className="w-full flex flex-col">
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
            sx="mt-2 w-auto"
          >{`Revisa tu actividad - ${now}`}</Text>
        </div>
        <NewMovementModal fetchMovements={getUserMovements} />
      </div>
      {isLoadingMovements ? (
        <div className="mt-10">
          <CustomLoader color="#3183ff" height={44} width={44} />
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row items-start gap-6 mt-6 w-full">
            {cardsInfo.map((card) => (
              <div
                key={card.title}
                onClick={() => handleCardClick(card.title)}
                className={`flex flex-col bg-h-white ${
                  currentCardInfo === card.title
                    ? "border border-h-info shadow-md"
                    : "border-none border-transparent shadow-sm"
                }  rounded-md p-4 w-full lg:max-w-64 transition ease-in-out hover:shadow-md hover:scale-105 duration-200 cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Text size="h5" color="secondary" weight="regular" sx="mr-2">
                    {card.title}
                  </Text>
                  <Text size="h5" color="secondary" weight="regular">
                    {card.currency}
                  </Text>
                </div>


                <div className="flex items-center justify-between">
                  <Text size="h5" color={getColorByInfo(card)} weight="medium" sx="mr-2">
                    {getValueByInfo(card).toLocaleString("es-CO", {
                      style: "currency",
                      currency: "COP",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </Text>
                  {currentCardInfo === card.title && (
                    <Text size="text-3" color="info" weight="bold" sx="ml-4 text-center">
                      {card.title === "Ingresos"
                        ? `${getIncomeCount()} Registros`
                        : card.title === "Gastos"
                        ? `${getExpenseCount()} Registros`
                        : movements.length + " Registros"}
                    </Text>
                  )}
                </div>
              </div>
            ))}
          </div>
          <MovementList data={movements} />
        </>
      )}
    </div>
  );
};

export default Home;
