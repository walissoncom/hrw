import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Sensores = () => {
  const { orderData, setOrderData } = useContext(StepperContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Sensores de Temperatura
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={orderData["sensoresTemperatura"] || ""}
            name="sensoresTemperatura"
            placeholder="Sensores de Temperatura"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Sensores de Pressão
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={orderData["sensoresPressao"] || ""}
            name="sensoresPressao"
            placeholder="Sensores de Pressão"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Sensores;
