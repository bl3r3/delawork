import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FotoMain from "../public/foto-main.png";
import FiscalImg from "../public/fiscal.png";
import LaboralImg from "../public/laboral.png";
import ContableImg from "../public/contabilidad.png";
import GestionImg from "../public/gestion-empresarial.png";
import CertificadoImg from "../public/certificacion-digital.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delowork",
  description: "Empresa de servicios contables y fiscales",
};

export default function Home() {
  return (
    <>
      <Navbar />
      {/* {Hero} */}
      <section className="min-[320px]:h-fit md:h-fit lg:h-screen w-screen flex flex-col">
        <div className="flex min-[320px]:px-12 items-center justify-start gap-6 mt-32 md:px-24 lg:px-48">
          <div className="flex flex-col min-[320px]:items-center md:items-start justify-start px-4 gap-2">
            <div className="bg-gradient p-2 min-[320px]:w-52 md:w-80 shadow-lg">
              <h1 className="text-corporativo md:text-8xl font-bold min-[320px]:text-6xl">
                ¡Hola!
              </h1>
            </div>

            <div className="bg-gradient  sm:w-90 p-2 shadow-lg">
              <h2 className="text-corporativo md:text-4xl min-[320px]:text-2xl">
                Somos
                <span className="font-semibold"> DELOWORK</span>
              </h2>
            </div>
          </div>
        </div>

        <div className=" flex min-[320px]:flex-col md:flex-row">
          <div className="flex w-5/12 flex-col itmes-center justify-center md:pl-24 lg:pl-48  gap-6 text-lg min-[320px]:px-12 min-[320px]:w-full min-[320px]:mt-8 md:mt-0 md:gap-2">
            <p className="text-justify lg:pr-32">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              quis quod et deserunt doloribus aliquid ipsum iure quos, est
              laborum alias animi, nam quia odit, harum corporis saepe ducimus!
              Nostrum.
            </p>
            <p className="text-justify lg:pr-32">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              quis quod et deserunt doloribus aliquid ipsum iure quos, est
              laborum alias animi, nam quia odit, harum corporis saepe ducimus!
              Nostrum.
            </p>
            <Link href="/nosotros">
              <p className="text-corporativo">
                Pulsa aquí para saber más sobre{" "}
                <span className="font-bold">Nosotros</span>
              </p>
            </Link>
          </div>

          <div className="flex w-7/12 flex-col itmes-center justify-center img-home">
            <Image
              src={FotoMain}
              alt="Picture of the author"
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        </div>
      </section>
      {/* {Hero end} */}

      {/* {Servicios} */}

      <section className="flex flex-col w-full h-auto bg-gradient-to-b from-white  to-gradient   items-center justify-start gap-10 min-[320px]:px-12 px-48">
        <div className="flex w-screen min-[320px]:px-12 min-[320px]:justify-center min-[320px]:mt-12 px-48 ">
          <div className="bg-gradient p-2 w-75 shadow-lg">
            <h3 className="text-corporativo text-4xl ">Servicios</h3>
          </div>
        </div>

        <div className="flex min-[320px]:flex-col sm:flex-row sm:flex-wrap md:flex-row md:flex-wrap lg:flex-nowrap w-full itmes-center justify-between">
          <div className="flex min-[320px]:w-full sm:w-6/12 flex-col md:w-3/12 items-center justify-center gap-4 p-4">
            <Image src={FiscalImg} width={300} alt="" />
            <h5 className="text-corporativo text-2xl min-[320px]:text-xl text-center font-semibold">
              Fiscal
            </h5>
          </div>
          <div className="flex min-[320px]:w-full sm:w-6/12  flex-col md:w-3/12 items-center justify-center gap-4 p-4">
            <Image src={LaboralImg} alt="" />
            <h5 className="text-corporativo text-2xl min-[320px]:text-xl text-center font-semibold">
              Laboral
            </h5>
          </div>
          <div className="flex min-[320px]:w-full sm:w-6/12 flex-col md:w-3/12 items-center justify-center gap-4 p-4">
            <Image src={ContableImg} alt="" />
            <h5 className="text-corporativo text-2xl min-[320px]:text-xl font-semibold text-center">
              Contabilidad
            </h5>
          </div>
          <div className="flex min-[320px]:w-full sm:w-6/12 flex-col md:w-3/12 items-center justify-center gap-4 p-4">
            <Image src={GestionImg} alt="" />
            <h5 className="text-corporativo text-2xl min-[320px]:text-xl font-semibold text-center">
              Gestion Empresarial
            </h5>
          </div>
          <div className="flex min-[320px]:w-full sm:w-6/12 flex-col md:w-3/12 items-center justify-center gap-4 p-4">
            <Image src={CertificadoImg} alt="" />
            <h5 className="text-corporativo text-2xl min-[320px]:text-xl font-semibold text-center">
              Certificados Digitales
            </h5>
          </div>
        </div>

        <div className="flex w-screen min-[320px]:px-12 px-48 mb-12">
          <div className="bg-white p-2 w-75 shadow-2xl">
            <h3 className="text-corporativo text-4xl min-[320px]:text-center md:text-left">
              ¿QUIERES EMPRENDER?
            </h3>
          </div>
        </div>
      </section>

      {/* {Servicios end} */}

      <section className="flex flex-col background-img-custom w-full bg-gradient-to-b from-white to-gradient items-center justify-center gap-10 lg:px-48 min-[320px]:px-12 min-[320px]:pt-12 h-fit">
        <h3 className="text-white text-3xl text-center min-[320px]:text-lg">
          ¿Alguna vez has tenido una idea para un proyecto o negocio, pero no
          has sabido cómo hacerla realidad?
        </h3>
        <p className="text-white text-xl text-center min-[320px]:text-md">
          En DELOWORK estamos convencidos de que la formación es la principal
          herramienta que necesitas para la consecución de tus objetivos.
          Ofrecemos formación gratuita para que puedas empezar a dar forma a ese
          sueño.
        </p>
        <button className="text-white bg-opacity-30 border-white border-2 text-xl bg-white rounded-3xl p-2 mb-12">
          Saber mas
        </button>
      </section>

      {/* {Contacto} */}

      <Footer />
    </>
  );
}
