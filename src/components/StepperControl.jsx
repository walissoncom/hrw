import React from "react";

const StepperControl = () => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* Back button */}
      <button className="bg-rose-800 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-2oo ease-in-out">
        Back
      </button>
      {/* Next button */}
      <button className="bg-rose-800 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-2oo ease-in-out">
        Next
      </button>
    </div>
  );
};

export default StepperControl;
