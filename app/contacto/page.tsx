import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContanctPage = () => {
  return (
    <>
      <Navbar />
      <div className=" w-screen h-full bg-gradient-to-b from-white via-gradient to-white ">
        <div className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-4 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl">
            Contacto
          </h1>
        </div>
        <div className="w-full min-[320px]:px-4 flex flex-col justify-between items-center gap-10 mt-8 md:px-12  md:items-start lg:px-48 md:gap-5">
          <h2 className="text-corporativo text-4xl uppercase">CONTÁCTANOS</h2>
          <p className="text-corporativo text-base min-[320px]:text-center md:text-left">
            SI NECESITAS ASESORAMIENTO SOBRE NUESTROS SERVICIOS, TIENES ALGUNA
            DUDA O SUGERENCIA, NO DUDES EN CONTACTAR CON NOSOTROS
          </p>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo md:w-4/12" />
        </div>

        <form className="w-full min-[320px]:px-4  md:px-12 lg:px-48 mb-24">
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div className="flex flex-col gap-6 mt-9">
              <input
                type="text"
                id="first_name"
                className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5  dark:placeholder-gray-400 dark:text-white  placeholder-corporativo"
                placeholder="Nombre y Apellidos*"
                required
              />
              <input
                type="text"
                id="telefono"
                className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5  dark:placeholder-gray-400 dark:text-white  placeholder-corporativo"
                placeholder="Telefono de contacto*"
                required
              />
              <input
                type="email"
                id="email"
                className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5  dark:placeholder-gray-400 dark:text-white  placeholder-corporativo"
                placeholder="Correo electronico*"
                required
              />
            </div>

            <div className="flex flex-col gap-2 min-[320px]:gap-6">
              <label className="block mb-2 text-sm font-medium text-corporativo ">
                Servicios
              </label>
              <select
                id="services"
                className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5  placeholder-corporativo"
                placeholder="Servicios*"
              >
                <option selected className="text-corporativo">
                  Choose a country
                </option>
                <option value="Fiscal">Fiscal</option>
                <option value="Laboral">Laboral</option>
                <option value="Contabilidad">Contabilidad</option>
                <option value="Gestion_Empresarial">Gestion Empresarial</option>
                <option value="Certificados_digitales">
                  Certificados Digitales
                </option>
              </select>

              <div className="w-full flex justify-end">
                {/* <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    I agree with the{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div> */}
                <button
                  type="submit"
                  className="text-corporativo bg-white hover:bg-corporativo hover:text-white focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-corporativo"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ContanctPage;
