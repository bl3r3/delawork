import React from "react";

export default function Accordion() {
  return (
    <div>
      <div className="w-full px-8 mx-auto md:mt-20 space-y-2 shadow lg:max-w-md">
        <details className="p-4 rounded-lg">
          <summary className="font-semibold text-corporativo">RESPETO</summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              El respeto es uno de los valores morales fundamentales que todo
              ser humano debe tener siempre presente cuando interactúa con otras
              personas.
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-2">
              Cuando respetamos a otras personas, demostramos que las valoramos
              como iguales y que estamos dispuestos a tratarlas como tales. Para
              que podamos respetar a los demás, es importante que entendamos qué
              significa el respeto y cómo puede expresarse en nuestra vida
              cotidiana.
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-2">
              El respeto es una virtud que nos permite vivir en armonía con los
              demás. Cuando nos respetamos, somos capaces de construir
              relaciones sólidas basadas en la confianza y la comprensión
              mutuas. Para mostrar respeto por los demás, es importante que
              tengamos autoestima y confianza en nosotros mismos.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold text-corporativo">
            ACTITUD DE SERVICIO
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              Creemos que todos los empleados deben tener una actitud de
              servicio a los demás, porque esto es lo que marca la diferencia
              entre el éxito y el fracaso. Para ello, debemos estar siempre
              dispuestos a ayudar a nuestros clientes y hacer que se sientan
              cómodos con nosotros.
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-2">
              El mundo ha cambiado, y también lo han hecho las expectativas de
              la gente con respecto a las empresas. Si queremos sobrevivir en
              este mercado tan competitivo,{" "}
              <strong>¡nosotros también tenemos que cambiar!</strong> Nos hemos
              dado cuenta de que tenemos que dar más valor que un simple
              producto o servicio. Tenemos que dar un toque humano. Esto
              significa que nuestros empleados tienen que ser auténticos y
              empáticos con sus clientes: la gente que vuelve una y otra vez no
              sólo está satisfecha con su producto o servicio, sino también con
              el trato recibido de sus empleados.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold text-corporativo">
            ESCUCHAR ACTIVAMENTE
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              La escucha activa es una habilidad que puede ayudarnos a conectar
              mejor con nuestros clientes y ofrecerles el mejor servicio
              posible. Significa no solo oír lo que alguien dice, sino también
              comprender sus sentimientos y necesidades.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold text-corporativo">
            EFICACIA Y MEJORA CONTINUA
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              En DELOWORK creemos en la importancia de la mejora continua.
              Sabemos que si cada día trabajamos duro y nos esforzamos por
              alcanzar nuestros objetivos, podemos llegar a ser más eficientes
              en las tareas que realizamos y más productivos en general.
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-2">
              Por eso animamos a nuestros empleados a buscar constantemente
              formas de mejorar su rendimiento y ser mejores en su trabajo. Si
              hacen de esto una prioridad, podrán contribuir eficazmente a la
              consecución de los objetivos de la empresa sin perder tiempo en
              tareas o actividades innecesarias que no aportan valor ni a
              nosotros ni a nuestros clientes.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold text-corporativo">
            COOPERACIÓN
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600 font-bold">
              Cuando trabajamos juntos, podemos conseguir cualquier cosa.
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-2">
              En{" "}
              <span className="text-corporativo font-semibold">DELOWORK</span>{" "}
              creemos que el trabajo en equipo es una parte esencial del éxito.
              Nuestro equipo se apoya mutuamente aprendiendo unos de otros,
              creando sinergias necesarias para alcanzar el éxito. Sabemos que
              cuando cooperamos unos con otros, podemos lograr grandes cosas
              juntos.
            </p>
          </div>
        </details>
        <details className="p-4 rounded-lg">
          <summary className="font-semibold text-corporativo">
            SOSTENIBILIDAD
          </summary>
          <div className="mt-3">
            <p className="text-sm leading-6 text-gray-600">
              La sostenibilidad es un objetivo empresarial. Es una forma de
              aumentar el éxito de tu empresa asegurándote de que utilizas los
              recursos de forma responsable y sostenible, lo que se traduce en
              beneficios directos para tus clientes y empleados.
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-2">
              No se trata sólo de tener conciencia ecológica, sino de ser
              inteligente en el uso de los recursos disponibles. Se trata de
              asegurarse de que las decisiones que tomas tienen efectos
              duraderos y no sólo inmediatos, así como ser consciente de lo que
              depara el futuro a tu empresa. De modo que cuando llegue el
              momento de crecer o expandirse, hayas tenido en cuenta todas las
              variables y hayas hecho planes en consecuencia.
            </p>
            <p className="text-sm leading-6 text-gray-600 mt-2">
              La sostenibilidad no es sólo una palabra de moda, es una parte
              importante del éxito a largo plazo para cualquier empresa.
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
