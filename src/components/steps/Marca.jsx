import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { StepperContext } from "../../contexts/StepperContext";

export default function Marca() {
  const { orderData, setOrderData } = useContext(StepperContext);
  const unique = [...new Set(carros.map(item => item.make))]; // [ 'A', 'B']
  const defaultProps = {
    options: unique
  };
  const flatProps = {
    options: carros
      .filter(cars => cars.make.includes(orderData.carroMarca))
      .map(option => option.model)
  };
  const anoProps = {
    options: carros
      .filter(cars => cars.make.includes(orderData.carroMarca))
      .filter(cars => cars.model.includes(orderData.carroModelo))
      .map(option => option.year)
  };

  const motorProps = {
    options: carros
      .filter(cars => cars.make.includes(orderData.carroMarca))
      .filter(cars => cars.model.includes(orderData.carroModelo))
      .map(option => option.engine)
  };

  return (
    <Stack spacing={1} sx={{ width: 500 }}>
      <Autocomplete
        {...defaultProps}
        id="carroMarca"
        clearOnEscape
        value={orderData["carroMarca"] || ""}
        onChange={(event, newValue) => {
          const inputElement = event.target.id.split("-")[0];
          console.log(`THIS IS inputElement`, inputElement);
          setOrderData({ ...orderData, [inputElement]: newValue });
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Marca do Carro"
            name="carroMarca"
            variant="standard"
          />
        )}
      />

      <Autocomplete
        {...flatProps}
        id="carroModelo"
        clearOnEscape
        value={orderData["carroModelo"] || ""}
        onChange={(event, newValue) => {
          const inputElement = event.target.id.split("-")[0];
          console.log(`THIS IS inputElement`, inputElement);
          setOrderData({ ...orderData, [inputElement]: newValue });
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Modelo da Carro"
            name="carroModelo"
            variant="standard"
          />
        )}
      />

      <Autocomplete
        {...anoProps}
        id="carroAno"
        clearOnEscape
        value={orderData["carroAno"] || ""}
        onChange={(event, newValue) => {
          const inputElement = event.target.id.split("-")[0];
          console.log(`THIS IS inputElement`, inputElement);
          setOrderData({ ...orderData, [inputElement]: newValue });
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Ano do Carro"
            name="carroAno"
            variant="standard"
          />
        )}
      />

      <Autocomplete
        {...motorProps}
        id="carroMotor"
        clearOnEscape
        value={orderData["carroMotor"] || ""}
        onChange={(event, newValue) => {
          const inputElement = event.target.id.split("-")[0];
          console.log(`THIS IS inputElement`, inputElement);
          setOrderData({ ...orderData, [inputElement]: newValue });
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Motor usado no Carro"
            name="carroMotor"
            variant="standard"
          />
        )}
      />
    </Stack>
  );
}

const carros = [
  { make: "BMW", model: "318ti", year: 1997, engine: "1.9L 4 Cyl" },
  { make: "BMW", model: "323", year: 1998, engine: "2.3L 4 Cyl" },
  { make: "BMW", model: "325", year: 1999, engine: "2.5L 6 Cyl" },
  { make: "BMW", model: "328", year: 2001, engine: "2.8L 6 Cyl" },
  { make: "BMW", model: "330", year: 2004, engine: "3.0" },
  { make: "Subaru", model: "Impreza", year: 2005, engine: "2.0L 4 Cyl" },
  { make: "Subaru", model: "WRX", year: 2005, engine: "2.5L 4 Cyl Turbo" },
  { make: "Subaru", model: "WRX STI", year: 1998, engine: "2.5L 4 Cyl Turbo" },
  { make: "Honda", model: "Integra", year: 2005, engine: "2.0L 4 Cyl" },
  { make: "Nissan", model: "350Z", year: 2009, engine: "3.6L V6" }
];
