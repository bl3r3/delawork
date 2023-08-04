import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FormComponent } from "../../components/Form";

import { Metadata } from "next";
import ScrollToTop from "../../components/ScrollTop";

export const metadata: Metadata = {
  title: "Contacto | Delowork",
  description: "Formulario de contacto Delowork",
};

const ContanctPage = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar color="#fff" textColor="#0052A1" />
      <main className=" w-screen h-full bg-gradient-to-b from-white via-gradient to-white ">
        <div className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-4 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl">
            Contacto
          </h1>
        </div>
        <section className="w-full min-[320px]:px-5 flex flex-col justify-between items-center gap-10 mt-8 md:px-12  md:items-start lg:px-48 md:gap-5">
          <h2 className="text-corporativo text-4xl uppercase">CONTÁCTANOS</h2>
          <p className="text-corporativo text-base min-[320px]:text-center md:text-left">
            SI NECESITAS ASESORAMIENTO SOBRE NUESTROS SERVICIOS, TIENES ALGUNA
            DUDA O SUGERENCIA, NO DUDES EN CONTACTAR CON NOSOTROS
          </p>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo md:w-4/12" />
        </section>

        <section className="w-full min-[320px]:px-5  md:px-12 lg:px-48 mb-24">
          <FormComponent />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContanctPage;
