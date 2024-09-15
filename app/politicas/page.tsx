import React from "react";
import ScrollToTop from "../../components/ScrollTop";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AvisoLegal = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar color="#fff" textColor="#0052A1" />
      <main className=" w-screen h-full bg-gradient-to-b from-white via-gradient to-white ">
        <section className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-4 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl">
            POLÍTICA DE PRIVACIDAD
          </h1>
        </section>
        <div className="flex items-center justify-center p-4">
          <iframe
            src="/politica_proteccion_datos_delowork.pdf"
            width="70%"
            height="600px"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AvisoLegal;
