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
import Link from "next/link";
import ScrollToTop from "../../components/ScrollTop";

export const metadata: Metadata = {
  title: "Servicios | Delowork",
  description: "Servicios de Delowork",
};

const ServicesPage = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar color="#fff" textColor="#0052A1" />
      <section className="w-screen h-full bg-gradient-to-b from-white via-gradient to-white">
        <div className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-4 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl ">
            Servicios
          </h1>
        </div>
      </section>
      <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8  md:flex-row md:items-center max-[1200px]:px-14 min-[1200px]:px-48">
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
      <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8  md:flex-row md:items-center max-[1200px]:px-14 min-[1200px]:px-48">
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
            siempre intentamos brindar a nuestros clientes un servicio de
            calidad. Ofrecemos asesoramiento laboral en colaboración con una de
            las mejores asesorías especializadas en el ámbito laboral.
          </p>
          <p>
            Nos encargamos de realizar todos los trámites cotidianos. Como
            servicios más destacados te ofrecemos:
          </p>
          <ul className="px-10">
            <li className="list-disc">
              Afiliación a la Seguridad Social: Trabajadores, autónomos y
              empresas
            </li>
            <li className="list-disc">Nóminas y Seguros Sociales</li>
            <li className="list-disc">
              Costes salariales: Análisis e informes de costes salariales
            </li>
            <li className="list-disc">Bajas y despidos</li>
            <li className="list-disc">
              Gestión de conflictos con trabajadores
            </li>
            <li className="list-disc">
              Inspección de trabajo y Seguridad Social
            </li>
            <li className="list-disc">Pensiones y prestaciones</li>
          </ul>
        </div>
      </section>
      <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8  md:flex-row md:items-center max-[1200px]:px-14 min-[1200px]:px-48">
        <div className="flex min-[320px]:w-full px-4 flex-col justify-center items-center p-2 gap-4 md:w-8/12 md:items-start">
          <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
            Contabilidad
          </h3>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
          <p className="text-sm text-left leading-7">
            <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
            ofrece un servicio 360° en la gestión contable de tu empresa o
            negocio. En todo momento nos encargamos de contabilizar y controlar
            toda la actividad económica que realices. La creación de estos
            registros contables se convertirá en el punto de partida esencial
            para cumplir con tus obligaciones fiscales, analizar y recibir
            asesoramiento acerca del estado de tus activos, y obtener una
            orientación clara sobre cómo dirigir tu empresa.
          </p>
          <p className="text-sm text-left leading-7">
            Gracias a un amplio dominio de todo el proceso contable y una
            evaluación exhaustiva de las transacciones y conexiones diarias
            dentro de las operaciones de nuestros clientes, examinamos
            minuciosamente el estado financiero de la empresa y anticipamos
            posibles desviaciones con el objetivo de rectificar, progresar y
            mejorar las perspectivas futuras de tu negocio, brindando una base
            sólida para alcanzar el éxito.
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
      <div className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8  md:flex-row md:items-center max-[1200px]:px-14 min-[1200px]:px-48">
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
      <section className="w-full min-[320px]:px-4 flex flex-col justify-between items-center  gap-10 mt-8  md:flex-row md:items-center max-[1200px]:px-14 min-[1200px]:px-48 mb-10">
        <div className="flex min-[320px]:w-full px-4 flex-col justify-center items-center p-2 gap-4 md:w-8/12 md:items-start">
          <h3 className="uppercase text-corporativo text-4xl font-bold mb-3">
            CERTIFICADO DIGITAL
          </h3>
          <div className="bg-corporativo w-full h-2 border-2 border-corporativo" />
          <p className="text-sm text-left leading-7">
            El certificado digital es un sistema que les permite verificar tu
            identidad de forma fiable y segura a los diferentes organismos
            públicos a la hora de realizar y/o firmar documentos electrónicos
            con validez legal, evitando la necesidad de impresiones, envíos
            físicos y quizás largas filas u horas de espera al otro lado del
            teléfono. Ahorra tiempo y contribuye al cuidado del medio ambiente
            con esta alternativa sustentable. Con el certificado digital, tus
            datos personales y transacciones estarán protegidos mediante
            robustos protocolos de encriptación.
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

      <section className="flex flex-col background-img-custom-services w-full items-center justify-start gap-10 min-[320px]:p-12 md:px-32 lg:h-[25rem] lg:gap-12 h-fit">
        <h3 className="text-white min-[320px]:text-xl md:text-3xl text-center font-bold">
          ¿QUIERES TENER MÁS INFORMACIÓN SOBRE NUESTROS SERVICIOS?
        </h3>
        <p className="text-white min-[320px]:text-xl md:text-xl text-center">
          Ponte en contacto con nosotros rellenando el siguiente formulario y
          estaremos encantados de poder ayudarte
        </p>
        <Link href="/contacto">
          <button className="text-white bg-opacity-20 border-white border-2 text-2xl bg-white rounded-3xl p-2">
            Contáctanos
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
