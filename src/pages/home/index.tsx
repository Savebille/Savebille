import React from "react";
import Text from "../../components/Text";
import dayjs from "dayjs";
import { CaretDown, Pencil, Plus, Trash } from "@phosphor-icons/react";
import { getIconByCategory } from "../../shared/utils/general.utils";

const Home: React.FC = () => {
  const cardsInfo = [
    {
      id: 1,
      title: "Balance",
      amount: 6000,
      currency: "COP",
      desc: "4 registros",
      current: true,
    },
    {
      id: 2,
      title: "Ingresos",
      amount: 10000,
      currency: "COP",
      desc: "1 registro",
      current: false,
    },
    {
      id: 3,
      title: "Gastos",
      amount: 4000,
      currency: "COP",
      desc: "3 registros",
      current: false,
    },
  ];

  const headersTable = [
    {
      id: 1,
      title: "Registro",
    },
    {
      id: 2,
      title: "Categoria",
    },
    {
      id: 3,
      title: "Fecha de creación",
    },
    {
      id: 4,
      title: "Monto",
    },
    {
      id: 5,
      title: "Tipo",
    },
    {
      id: 6,
      title: "Acciones",
    },
  ];

  const dataTable = [
    {
      id: 1,
      title: 'ID-1',
      date: '2021-10-10',
      category: 'Carro',
      amount: 10000,
      status: 'Ingreso',
    },
    {
      id: 2,
      title: 'ID-2',
      date: '2021-10-10',
      category: 'Comida',
      amount: 2000,
      status: 'Gasto',
    },
    {
      id: 3,
      title: 'ID-3',
      date: '2021-10-10',
      category: 'Viaje',
      amount: 1000,
      status: 'Ingreso',
    },
    {
      id: 4,
      title: 'ID-4',
      date: '2021-10-10',
      category: 'Casa',
      amount: 1000,
      status: 'Gasto',
    },
    {
      id: 5,
      title: 'ID-4',
      date: '2021-10-10',
      category: 'Casa',
      amount: 1000,
      status: 'Ingreso',
    },
    {
      id: 6,
      title: 'ID-4',
      date: '2021-10-10',
      category: 'Casa',
      amount: 1000,
      status: 'Gasto',
    },
    {
      id: 7,
      title: 'ID-4',
      date: '2021-10-10',
      category: 'Casa',
      amount: 1000,
      status: 'Gasto',
    },
    {
      id: 8,
      title: 'ID-4',
      date: '2021-10-10',
      category: 'Casa',
      amount: 1000,
      status: 'Gasto',
    },
    {
      id: 9,
      title: 'ID-4',
      date: '2021-10-10',
      category: 'Casa',
      amount: 1000,
      status: 'Gasto',
    },
    {
      id: 10,
      title: 'ID-4',
      date: '2021-10-10',
      category: 'Casa',
      amount: 1000,
      status: 'Gasto',
    },
  ];

  const now = dayjs();
  return (
    <div className="p-6">
      {/* Header content */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <Text color="primary" weight="bold" size="large">
            Listado de gastos e ingresos
          </Text>
          <Text
            color="secondary"
            weight="regular"
            size="extraSmall"
            sx="mt-2"
          >{`Revisa tu actividad - ${now}`}</Text>
        </div>
        <button
          onClick={() => {}}
          className="flex items-center bg-h-info px-3 rounded-md py-2 "
        >
          <Plus size={16} color={"var(--h-white)"} />
          <Text color="white" size="small" weight="regular" sx="ml-2">
            Agregar
          </Text>
        </button>
      </div>

      {/* Main content */}

      <div className="flex items-center gap-6 mt-6">
        {cardsInfo.map((card) => (
          <div
            className={`flex flex-col bg-white ${
              card.current ? "border" : "border-none"
            } ${
              card.current ? "border-h-info" : "border-transparent"
            } shadow-sm rounded-md p-4 w-64`}
          >
            <div className="flex items-center justify-between mb-3">
              <Text size="mini-2" color="secondary" weight="light">
                {card.title}
              </Text>
              <Text size="mini-2" color="secondary" weight="light">
                {card.currency}
              </Text>
            </div>
            <Text size="large" color="primary" weight="bold" sx="mb-2">
              ${card.amount}
            </Text>
            <Text size="mini-2" color="info" weight="regular">
              {card.desc}
            </Text>
          </div>
        ))}
      </div>

      <div className="flex flex-col bg-white rounded-md shadow-sm mt-6 p-4">
        <div className="flex items-center justify-between">
          <Text size="medium" color="primary" weight="bold">
            Todos los registros
          </Text>
          <button
            onClick={() => {}}
            className="flex items-center bg-h-info px-3 rounded-md py-2 "
          >
            <Text color="white" size="small" weight="regular" sx="mr-2">
              Mensual
            </Text>
            <CaretDown size={16} color={"var(--h-white)"} />
          </button>
        </div>

        <div className="bg-[#F8F9FC] rounded-md flex items-center justify-between mt-4">
          {headersTable.map((header) => (
            <div className="flex items-center justify-between p-3">
              <Text size="small" color="primary" weight="medium">
                {header.title}
              </Text>
            </div>
          ))}
        </div>
        <div>
          {dataTable.map((data) => (
            <div className="flex items-center justify-between p-3 border-b">
              <Text size="small" color="secondary" weight="light">
                {data.title}
              </Text>
              <div className="flex items-center">
                <div className="bg-h-blue-light w-7 h-7 flex items-center justify-center rounded-full mr-2">
                  {getIconByCategory(data.category)}
                </div>

                <Text size="small" color="primary" weight="regular">
                  {data.category}
                </Text>
              </div>
              <Text size="small" color="secondary" weight="light">
                {data.date}
              </Text>
              <Text size="small" color="primary" weight="regular">
                ${data.amount}
              </Text>
              {data.status === "Ingreso" ? (
                <div className="bg-[#F4F9F2] px-2 rounded-md py-1.5">
                  <Text size="small" color="success" weight="regular">
                    {data.status}
                  </Text>
                </div>
              ) : (
                <div className="bg-[#FFF2ED] px-2 rounded-md py-1.5">
                  <Text size="small" color="error" weight="regular">
                    {data.status}
                  </Text>
                </div>
              )}

              <div className="flex items-center cursor-pointer">
                <Pencil size={16} color={"var(--h-info)"} className="mr-3" />
                <Trash size={16} color={"var(--h-error)"} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
