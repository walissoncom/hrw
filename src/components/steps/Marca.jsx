import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { StepperContext } from "../../contexts/StepperContext";

export default function Marca() {
  const unique = [...new Set(carros.map(item => item.title))]; // [ 'A', 'B']
  const defaultProps = {
    options: unique
  };
  const flatProps = {
    options: carros.map(option => option.model)
  };
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const { orderData, setOrderData } = useContext(StepperContext);

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
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
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const carros = [
  { title: "BMW", model: "318ti" },
  { title: "BMW", model: "323" },
  { title: "BMW", model: "325" },
  { title: "BMW", model: "428" },
  { title: "Subaru", model: "Impreza" },
  { title: "Subaru", model: "WRX" },
  { title: "Subaru", model: "WRX STI" },
  { title: "Honda", model: "Integra" },
  { title: "Nissan", model: "350Z" }
];
