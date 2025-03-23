import React from "react";

const PrescriptionDigitalize = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary text-white rounded-lg p-6 lg:p-10 shadow-lg max-w-xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
        Prescription Digitalization
      </h2>
      <p className="text-sm lg:text-base font-light mt-3">
        Convert your handwritten prescriptions into digital records instantly
        using AI-powered recognition technology.
      </p>
      <button
        onClick={() =>
          (window.location.href =
            "https://code-hire-x-digiscribe.streamlit.app/")
        }
        className="mt-6 bg-white text-primary font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
      >
        Digitalize Now
      </button>
    </div>
  );
};

export default PrescriptionDigitalize;
