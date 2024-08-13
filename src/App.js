import { useState } from "react";
import { StepperContext } from "./contexts/StepperContext";
import Header from "./components/Header";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Marca from "./components/steps/Marca";
import Injecao from "./components/steps/Injecao";
import Sensores from "./components/steps/Sensores";
import Atuadores from "./components/steps/Atuadores";
import Adicionais from "./components/steps/Adicionais";
import PainelOuReles from "./components/steps/PainelOuReles";
import Observacoes from "./components/steps/Observacoes";
import AcabamentosChicote from "./components/steps/AcabamentosChicote";
import AcabamentosConectores from "./components/steps/AcabamentosConectores";
import Final from "./components/steps/Final";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Marca do carro",
    "Marca da Injeção",
    "Sensores",
    // "Atuadores",
    // "Adicionais",
    // "Painel ou caixa de reles",
    // "Observaçōes",
    // "Acabamentos do chicote",
    // "Acabamentos dos conectores",
    "Final"
  ];

  const displayStep = step => {
    switch (step) {
      case 1:
        return <Marca />;
      case 2:
        return <Injecao />;
      case 3:
        return <Sensores />;
      // case 4:
      //   return <Atuadores />;
      // case 5:
      //   return <Adicionais />;
      // case 6:
      //   return <PainelOuReles />;
      // case 7:
      //   return <Observacoes />;
      // case 8:
      //   return <AcabamentosChicote />;
      // case 9:
      //   return <AcabamentosConectores />;
      case 4:
        return <Final />;
    }
  };

  const handleClick = direction => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // Check if steps are within bounds
    newStep > 0 && newStep < steps.length && setCurrentStep(newStep);

    console.log(StepperContext);
  };

  return (
    <div className="bg-black h-screen text-white">
      <Header />
      <div className="container mx-auto shadow-xl rounded-2xl pb-2">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />

          {/* Display Components */}
          <div className="my-10 p-10">
            <StepperContext.Provider
              value={{
                userData,
                setUserData,
                finalData,
                setFinalData
              }}
            >
              {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
        </div>

        {/* Navigation controls */}
        {currentStep != steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
}

export default App;
