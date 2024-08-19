import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { StepperContext } from "../../contexts/StepperContext";

export default function Injecao() {
  const [inputValue, setInputValue] = React.useState("");

  const { orderData, setOrderData } = useContext(StepperContext);
  const unique = [...new Set(ecus.map(item => item.fabricante))]; // [ 'A', 'B']
  const defaultProps = {
    options: unique
  };

  const flatProps = {
    options: ecus
      .filter(ecus => ecus.fabricante.includes(orderData.injecaoMarca))
      .map(option => option.modelo)
  };

  return (
    <div className="flex justify-content-center">
      <div>
        <Stack spacing={1} sx={{ width: 500 }}>
          <Autocomplete
            {...defaultProps}
            id="injecaoMarca"
            clearOnEscape
            onChange={(event, newValue) => {
              const inputElement = event.target.id.split("-")[0];
              setOrderData({
                ...orderData,
                [inputElement]: newValue,
                injecaoModelo: ""
              });
            }}
            value={orderData["injecaoMarca"] || ""}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Marca da Injeção"
                name="injecaoMarca"
              />
            )}
          />

          <Autocomplete
            {...flatProps}
            id="injecaoModelo"
            clearOnEscape
            value={orderData["injecaoModelo"] || ""}
            onChange={(event, newValue) => {
              const inputElement = event.target.id.split("-")[0];
              const imagemtToSet = ecus.find(
                element => element.modelo === newValue
              );
              setOrderData({
                ...orderData,
                [inputElement]: newValue,
                injecaoImagem: imagemtToSet.imagem
              });
            }}
            renderInput={params => (
              <TextField
                {...params}
                label="Modelo da Injeção"
                name="injecaoModelo"
              />
            )}
          />
        </Stack>
      </div>
      <div className="flex justify-center w-full">
        {orderData?.injecaoImagem && (
          <img className="w-80" src={orderData?.injecaoImagem} alt="ECU" />
        )}
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const ecus = [
  {
    fabricante: "Fueltech",
    modelo: "FT 300",
    imagem: "https://forja2.cl/wp-content/uploads/2020/05/forja-3.jpg"
  },
  {
    fabricante: "Fueltech",
    modelo: "FT 450",
    imagem:
      "https://cdn11.bigcommerce.com/s-pvt39/images/stencil/1280x1280/products/3371/10291/450_2_1_2048x2048__36220.1657090003.jpg"
  },
  {
    fabricante: "Fueltech",
    modelo: "FT 550",
    imagem: "https://www.fueltech.net/cdn/shop/products/550_2_1.jpg"
  },
  {
    fabricante: "Fueltech",
    modelo: "FT600",
    imagem: "https://www.fueltech.net/cdn/shop/products/600_2_1.jpg"
  },
  {
    fabricante: "InjePro",
    modelo: "S3000",
    imagem:
      "https://static.wixstatic.com/media/590a5c_388654cbf6df469ab607b1ab914dc8c9~mv2.jpg"
  },
  {
    fabricante: "InjePro",
    modelo: "T3000",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/662641/injepro_t5000_injecao_programavel_tela_touch_5_chicote_3_mts_906_1_b630793f98c000b66fac19ebedd345d4.jpg"
  },
  {
    fabricante: "InjePro",
    modelo: "T4000",
    imagem:
      "https://static.wixstatic.com/media/590a5c_9f0c104175ad4061a17aa805429b96d7~mv2.png"
  },
  {
    fabricante: "InjePro",
    modelo: "T5000",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_855772-MLB45314519806_032021-O.webp"
  },
  {
    fabricante: "Haltech",
    modelo: "Elite 550",
    imagem:
      "https://www.haltech.com/cdn-cgi/image/width=800,format=auto/wp-content/uploads/webstore/images/HT-150400_00.JPG"
  },
  {
    fabricante: "Haltech",
    modelo: "Elite 2000",
    imagem:
      "https://sleekaspares.com.au/wp-content/uploads/2023/12/HT-151300_02.jpg"
  }
];
