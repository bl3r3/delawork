import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import FiscalImg from "../../public/fiscal.png";
import LaboralImg from "../../public/laboral.png";
import ContableImg from "../../public/contabilidad.png";
import Empresa from "../../public/gestion-empresarial.png";
import Certificado from "../../public/certificacion-digital.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Delowork",
  description: "Servicios de Delowork",
};

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <section className="w-screen h-full bg-gradient-to-b from-white via-gradient to-white">
        <div className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-4 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl ">
            Servicios
          </h1>
        </div>
      </section>
      <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8 md:px-12 md:flex-row md:items-center lg:px-48">
        <div className="flex min-[320px]:w-full flex-col justify-center items-center p-2 gap-4 md:w-8/12 md:items-start">
          <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
            Fiscal
          </h3>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
          <p className="text-sm text-left leading-7">
            Los servicios fiscales de{" "}
            <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
            pueden ayudarle a controlar sus impuestos para que no tenga que
            preocuparse por ellos. Ofrecemos una amplia gama de servicios, desde
            la planificación fiscal básica hasta el servicio completo de
            preparación y presentación de impuestos. Estamos aquí para ayudarle
            a sacar el máximo provecho de sus impuestos con nuestro equipo de
            expertos que saben cómo maximizar sus deducciones y minimizar su
            responsabilidad.
          </p>
          <p className="text-sm text-left leading-7">
            Trabajamos con todo tipo de individuos, incluyendo aquellos que
            trabajan por cuenta propia, son dueños de un pequeño negocio, o
            tienen propiedades de alquiler. Nuestro objetivo es asegurarnos de
            que usted obtenga el mayor rendimiento posible de sus inversiones,
            pagando al mismo tiempo la menor cantidad posible de impuestos.
            Nuestro equipo revisará toda su información con un peine de dientes
            finos para que podamos asegurarnos de que hasta el último dólar se
            maximiza.
          </p>
          <p className="text-sm text-left leading-7">
            Sabemos que la temporada de impuestos puede ser estresante para
            muchas personas, especialmente si sienten que no tienen suficientes
            conocimientos sobre impuestos (o si simplemente no disfrutan
            haciendo sus propios impuestos). Por eso ofrecemos nuestros
            servicios:{" "}
            <strong>¡para que podamos ocuparnos de todo por usted!</strong>{" "}
            Nuestros expertos prepararán sus impuestos para que no queden
            preguntas sin responder ni cabos sueltos. También le
            proporcionaremos instrucciones claras junto con cualquier documento
            que sea necesario para la presentación electrónica.
          </p>
        </div>
        <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2  md:w-4/12">
          <Image src={FiscalImg} width="400" alt="Servicio Fiscal Delowork" />
        </div>
      </section>
      <section className="min-[320px]:w-full flex flex-col-reverse justify-between items-center gap-10 mt-8 px-8 md:px-12 md:flex-row md:items-center lg:px-48">
        <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2  md:w-4/12">
          <Image src={LaboralImg} width="400" alt="Servicio Laboral Delowork" />
        </div>
        <div className="flex min-[320px]:w-full flex-col justify-center items-center p-2 gap-4 md:w-8/12 md:items-start">
          <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
            Laboral
          </h3>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
          <p className="text-sm text-left leading-7">
            En <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
            creemos que la cantidad de información que recibimos (de cualquier
            tipo) se convierte, en muchas ocasiones, en una vorágine de datos
            difíciles de asimilar e interpretar. Por ello, ofrecemos nuestros
            servicios a todas aquellas personas que no saben por dónde empezar
            su proyecto (tanto personal como empresarial) y nos adaptamos a sus
            necesidades y entorno para facilitar el flujo de comunicación con
            los diferentes organismos públicos y privados. Para ello,
            simplificamos el entendimiento y la comprensión de los objetivos de
            nuestros clientes. Además, gracias a la colaboración y apoyo
            continuo que ofrecemos, cada acción que se realiza ante ellos
            repercute positivamente en sus objetivos.
          </p>
        </div>
      </section>
      <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8 md:px-12 md:flex-row md:items-center lg:px-48">
        <div className="flex min-[320px]:w-full px-4 flex-col justify-center items-center p-2 gap-4 md:w-8/12 md:items-start">
          <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
            Contabilidad
          </h3>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
          <p className="text-sm text-left leading-7">
            Los servicios fiscales de{" "}
            <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
            pueden ayudarle a controlar sus impuestos para que no tenga que
            preocuparse por ellos. Ofrecemos una amplia gama de servicios, desde
            la planificación fiscal básica hasta el servicio completo de
            preparación y presentación de impuestos. Estamos aquí para ayudarle
            a sacar el máximo provecho de sus impuestos con nuestro equipo de
            expertos que saben cómo maximizar sus deducciones y minimizar su
            responsabilidad.
          </p>
          <p className="text-sm text-left leading-7">
            Trabajamos con todo tipo de individuos, incluyendo aquellos que
            trabajan por cuenta propia, son dueños de un pequeño negocio, o
            tienen propiedades de alquiler. Nuestro objetivo es asegurarnos de
            que usted obtenga el mayor rendimiento posible de sus inversiones,
            pagando al mismo tiempo la menor cantidad posible de impuestos.
            Nuestro equipo revisará toda su información con un peine de dientes
            finos para que podamos asegurarnos de que hasta el último dólar se
            maximiza.
          </p>
        </div>
        <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2  md:w-4/12">
          <Image
            src={ContableImg}
            width="400"
            alt="Servicio de Contabilidad Delowork"
          />
        </div>
      </section>
      <div className="min-[320px]:w-full flex flex-col-reverse justify-between items-center gap-10 mt-8 px-8 md:px-12 md:flex-row md:items-center lg:px-48">
        <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2  md:w-4/12">
          <Image
            src={Empresa}
            width="400"
            alt="Servicio de Gestion Empresarial Delowork"
          />
        </div>
        <section className="flex min-[320px]:w-full px-4 flex-col justify-center items-center p-2 gap-4 md:w-8/12 md:items-start">
          <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
            GESTIÓN EMPRESARIAL
          </h3>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
          <p className="text-sm text-left leading-7">
            En <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
            creemos que su negocio es único, y nos esforzamos por ofrecer un
            servicio que lo refleje. Sabemos que tiene muchas opciones en el
            mercado a la hora de elegir un socio que le ayude a gestionar su
            empresa. Estamos seguros de que nuestros servicios marcarán la
            diferencia en su cuenta de resultados. Nuestros servicios para la
            gestión empresarial son la mejor forma de asegurarse de que su
            negocio funciona a la perfección. Nos ocupamos de todos los
            detalles, para que usted pueda centrarse en lo esencial.
          </p>
        </section>
      </div>
      <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8 md:px-12 md:flex-row md:items-center lg:px-48 mb-10">
        <div className="flex min-[320px]:w-full px-4 flex-col justify-center items-center p-2 gap-4 md:w-8/12 md:items-start">
          <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
            CERTIFICADO DIGITAL
          </h3>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
          <p className="text-sm text-left leading-7">
            Los servicios fiscales de{" "}
            <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
            pueden ayudarle a controlar sus impuestos para que no tenga que
            preocuparse por ellos. Ofrecemos una amplia gama de servicios, desde
            la planificación fiscal básica hasta el servicio completo de
            preparación y presentación de impuestos. Estamos aquí para ayudarle
            a sacar el máximo provecho de sus impuestos con nuestro equipo de
            expertos que saben cómo maximizar sus deducciones y minimizar su
            responsabilidad.
          </p>
        </div>
        <div className="min-[320px]:w-full flex flex-col justify-center items-center p-2  md:w-4/12">
          <Image
            src={Certificado}
            width="400"
            alt="Servicios Certificados Digitales Delowork"
          />
        </div>
      </section>

      <section className="flex flex-col background-img-custom-services w-full items-center justify-start gap-10 min-[320px]:p-12 md:px-32 h-fit">
        <h3 className="text-white min-[320px]:text-xl md:text-3xl text-center ">
          ¿QUIERES TENER MÁS INFORMACIÓN SOBRE NUESTROS SERVICIOS?
        </h3>
        <p className="text-white min-[320px]:text-xl md:text-xl text-center">
          Ponte en contacto con nosotros rellenando el siguiente formulario y
          estaremos encantados de poder ayudarte
        </p>
        <button className="text-white bg-opacity-30 border-white border-2 text-xl bg-white rounded-3xl p-2">
          Contactanos
        </button>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
