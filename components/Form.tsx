import { type } from "os";
import React from "react";

type FormProps = {
  textArea?: boolean;
};

export const FormComponent = (props: FormProps) => {
  const { textArea } = props;

  return (
    <form className="w-full min-[320px]:px-4  mb-24">
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

        <div className="flex flex-col md:gap-2 min-[320px]:gap-6">
          <label className="block mb-2 text-sm font-medium text-corporativo ">
            Servicios
          </label>
          <select
            id="services"
            className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5  placeholder-corporativo"
            placeholder="Servicios*"
          >
            {textArea ? (
              <>
                <option selected className="text-corporativo">
                  -Por favor, elige un opción-
                </option>
                <option value="Fiscal">Fiscal</option>
                <option value="Laboral">Laboral</option>
              </>
            ) : (
              <>
                <option selected className="text-corporativo">
                  -Por favor, elige un opción-
                </option>

                <option value="Fiscal">Fiscal</option>
                <option value="Laboral">Laboral</option>
                <option value="Contabilidad">Contabilidad</option>
                <option value="Gestion_Empresarial">Gestion Empresarial</option>
                <option value="Certificados_digitales">
                  Certificados Digitales
                </option>
              </>
            )}
          </select>

          {textArea && (
            <textarea
              id="message"
              rows={4}
              className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5  placeholder-corporativo"
              placeholder="Mensaje"
            ></textarea>
          )}

          <div className="w-full flex justify-end">
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
  );
};
