import {
  Calculator,
  CoatHanger,
  File,
  GasPump,
  HandCoins,
  House,
  Money,
  Pizza,
  Plus,
  TrendUp,
} from "@phosphor-icons/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Text from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import IMAGES from "@/shared/constants/images";
import { DatePickerWithPresets } from "@/components/DatePicker";
import Modal from "@/components/Modal";
import { useCreateMovement } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { MovementValidation } from "@/lib/validation";
import { SetStateAction, useState } from "react";
import {
  defaultExpenseCategories,
  defaultIncomeCategories,
} from "@/shared/constants/data";
import CategorySelector from "@/components/CategorySelector";

interface NewMovementModalProps {
  fetchMovements: () => void;
}

const NewMovementModal: React.FC<NewMovementModalProps> = ({
  fetchMovements,
}) => {
  const form = useForm<z.infer<typeof MovementValidation>>({
    resolver: zodResolver(MovementValidation),
    defaultValues: {
      type: "",
      amount: "",
      date: new Date(),
      description: "",
      category: "",
    },
  });

  const { user } = useUserContext();

  const { toast } = useToast();

  const { mutateAsync: createMovement, isPending: isLoadingCreate } =
    useCreateMovement();

  // Handler
  const handleSubmit = async (value: z.infer<typeof MovementValidation>) => {
    console.log("value", value);

    // ACTION = CREATE

    const cleanAmount = Number(value.amount.replace(/[.,]/g, ""));

    const newMovement = await createMovement({
      type: value.type,
      amount: cleanAmount,
      date: value.date,
      description: value.description,
      category: value.category,
      userId: user.id,
    });

    if (!newMovement) {
      toast({
        title: `create movement failed. Please try again.`,
      });
    }
    toast({
      title: `REGISTRADO EN DB PAPU.`,
    });
    form.reset();

    fetchMovements();
    setActivateCloseModal(true);
  };

  // Amount Field

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aquí puedes agregar validación adicional si es necesario
    let value = e.target.value.replace(/\D/g, ""); // Eliminar caracteres no numéricos
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Agregar separadores de miles
    form.setValue("amount", value);
  };

  const categoryOptions = [
    {
      icon: <Money size={24} color="#2ECC71" />,
      type: "Ingreso",
      label: "Salario",
      color: "lightGreen",
    },
    {
      icon: (
        <img src={IMAGES.NEQUI_ICON} alt="nequiIcon" width={24} height={24} />
      ),
      type: "Ingreso",
      label: "Nequi",
      color: "lightGreen",
    },
    {
      icon: (
        <img
          src={IMAGES.DAVIPLATA_ICON}
          alt="daviplataIcon"
          width={24}
          height={24}
        />
      ),
      type: "Ingreso",
      label: "Daviplata",
      color: "lightGreen",
    },
    {
      icon: <TrendUp size={24} color="#3498DB" />,
      type: "Ingreso",
      label: "Inversión",
      color: "blue",
    },
    {
      icon: <HandCoins size={24} color="#E67E22" />,
      type: "Ingreso",
      label: "Prestamo",
      color: "orange",
    },
    {
      icon: <House size={24} color="#2ECC71" />,
      type: "Gasto",
      label: "Arriendo",
      color: "lightGreen",
    },
    {
      icon: <Pizza size={24} color="#E67E22" />,
      type: "Gasto",
      label: "Comida",
      color: "orange",
    },
    {
      icon: <CoatHanger size={24} color="#3498DB" />,
      type: "Gasto",
      label: "Ropa",
      color: "blue",
    },
    {
      icon: <GasPump size={24} color="#8E44AD" />,
      type: "Gasto",
      label: "Gasolina",
      color: "purple",
    },
  ];

  const [selectedType, setselectedType] = useState("Ingreso");

  const tottleSelectedType = (type: SetStateAction<string>) => {
    if (type !== selectedType) setselectedType(type);
  };

  const [activateCloseModal, setActivateCloseModal] = useState(false);

  return (
    <Modal
      closeModal={activateCloseModal}
      hasHeader
      title="Nuevo movimiento"
      description="Ingresa la información de tu movimiento"
      triggerContent={
        <button className="flex items-center justify-between px-3 py-2 bg-h-info rounded-md mt-4 sm:mt-0 transition ease-in-out hover:scale-105 duration-200 text-h-white text-[14px] font-normal gap-2 ">
          Agregar
          <Plus size={16} color={"var(--h-white)"} />
        </button>
      }
      mainContent={
        <div className="mt-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-10"
            >
              {/* Income or Expense */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full items-center ">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex w-full items-center justify-evenly"
                      >
                        <FormItem className="flex w-auto items-center gap-4 space-y-0 ">
                          <FormControl
                            onClick={() => tottleSelectedType("Ingreso")}
                          >
                            <RadioGroupItem value="ingreso" />
                          </FormControl>
                          <FormLabel className="font-normal text-h-success">
                            Ingreso
                          </FormLabel>
                        </FormItem>

                        <FormItem className="flex w-auto items-center gap-4 space-y-0 ">
                          <FormControl
                            onClick={() => tottleSelectedType("Gasto")}
                          >
                            <RadioGroupItem value="gasto" />
                          </FormControl>
                          <FormLabel className="font-normal text-h-error">
                            Gasto
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* First Field */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <FormLabel htmlFor="amount">
                            <Calculator
                              size={24}
                              color="#8e98a7"
                              className="cursor-pointer"
                            />
                          </FormLabel>

                          {selectedType === "Ingreso" && (
                            <div className="flex items-center ml-4">
                              <Text size="h3" color="success" sx="mr-2">
                                +
                              </Text>
                              <Input
                                className="text-[20px] bg-transparent p-0 border-none rounded-none leading-none text-h-success placeholder:text-h-success focus:outline-none"
                                type="text"
                                autoComplete="off"
                                placeholder="0.00"
                                inputMode="numeric"
                                {...field}
                                onChange={handleInputChange}
                              />
                            </div>
                          )}
                          {selectedType === "Gasto" && (
                            <div className="flex items-center ml-4">
                              <Text size="h3" color="error" sx="mr-2">
                                -
                              </Text>
                              <Input
                                className="text-[20px] bg-transparent p-0 border-none rounded-none leading-none text-h-error placeholder:text-h-error focus:outline-none"
                                type="text"
                                autoComplete="off"
                                placeholder="0.00"
                                inputMode="numeric"
                                {...field}
                                onChange={handleInputChange}
                              />
                            </div>
                          )}
                        </div>

                        <div className="flex items-center">
                          <img
                            src={IMAGES.COLFLAG}
                            alt="bandera de Colombia"
                            width={24}
                            height={24}
                          />
                          <Text
                            size="h3"
                            color="secondary"
                            weight="light"
                            sx="ml-2"
                          >
                            COP
                          </Text>
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage className="ml-10" />
                  </FormItem>
                )}
              />

              {/* Second Field */}
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <DatePickerWithPresets fieldProps={field} />
                    <FormMessage className="ml-10" />
                  </FormItem>
                )}
              />

              {/* Third Field */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center">
                        <FormLabel htmlFor="description">
                          <File
                            size={24}
                            color="#8e98a7"
                            className="cursor-pointer"
                          />
                        </FormLabel>

                        <Input
                          className="w ml-4 text-[14px] bg-transparent rounded-none p-0 border-none leading-none text-h-primary focus:outline-none"
                          id="description"
                          autoComplete="off"
                          type="text"
                          placeholder="Descripción"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="ml-10" />
                  </FormItem>
                )}
              />

              {/* Fourth Field */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <CategorySelector
                      options={
                        selectedType === "Ingreso"
                          ? defaultIncomeCategories
                          : defaultExpenseCategories
                      }
                      fieldProps={field}
                    />
                    <FormMessage className="ml-10" />
                  </FormItem>
                )}
              />

              <div className="flex w-full items-center justify-end">
                <Button
                  disabled={isLoadingCreate}
                  type="submit"
                  className="w-auto lg:w-auto"
                >
                  Crear movimiento
                </Button>
              </div>
            </form>
          </Form>
        </div>
      }
    />
  );
};

export default NewMovementModal;
