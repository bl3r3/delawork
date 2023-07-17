import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import FotoMain from "../../public/foto-main.png";
import { FormComponent } from "../../components/Form";

const EmprendedoresPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-full bg-gradient-to-b from-white via-gradient to-white">
        <div className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-4 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl ">
            Emprendedores
          </h1>
        </div>
        <div className="h-fit w-screen flex flex-col">
          <div className="flex mt-4">
            <div
              className="flex w-7/12 flex-col itmes-start justify-start pl-48
           pr-12 gap-4"
            >
              <div className="flex items-start justify-start gap-6 mt-16">
                <div className="flex flex-col itmes-start justify-start gap-2">
                  <div className="bg-gradient p-2 w-56 shadow-lg">
                    <h1 className="text-corporativo text-4xl font-bold">
                      {`"Convierte`}
                    </h1>
                  </div>

                  <div className="bg-gradient p-2 w-56 shadow-lg">
                    <h1 className="text-corporativo text-4xl font-bold">
                      {`"Tu sueño`}
                    </h1>
                  </div>

                  <div className="bg-gradient p-2 w-62 shadow-lg">
                    <h1 className="text-corporativo text-4xl font-bold">
                      {`En realidad"`}
                    </h1>
                  </div>
                </div>
              </div>
              <p className="text-justify text-corporativo">
                ¿Alguna vez has tenido una idea para un proyecto o negocio, pero
                no has sabido cómo hacerla realidad?
              </p>
              <p className="text-justify">
                En <span className="text-corporativo">DELOWORK</span> estamos
                convencidos de que la formación es la principal herramienta que
                necesitas para la consecución de tus objetivos.
              </p>
              <p>
                Como <strong>emprendedor</strong>, seguro que hay muchas ideas
                que quieres materializar y hacer realidad, pero{" "}
                <strong>¿Cómo hacerlo?</strong> Ahí es donde entran en juego
                nuestros cursos básicos. Con una formación adaptada a sus
                necesidades, puede conseguir el enfoque óptimo para hacer
                realidad su sueño. Ofrecemos <strong>formación gratuita</strong>{" "}
                para que pueda empezar a dar forma a ese sueño.
              </p>
              <p>
                Si estás interesado en mantenerte informado de todos nuestros
                próximos eventos,{" "}
                <strong> ¡síguenos en nuestras redes sociales!</strong>
              </p>
              <p className="text-corporativo text-xl">
                Es el momento de empezar a invertir en ti mismo…
              </p>
            </div>

            <div className="flex w-5/12 flex-col itmes-center justify-center">
              <Image
                src={FotoMain}
                alt="Picture of the author"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          </div>
        </div>
        <div className="w-screen h-fit flex justify-center items-center p-4 gap-16 mt-24 mb-24">
          <div className="flex flex-col w-4/12 gap-4">
            <h2 className="uppercase text-corporativo  text-center min-[320px]:text-3xl md:text-3xl ">
              Formación
            </h2>
            <div className="bg-corporativo h-2 border-2 border-corporativo" />
            <p className="text-justify mt-6 text-base">
              Los valores de DELOWORK se basan en unos principios básicos, pero
              a la vez sumamente importantes para la consecución de los
              objetivos, como son: el respeto, la aptitud de servicio, la
              escucha activa, la eficacia y la mejora continua, la cooperación y
              la sostenibilidad.
            </p>
          </div>
          <div className="flex flex-col w-4/12 gap-4">
            <h2 className="uppercase text-corporativo text-center min-[320px]:text-3xl md:text-3xl ">
              ASESORAMIENTO
            </h2>
            <div className="bg-corporativo  h-2 border-2 border-corporativo" />
            <p className="text-justify mt-6">
              Los valores de DELOWORK se basan en unos principios básicos, pero
              a la vez sumamente importantes para la consecución de los
              objetivos, como son: el respeto, la aptitud de servicio, la
              escucha activa, la eficacia y la mejora continua, la cooperación y
              la sostenibilidad.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-gradient gap-4 px-48 py-12">
          <h2 className="text-xl">¿QUIERES SABER MÁS?</h2>
          <p className="text-base">
            SI NECESITAS ASESORAMIENTO O INFORMACIÓN SOBRE CÓMO EMPRENDER, NO
            DUDES EN CONTACTAR CON NOSOTROS
          </p>
          <div className="bg-corporativo  h-2 border-2 border-corporativo" />
          <FormComponent textArea />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmprendedoresPage;
