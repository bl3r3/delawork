import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Emprendedores from "../../public/emprendedore-delowork.png";
import { FormComponent } from "../../components/Form";

import { Metadata } from "next";
import ScrollToTop from "../../components/ScrollTop";

export const metadata: Metadata = {
  title: "Emprendedores | Delowork",
  description: "Asesoramiento y formación de emprendedores en Delowork",
};

const EmprendedoresPage = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar color="#fff" textColor="#0052A1" />
      <main className="w-screen h-full bg-gradient-to-b from-white via-gradient to-white">
        <section className="w-screen h-40 flex flex-col justify-center items-center bg-corporativo p-5 gap-2 mt-24">
          <h1 className="uppercase text-white min-[320px]:text-3xl md:text-5xl ">
            Emprendedores
          </h1>
        </section>
        <section className="min-[320px]:w-full h-fit w-screen flex flex-col">
          <div className="flex mt-4">
            <div className="min-[320px]:w-full md:w-[45rem] lg:w-[60rem] min-[320px]:p-12 flex flex-col itmes-start justify-start min-[1200px]:pl-48 max-[1200px]:pl-8  md:pr-12 gap-4">
              <div className="min-[320px] flex items-start justify-start gap-6 mt-16">
                <div className="flex flex-col itmes-start justify-start gap-2">
                  <div className="bg-gradient p-2 w-62 shadow-lg">
                    <h1 className="text-corporativo text-4xl font-bold uppercase">
                      {`"Convierte`}
                    </h1>
                  </div>

                  <div className="bg-gradient p-2 w-56 shadow-lg">
                    <h1 className="text-corporativo text-4xl font-bold uppercase">
                      {`Tu sueño`}
                    </h1>
                  </div>

                  <div className="bg-gradient p-2 w-62 shadow-lg">
                    <h1 className="text-corporativo text-4xl font-bold uppercase">
                      {`En realidad"`}
                    </h1>
                  </div>
                </div>
              </div>
              <p className="text-left text-corporativo font-bold mt-6">
                ¿Alguna vez has tenido una idea para un proyecto o negocio, pero
                no has sabido cómo hacerla realidad?
              </p>
              <p className="text-left">
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
            <div className="flex md:w-6/12 lg:w-[45rem] flex-col itmes-center justify-center  img-emprendedores md:pr-28">
              <Image
                src={Emprendedores}
                alt="emprendedores delowork"
                style={{ width: "100%", height: "500px" }}
              />
            </div>
          </div>
        </section>
        <section className="min-[320px]:w-full min-[320px]:flex-col  min-[320px]:p-12  w-screen h-fit sm:flex-row flex justify-center min-[1200px]:px-48 max-[1200px]:px-8 gap-16 min-[320px]:mt-6 mt-24 mb-24 md:items-start">
          <div className="min-[320px]:w-full flex flex-col w-4/12 gap-4">
            <h2 className="uppercase text-corporativo  text-center min-[320px]:text-3xl md:text-3xl">
              Formación
            </h2>
            <div className="bg-corporativo h-2 border-2 border-corporativo" />
            <p className="text-left mt-6 text-base">
              La formación es esencial para el crecimiento y el éxito de
              cualquier negocio o empresa, ya que te aporta una serie de
              herramientas tales como: mejora de habilidades y conocimientos,
              rápida adaptación al cambio, incremento de la productividad, toma
              de decisiones más eficiente y mayor capacidad de innovación. En
              resumen, la formación no solo es una inversión en el crecimiento y
              el éxito a largo plazo de un negocio, sino que también es esencial
              para mantenerse competitivo en un entorno en constante evolución.
            </p>
          </div>
          <div className="min-[320px]:w-full flex flex-col w-4/12 gap-4">
            <h2 className="uppercase text-corporativo text-center min-[320px]:text-3xl md:text-3xl ">
              ASESORAMIENTO
            </h2>
            <div className="bg-corporativo  h-2 border-2 border-corporativo" />
            <p className="text-left mt-6">
              {`
              En cada aspecto de tu negocio, el "asesoramiento" es la clave para
              alcanzar el éxito. En DELOWORK ofrecemos un asesoramiento completo
              en temas contables, fiscales, laborales y de gestión empresarial.
              Confía en nosotros para optimizar tu operativa diaria y maximizar
              tus resultados. Únete a nuestra familia de clientes satisfechos y
              alcanza tus objetivos con confianza.
              `}
            </p>
          </div>
        </section>
        <section className="min-[320px]:w-full min-[320px]:p-12 min-[320px]:text-center  flex flex-col bg-gradient gap-4 min-[1200px]:px-48 max-[1200px]:px-8 py-12 md:text-left">
          <h2 className="text-xl">¿QUIERES SABER MÁS?</h2>
          <p className="text-base">
            SI NECESITAS ASESORAMIENTO O INFORMACIÓN SOBRE CÓMO EMPRENDER, NO
            DUDES EN CONTACTAR CON NOSOTROS
          </p>
          <div className="bg-corporativo  h-2 border-2 border-corporativo" />
          <FormComponent textArea />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EmprendedoresPage;
