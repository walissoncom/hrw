import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { StepperContext } from "../../contexts/StepperContext";

const options = [
  "Option 0",
  "Option 1",
  "Option 2",
  "op3",
  "fdkmdfmk",
  "kdmlslk"
];

export default function Atuadores() {
  const [inputValue, setInputValue] = React.useState("");
  const { orderData, setOrderData } = useContext(StepperContext);

  return (
    <div>
      <Autocomplete
        value={orderData["atuadores"] || ""}
        onChange={(event, newValue) => {
          const inputElment = event.target.id.split("-")[0];
          setOrderData({ ...orderData, [inputElment]: newValue });
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="atuadores"
        options={options}
        sx={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Atuadores" name="atuadores" />
        )}
      />
    </div>
  );
}
