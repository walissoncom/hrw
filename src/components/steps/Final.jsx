import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

const Final = () => {
  const { orderData } = useContext(StepperContext);

  const handleWhatsappClick = () => {
    const phoneNumber = "+5511997668364";

    const url =
      "http://wa.me/" +
      phoneNumber +
      "?text=" +
      "*Marca:* " +
      orderData?.carroMarca +
      "%0a" +
      "*Ano:* " +
      orderData?.carroAno +
      "%0a" +
      "*Modelo:* " +
      orderData?.carroModelo +
      "%0a" +
      "*Motor Utilizado:* " +
      orderData?.carroMotor +
      "%0a" +
      "*Marca da Injeção:* " +
      orderData?.injecaoMarca +
      "%0a" +
      "*Modelo da Injeção:* " +
      orderData?.injecaoModelo +
      "%0a" +
      "*Atuadores:* " +
      orderData?.atuadores;

    console.log(`WhatsApp message triggered - `, url);

    window.open(url, "_blank").focus();
  };

  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Parabéns!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Seu pedido está quase finalizado, verifique as informações abaixo:
        </div>

        <table className="border-collapse border border-slate-500 mt-5 w-full md:w-10/12">
          <thead>
            <tr>
              <th className="border border-slate-400 p-2 bg-gray-200">
                Produto
              </th>
              <th className="border border-slate-400 p-2 bg-gray-200">
                Selecionado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-400 p-2 pl-3">Marca</td>
              <td className="border border-slate-400 p-2 pl-3">
                {orderData?.carroMarca}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2 pl-3">Modelo</td>
              <td className="border border-slate-400 p-2 pl-3">
                {orderData?.carroModelo}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2 pl-3">Ano</td>
              <td className="border border-slate-400 p-2 pl-3">
                {orderData?.carroAno}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2 pl-3">
                Motor Utilizado
              </td>
              <td className="border border-slate-400 p-2 pl-3">
                {orderData?.carroMotor}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2 pl-3">
                Marca da Injeção
              </td>
              <td className="border border-slate-400 p-2 pl-3">
                {orderData?.injecaoMarca}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2 pl-3">
                Modelo da Injeção
              </td>
              <td className="border border-slate-400 p-2 pl-3">
                {orderData?.injecaoModelo}
              </td>
            </tr>
            <tr>
              <td className="border border-slate-400 p-2 pl-3">Atuadores</td>
              <td className="border border-slate-400 p-2 pl-3">
                {orderData?.atuadores}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="bg-green-600 text-white p-5 mt-5 rounded"
          type="button"
          onClick={handleWhatsappClick}
        >
          FINALIZAR 🚀
        </button>
      </div>
    </div>
  );
};

export default Final;
