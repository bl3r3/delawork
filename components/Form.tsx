"use client";
import { useState } from "react";
import sendEmail from "../app/lib/sendEmail";

type FormProps = {
  textArea?: boolean;
};

export const FormComponent = (props: FormProps) => {
  const { textArea } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false); // Estado para el checkbox
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para el mensaje de "Enviando..."
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: true,
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!termsAccepted) {
      setResponseMessage({
        isSuccessful: false,
        message: "Debe aceptar los términos y condiciones.",
      });
      return;
    }

    setIsSubmitting(true); // Activar estado de "Enviando..."

    try {
      const req = await sendEmail(name, email, phone, subject, message);

      // Verifica si el envío fue exitoso
      if (req.status === 200) {
        setResponseMessage({
          isSuccessful: true,
          message: "Gracias por su mensaje.",
        });
      } else {
        setResponseMessage({
          isSuccessful: false,
          message: "Hubo un error al enviar su mensaje. Intente nuevamente.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Hubo un error al enviar su mensaje.",
      });
    } finally {
      setIsSubmitting(false); // Desactivar el estado de "Enviando..."
    }
  };

  return (
    <form className="w-full min-[320px]:px-4 mb-24">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div className="flex flex-col gap-6 mt-9">
          <input
            type="text"
            id="first_name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5 dark:placeholder-gray-400 placeholder-corporativo"
            placeholder="Nombre y Apellidos*"
            required
          />
          <input
            type="text"
            id="telefono"
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5 placeholder-corporativo"
            placeholder="Teléfono de contacto*"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5 placeholder-corporativo"
            placeholder="Correo electrónico*"
            required
          />
        </div>

        <div className="flex flex-col md:gap-2 min-[320px]:gap-6">
          <label className="block mb-2 text-sm font-medium text-corporativo ">
            {textArea ? "Asunto*" : "Servicios"}
          </label>
          <select
            id="services"
            name="subject"
            defaultValue={"none"}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5 placeholder-corporativo"
            placeholder="Servicios*"
          >
            {textArea ? (
              <>
                <option className="text-corporativo" value={"none"}>
                  -Por favor, elige una opción-
                </option>
                <option value="Formacion">Formación</option>
                <option value="Asesoramiento">Asesoramiento</option>
              </>
            ) : (
              <>
                <option className="text-corporativo" value={"none"}>
                  -Por favor, elige una opción-
                </option>

                <option value="Fiscal">Fiscal</option>
                <option value="Laboral">Laboral</option>
                <option value="Contabilidad">Contabilidad</option>
                <option value="Gestion_Empresarial">Gestión Empresarial</option>
                <option value="Certificados_digitales">
                  Certificados Digitales
                </option>
              </>
            )}
          </select>

          {textArea && (
            <textarea
              id="message"
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              rows={4}
              className="bg-withe border border-corporativo text-corporativo text-sm rounded-lg focus:ring-corporativo focus:border-coporativo block w-full p-2.5 placeholder-corporativo"
              placeholder="Mensaje"
            ></textarea>
          )}

          <div className="mt-4">
            <input
              type="checkbox"
              id="terms"
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-corporativo">
              He leído y estoy de acuerdo con la{" "}
              <a href="/politicas" className="underline">
                política de privacidad
              </a>
            </label>
          </div>

          <div className="w-full flex justify-end">
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              type="submit"
              className="text-corporativo bg-white hover:bg-corporativo hover:text-white focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-corporativo"
              disabled={isSubmitting} // Deshabilitar botón mientras se envía
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>

          {/* Mostrar el mensaje de estado */}
          {isSubmitting && (
            <div className="w-full flex justify-end mt-2">
              <p className="text-blue-500 text-sm">Enviando mensaje...</p>
            </div>
          )}

          {/* Mostrar el mensaje de éxito o error */}
          {responseMessage.message && !isSubmitting && (
            <div className="w-full flex justify-end mt-2">
              <p
                className={`text-sm ${
                  responseMessage.isSuccessful
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {responseMessage.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
