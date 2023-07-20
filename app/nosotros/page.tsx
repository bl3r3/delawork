import React from "react";
import Image from "next/image";

import AboutImg from "../../public/mision_about.png";
import ValoresImg from "../../public/img_valores.png";
import VisiosImg from "../../public/vision-delowork.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Delowork",
  description: "Mision, Vision y Valores de Delowork",
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className=" w-screen h-full bg-gradient-to-b from-white via-gradient to-white ">
        <section className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-4 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl">
            Nosotros
          </h1>
          <h2 className="uppercase text-white min-[320px]:text-xl md:text-3xl">
            Mision, Vision y Valores
          </h2>
        </section>
        <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8 md:px-12 md:flex-row md:items-center lg:px-48">
          <div className="flex min-[320px]:w-full flex-col justify-center items-center p-2 gap-4 md:w-7/12 md:items-start">
            <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
              Misión
            </h3>
            <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
            <p className="text-sm text-left leading-7">
              El principal objetivo de{" "}
              <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
              es colaborar, orientar y ayudar a las personas que tienen el deseo
              de emprender e iniciar un proyecto, pero no disponen de los
              conocimientos necesarios para ponerlo en marcha. Además,
              asesoramos y guiamos a las empresas para que encuentren los medios
              necesarios para desarrollar y dar forma a sus ideas de negocio,
              facilitando y simplificando las herramientas para la correcta
              creación, ampliación y toma de decisiones del proyecto empresarial
              que quieran iniciar o mejorar; siempre teniendo en cuenta la
              extensa normativa, tanto contable como legal, fiscal, laboral,
              etc., que estamos obligados a cumplir.
            </p>
            <p className="text-sm text-left leading-7">
              Creemos que nuestros clientes se merecen algo más que un servicio
              excelente. Por eso también les proporcionamos información sobre
              cómo pueden conseguir sus objetivos de una manera fácil y sin
              tener que gastar demasiado dinero ni esfuerzo. Conocemos todos los
              pasos necesarios para que nuestros clientes consigan lo que
              desean: ¡el éxito!
            </p>
          </div>
          <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2  md:w-5/12">
            <Image src={AboutImg} alt="Nosotros Delowork" />
          </div>
        </section>
        <section className="min-[320px]:w-full flex flex-col-reverse justify-between items-center gap-10 mt-8 px-8 md:px-12 md:flex-row md:items-center lg:px-48 ">
          <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2 ">
            <Image src={VisiosImg} alt="Vision Delowork" />
          </div>
          <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2 gap-4">
            <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
              Visión
            </h3>
            <div className="bg-corporativo w-full h-2 border-1 border-corporativo" />
            <p className="text-sm text-left leading-7">
              En{" "}
              <span className="text-corporativo font-semibold">DELOWORK</span>
              creemos que la cantidad de información que recibimos (de cualquier
              tipo) se convierte, en muchas ocasiones, en una vorágine de datos
              difíciles de asimilar e interpretar.
            </p>
            <p className="text-sm text-left leading-7">
              Por ello, ofrecemos nuestros servicios a todas aquellas personas
              que no saben por dónde empezar su proyecto (tanto personal como
              empresarial) y nos adaptamos a sus necesidades y entorno para
              facilitar el flujo de comunicación con los diferentes organismos
              públicos y privados.
            </p>
            <p className="text-sm text-left leading-7">
              Además, gracias a la colaboración y apoyo continuo que ofrecemos,
              cada acción que se realiza ante ellos repercute positivamente en
              sus objetivos.
            </p>
          </div>
        </section>
        <section className="min-[320px]:w-full md:w-8/12 flex flex-col justify-between items-center gap-20 mt-8 px-10 md:px-12 md:flex-row md:items-center lg:px-48">
          <div className="min-[320px]:flex flex-col justify-center items-center p-2 gap-4 md:items-start">
            <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
              Valores
            </h3>
            <div className="bg-corporativo w-full h-2 border-1 border-corporativo" />
            <p className="text-sm text-left leading-7">
              Los valores de{" "}
              <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
              se basan en unos principios básicos, pero a la vez sumamente
              importantes para la consecución de los objetivos, como son: el
              respeto, la actitud de servicio, la escucha activa, la eficacia y
              la mejora continua, la cooperación y la sostenibilidad.
            </p>
          </div>
        </section>
        <section className="min-[320px]:w-full h-auto flex flex-col justify-center items-center mt-8 px-10 md:px-12 md:flex-row md:items-center lg:px-48">
          <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2 md:items-end">
            <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
              Creamos
            </h3>
            <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
              Valor
            </h3>
            <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
              Para ti
            </h3>
          </div>
          <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2 gap-4">
            <Image src={ValoresImg} alt="Valores Delowork" />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
