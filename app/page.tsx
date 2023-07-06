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

export default function Home() {
  return (
    <>
      <Navbar />
      {/* {Hero} */}
      <div className="h-screen w-screen flex flex-col ">
        <div className="flex items-center justify-start gap-6 mt-32">
          <div className="flex flex-col  itmes-center justify-start px-10 gap-2">
            <div className="bg-gradient p-2 w-80 shadow-lg">
              <h1 className="text-corporativo text-8xl font-bold">¡Hola!</h1>
            </div>

            <div className="bg-gradient p-2 w-90 shadow-lg">
              <h2 className="text-corporativo text-4xl">
                Somos
                <span className="font-semibold"> DELOWORK</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="flex bg-gradient mt-4">
          <div className="flex w-6/12 flex-col itmes-center justify-center px-10 gap-2 ">
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              quis quod et deserunt doloribus aliquid ipsum iure quos, est
              laborum alias animi, nam quia odit, harum corporis saepe ducimus!
              Nostrum.
            </p>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              quis quod et deserunt doloribus aliquid ipsum iure quos, est
              laborum alias animi, nam quia odit, harum corporis saepe ducimus!
              Nostrum.
            </p>
            <Link href="/about">
              <p className="text-corporativo">
                Pulsa aquí para saber más sobre{" "}
                <span className="font-bold">Nosotros</span>
              </p>
            </Link>
          </div>

          <div className="flex w-6/12 flex-col itmes-center justify-center">
            <Image
              src={FotoMain}
              alt="Picture of the author"
              style={{ width: "100%", height: "350px" }}
            />
          </div>
        </div>
      </div>
      {/* {Hero end} */}

      {/* {Servicios} */}

      <div className="flex flex-col w-full h-auto bg-gradient-to-b from-white  to-gradient   items-center justify-start gap-10 px-10">
        <div className="flex w-screen px-10">
          <div className="bg-gradient p-2 w-75 shadow-lg">
            <h3 className="text-corporativo text-4xl ">Servicios</h3>
          </div>
        </div>

        <div className="flex w-full itmes-center justify-between">
          <div className="flex flex-col w-3/12 items-center justify-center gap-4 p-4">
            <Image src={FiscalImg} width={300} alt="" />
            <h5 className="text-corporativo text-2xl text-center font-semibold">
              Fiscal
            </h5>
          </div>
          <div className="flex flex-col w-3/12 items-center justify-center gap-4 p-4">
            <Image src={LaboralImg} alt="" />
            <h5 className="text-corporativo text-2xl text-center font-semibold">
              Laboral
            </h5>
          </div>
          <div className="flex flex-col w-3/12 items-center justify-center gap-4 p-4">
            <Image src={ContableImg} alt="" />
            <h5 className="text-corporativo text-2xl font-semibold text-center">
              Contabilidad
            </h5>
          </div>
          <div className="flex flex-col w-3/12 items-center justify-center gap-4 p-4">
            <Image src={GestionImg} alt="" />
            <h5 className="text-corporativo text-2xl font-semibold text-center">
              Gestion Empresarial
            </h5>
          </div>
          <div className="flex flex-col w-3/12 items-center justify-center gap-4 p-4">
            <Image src={CertificadoImg} alt="" />
            <h5 className="text-corporativo text-2xl font-semibold text-center">
              Certificados Digitales
            </h5>
          </div>
        </div>

        <div className="flex w-screen px-10 mb-12">
          <div className="bg-white p-2 w-75 shadow-2xl">
            <h3 className="text-corporativo text-4xl">¿QUIERES EMPRENDER?</h3>
          </div>
        </div>
      </div>

      {/* {Servicios end} */}

      <div className="flex flex-col background-img-custom w-full bg-gradient-to-b from-white to-gradient items-center justify-center gap-10 px-20  h-96">
        <h3 className="text-white text-3xl text-center">
          ¿Alguna vez has tenido una idea para un proyecto o negocio, pero no
          has sabido cómo hacerla realidad?
        </h3>
        <p className="text-white text-xl text-center">
          En DELOWORK estamos convencidos de que la formación es la principal
          herramienta que necesitas para la consecución de tus objetivos.
          Ofrecemos formación gratuita para que puedas empezar a dar forma a ese
          sueño.
        </p>
        <button className="text-white bg-opacity-30 border-white border-2 text-xl bg-white rounded-3xl p-2">
          Saber mas
        </button>
      </div>

      {/* {Contacto} */}

      <Footer />
    </>
  );
}
