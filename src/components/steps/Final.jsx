import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Final = () => {
  const { orderData } = useContext(StepperContext);
  console.log(orderData);

  const handleWhatsappClick = () => {
    const phoneNumber = "+61418304595";

    const name = "Walisson";
    const car = "Subaru";

    const url =
      "http://wa.me/" +
      phoneNumber +
      "?text=" +
      "*Name :* " +
      name +
      "%0a" +
      "*Car :* " +
      car;

    window.open(url, "_blank").focus();
  };
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Parabéns!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Recebemos o seu pedido ✅
        </div>
        <div className="mt-5">
          <ul>
            <li>Marca: {orderData?.carroMarca}</li>
            <li>Ano: {orderData?.carroAno}</li>
            <li>Modelo: {orderData?.carroModelo}</li>
            <li>Motor Utilizado: {orderData?.carroMotor}</li>
            <li>Marca da Injeção: {orderData?.injecaoMarca}</li>
            <li>Modelo da Injeção: {orderData?.injecaoModelo}</li>
            <li>Atuadores: {orderData?.atuadores}</li>
          </ul>
        </div>
        <button
          className="bg-green-600 p-3 text-white mt-3"
          type="button"
          onClick={handleWhatsappClick}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Final;
