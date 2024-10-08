import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { StepperContext } from "../../contexts/StepperContext";

export default function Marca() {
  const { orderData, setOrderData } = useContext(StepperContext);
  const unique = [...new Set(carros.map(item => item.fabricante))]; // [ 'A', 'B']
  const defaultProps = {
    options: unique
  };
  const flatProps = {
    options: carros
      .filter(cars => cars.fabricante.includes(orderData.carroMarca))
      .map(option => option.modelo)
  };
  const anoProps = {
    options: carros
      .filter(cars => cars.fabricante.includes(orderData.carroMarca))
      .filter(cars => cars.modelo.includes(orderData.carroModelo))
      .map(option => option.ano)
  };

  const motorProps = {
    options: motores.map(option => option.codigo + " - " + option.fabricante)
  };

  return (
    <>
      <Stack spacing={1} sx={{ width: 1 }}>
        <Autocomplete
          {...defaultProps}
          id="carroMarca"
          clearOnEscape
          value={orderData["carroMarca"] || ""}
          onChange={(event, newValue) => {
            const inputElement = event.target.id.split("-")[0];
            setOrderData({
              ...orderData,
              [inputElement]: newValue,
              carroModelo: "",
              carroAno: "",
              carroMotor: ""
            });
          }}
          renderInput={params => (
            <TextField {...params} label="Marca do carro" name="carroMarca" />
          )}
        />

        <Autocomplete
          {...flatProps}
          id="carroModelo"
          clearOnEscape
          value={orderData["carroModelo"] || ""}
          onChange={(event, newValue) => {
            const inputElement = event.target.id.split("-")[0];
            const imagemtToSet = carros.find(
              element => element.modelo === newValue
            );
            setOrderData({
              ...orderData,
              [inputElement]: newValue,
              carroAno: "",
              carroMotor: "",
              carroImagem: imagemtToSet.imagem
            });
          }}
          renderInput={params => (
            <TextField {...params} label="Modelo da carro" name="carroModelo" />
          )}
        />

        <Autocomplete
          {...anoProps}
          id="carroAno"
          clearOnEscape
          value={orderData["carroAno"] || ""}
          onChange={(event, newValue) => {
            const inputElement = event.target.id.split("-")[0];
            setOrderData({
              ...orderData,
              [inputElement]: newValue,
              carroMotor:
                "Original - " +
                carros
                  .filter(cars =>
                    cars.fabricante.includes(orderData.carroMarca)
                  )
                  .filter(cars => cars.modelo.includes(orderData.carroModelo))
                  .map(option => option.motor)
            });
          }}
          renderInput={params => (
            <TextField {...params} label="Ano do carro" name="carroAno" />
          )}
        />

        <Autocomplete
          {...motorProps}
          id="carroMotor"
          clearOnEscape
          value={orderData["carroMotor"] || ""}
          onChange={(event, newValue) => {
            const inputElement = event.target.id.split("-")[0];
            setOrderData({ ...orderData, [inputElement]: newValue });
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Motor usado no carro"
              name="carroMotor"
            />
          )}
        />
      </Stack>
      {/* <div className="flex justify-center w-full">
      {orderData?.carroImagem && (
        <img className="max-w-xs" src={orderData?.carroImagem} alt="Carro" />
      )}
    </div>*/}
    </>
  );
}

const carros = [
  {
    fabricante: "BMW",
    modelo: "318ti",
    ano: 1997,
    motor: "1.9L 4 Cyl",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkQhOae7b7gmafP-_NcvNfSMEkeAm0_jJdQ&s"
  },
  {
    fabricante: "BMW",
    modelo: "323",
    ano: 1998,
    motor: "2.3L 6 Cyl",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFDgefJRh9bv0AnbpJtij33UZst_tfKD_vA&s"
  },
  {
    fabricante: "BMW",
    modelo: "325",
    ano: 1999,
    motor: "2.5L 6 Cyl",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4D1rVqumX3QdwxqmWKDiUsmJiNlCQuBP7Lg&s"
  },
  {
    fabricante: "BMW",
    modelo: "328",
    ano: 2001,
    motor: "2.8L 6 Cyl",
    imagem:
      "https://s3.us-east-2.amazonaws.com/prod.mm.com/img/featurenews/1579489778_be186fb0-a3f8-46d4-b213-ab3ef5187ead_mmthumb.jpeg"
  },
  { fabricante: "BMW", modelo: "330", ano: 2004, motor: "3.0", imagem: "" },
  {
    fabricante: "Subaru",
    modelo: "Impreza",
    ano: 2005,
    motor: "2.5L 4 Cyl",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM01bg2cYIjyIaoEvaRzaCx5eGiKAnx-XDZg&s"
  },
  {
    fabricante: "Subaru",
    modelo: "WRX",
    ano: 2010,
    motor: "2.5L 4 Cyl Turbo",
    imagem:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/dp/images/uploads/subaru-wrx-2010-2011-w.jpg"
  },
  {
    fabricante: "Subaru",
    modelo: "STI",
    ano: 1998,
    motor: "2.0L 4 Cyl Turbo",
    imagem:
      "https://images.hgmsites.net/hug/1998-subaru-impreza-22b-sti--photo-credit-appreciating-classics_100752818_h.jpg"
  },
  {
    fabricante: "Honda",
    modelo: "Integra",
    ano: 2005,
    motor: "2.0L 4 Cyl",
    imagem:
      "https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/1fb25aad-a524-4cdc-bad2-38f5fb8f9e00/art-mg-hondaintegratyperdc5i.jpg"
  },
  {
    fabricante: "Nissan",
    modelo: "350Z",
    ano: 2009,
    motor: "3.6L V6",
    imagem: "https://i.ytimg.com/vi/upMnDkGvJvE/sddefault.jpg"
  }
];

const motores = [
  {
    codigo: "K20",
    fabricante: "Honda"
  },
  {
    codigo: "1JZ",
    fabricante: "Toyota"
  },
  {
    codigo: "2JZ",
    fabricante: "Toyota"
  },
  {
    codigo: "SR20",
    fabricante: "Nissan"
  },
  {
    codigo: "EZ30",
    fabricante: "Subaru"
  },
  {
    codigo: "EJ25",
    fabricante: "Subaru"
  }
];
