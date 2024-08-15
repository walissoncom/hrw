import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { StepperContext } from "../../contexts/StepperContext";

export default function Injecao() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  const { orderData, setOrderData } = useContext(StepperContext);
  const unique = [...new Set(ecus.map(item => item.title))]; // [ 'A', 'B']
  const defaultProps = {
    options: unique
  };

  const flatProps = {
    options: ecus
      .filter(ecus => ecus.title.includes(orderData.injecaoMarca))
      .map(option => option.model)
  };

  return (
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
            variant="standard"
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
          setOrderData({ ...orderData, [inputElement]: newValue });
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Modelo da Injeção"
            name="injecaoModelo"
            variant="standard"
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const ecus = [
  { title: "Fueltech", model: "350" },
  { title: "Fueltech", model: "450" },
  { title: "Fueltech", model: "550" },
  { title: "Fueltech", model: "650" },
  { title: "InjePro", model: "T3000" },
  { title: "InjePro", model: "T4000" },
  { title: "InjePro", model: "T5000" },
  { title: "Haltech", model: "Elite 500" },
  { title: "Haltech", model: "Elite 2000" }
];
