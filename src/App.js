import Header from "./components/Header";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";

function App() {
  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper />
        </div>

        {/* Navigation controls */}
        <StepperControl />
      </div>
    </div>
  );
}

export default App;
