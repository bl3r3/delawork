import React from "react";
import Image from "next/image";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-corporativo px-4 ">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6">
            <a
              href="https://flowbite.com/"
              className="flex items-center min-[320px]:w-full min-[320px]:justify-center"
            >
              <Image src={Logo} alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 min-[320px]:grid-cols-3 min-[320px]:gap-4 min-[320px]:text-center md:text-sm md:text-start">
            <div>
              <h2 className="mb-6 md:text-sm min-[320px]:text-xs font-semibold text-white uppercase ">
                Nosotros
              </h2>
              <ul className="text-white font-medium min-[320px]:text-xs md:text-sm">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Conocenos
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-sm min-[320px]:text-xs font-semibold text-white uppercase">
                Servicios
              </h2>
              <ul className="text-white font-medium md:text-sm min-[320px]:text-xs">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Fiscal
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Laboral
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Contabilidad
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Gestion Empresarial
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Certificados Digitales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 md:text-sm font-semibold text-white uppercase min-[320px]:text-xs">
                Emprendedores
              </h2>
              <ul className="text-white font-medium md:text-sm min-[320px]:text-xs">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Formación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Asesoramiento
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto" />
        <div className="min-[320px]:flex-col min-[320px]:items-center min-[320px]:text-center min-[320px]:w-full md:flex md:justify-between">
          <span className="text-sm text-white">
            © 2023{" "}
            <a href="https://delowork.com/" className="hover:underline">
              DELOWORK™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 min-[320px]:items-center min-[320px]:justify-center sm:justify-center">
            <a href="#" className="text-white">
              <FaInstagram size={20} fill="white" />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebookF size={20} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
