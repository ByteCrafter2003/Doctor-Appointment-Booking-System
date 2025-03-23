import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import PrescriptionRedirect from "../components/MedicinePredictor";
import PrescriptionDigitalize from "../components/PrescriptionDigitalize";
const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <PrescriptionRedirect />
      <br></br>
      <PrescriptionDigitalize />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
