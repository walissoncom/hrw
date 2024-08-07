import { useState } from "react";
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

  const steps = [
    "Marca do carro",
    "Marca da Injeção",
    "Sensores",
    "Atuadores",
    "Adicionais",
    "Painel ou caixa de reles",
    "Observaçōes",
    "Acabamentos do chicote",
    "Acabamentos dos conectores",
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
      case 4:
        return <Atuadores />;
      case 5:
        return <Adicionais />;
      case 6:
        return <PainelOuReles />;
      case 7:
        return <Observacoes />;
      case 8:
        return <AcabamentosChicote />;
      case 9:
        return <AcabamentosConectores />;
      case 10:
        return <Final />;
    }
  };

  return (
    <div className="bg-white h-screen">
      <Header />
      <div className="container mx-auto shadow-xl rounded-2xl pb-2">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>

        {/* Navigation controls */}
        <StepperControl />
      </div>
    </div>
  );
}

export default App;
