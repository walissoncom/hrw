import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Injecao = () => {
  const { orderData, setOrderData } = useContext(StepperContext);

  const handleChange = e => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };
  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Marca da Injeção
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={orderData["injecaoMarca"] || ""}
            name="injecaoMarca"
            placeholder="Marca da Injeção"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Modelo da Injeção
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={orderData["injecaoModelo"] || ""}
            name="injecaoModelo"
            placeholder="Modelo da Injeção"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Injecao;
