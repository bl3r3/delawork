import React from "react";
import Image from "next/image";

import Logo from "../public/logo.png";

const Footer = () => {
  return (
    <div className="w-screen h-auto bg-corporativo flex justify-center items-start gap-9 p-12">
      <div className="flex flex-col">
        <Image src={Logo} alt="Logo" />
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="text-xl text-white">Nosotros</h5>
        <p className="text-sm text-white">Conocenos</p>
        <p className="text-sm text-white">Contactanos</p>
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="text-xl text-white">Servicios</h5>
        <p className="text-sm text-white">Fiscal</p>
        <p className="text-sm text-white">Laboral</p>
        <p className="text-sm text-white">Contable</p>
        <p className="text-sm text-white">Gestion Empresarial</p>
        <p className="text-sm text-white">Certificados digitales</p>
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="text-xl text-white">Emprendedores</h5>
        <p className="text-sm text-white">Formacion</p>
        <p className="text-sm text-white">Asesoramiento</p>
      </div>

      <div className="flex flex-col gap-3">
        <h5 className="text-xl text-white">Legal</h5>
        <p className="text-sm text-white">Politica de Proteccion de datos</p>
        <p className="text-sm text-white">Terminos y condiciones</p>
        <p className="text-sm text-white">Privacidad</p>
        <p className="text-sm text-white">Copyright</p>
        <p className="text-sm text-white">Preferencias de cookies</p>
      </div>

      <div className="flex flex-col">
        <h5 className="text-xl text-white">{"FAQ's"}</h5>
      </div>
    </div>
  );
};

export default Footer;
