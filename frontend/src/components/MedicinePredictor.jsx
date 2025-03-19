import React from "react";
import { assets } from "../assets/assets";

const PrescriptionRedirect = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-primary text-white rounded-lg p-6 lg:p-10 shadow-lg max-w-xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">
        AI-Powered Medicine Prescription
      </h2>
      <p className="text-sm lg:text-base font-light mt-3">
        Get instant, AI-driven medical recommendations based on advanced machine
        learning models. Stay ahead with cutting-edge healthcare technology.
      </p>
      <button
        onClick={() =>
          (window.location.href =
            "https://psudo-coder-disease-prediction-juxu.onrender.com")
        }
        className="mt-6 bg-white text-primary font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
      >
        Explore AI Prescription
      </button>
    </div>
  );
};

export default PrescriptionRedirect;
