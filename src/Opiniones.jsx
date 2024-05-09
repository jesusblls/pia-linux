import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const Opiniones = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Navbar />
    <div className="min-w-screen min-h-screen flex items-center justify-center py-5">
      <div className="w-full px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white">
              Comunidad <br />
              en el sistema
            </h1>
            <h3 className="text-xl mb-5 text-white">
              ¿Qué opinan sus usuarios?.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Michael Creamer.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm text-justify leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Uso Linux en mi portátil personal por su libertad de
                    elección en software y personalización de interfaz, su
                    gratuidad y la capacidad de invertir en proyectos de
                    software libre. Como profesor, valoro poder redistribuir
                    equipos reconstruidos con Linux a estudiantes necesitados,
                    eliminando restricciones de licencia y fomentando la
                    igualdad digital, todo mientras enseño a mis alumnos sobre
                    solidaridad. En resumen, opto por Linux por su libertad
                    genuina y sus beneficios tanto personales como educativos.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      David Martinez
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm text-justify leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Como tecnólogo con experiencia en una variedad de sistemas
                    operativos, incluyendo Windows, MacOS, Linux y otros menos
                    comunes, he optado por Linux como mi sistema operativo
                    principal desde mediados de la década de 1990. Aunque
                    aprecio las cualidades de Linux, como su estabilidad y
                    flexibilidad, he migrado a MacOS en mis dispositivos
                    personales debido a su integración con BSD Unix y su
                    interfaz de usuario basada en NextStep. Sin embargo, sigo
                    utilizando Linux en PCs antiguas y como servidor debido a su
                    eficiencia y resistencia a la degradación con el tiempo y
                    las actualizaciones de otros sistemas operativos
                    comerciales.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Tommie Ewart.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm text-justify leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Uso exclusivamente Linux y su ecosistema desde hace más de
                    25 años, lo que ha sido fundamental para mi desarrollo
                    personal, profesional y económico. Como docente de Ciencias
                    de la Computación, valoro su naturaleza abierta y
                    documentada, que permite enseñar de manera efectiva y
                    experimentar libremente. Para estudiantes y profesionales de
                    computación, la cantidad de herramientas disponibles sin
                    costo alguno es inmensa y universalmente accesible. Además
                    de sus aspectos técnicos y económicos, aprecio el entorno
                    humano generado por los proyectos libres asociados a Linux,
                    donde la comunidad de desarrolladores resuelve problemas
                    rápidamente y permite la participación activa de los
                    usuarios en el desarrollo y la personalización del software.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Charlie Howse.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm text-justify leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Linux me proporciona una experiencia más fluida en mi
                    computadora, aprovechando mejor sus recursos en comparación
                    con Windows 7/10. Además, me ofrece la oportunidad de
                    aprender constantemente. Mientras que en Windows ya conozco
                    casi de memoria cómo realizar cualquier tarea, en Linux es
                    diferente; requiere leer, aprender y profundizar, lo cual
                    encuentro encantador y enriquecedor.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=5" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Nevada Herbertson.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm text-justify leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Empecé a trabajar con Linux en el año 2000, comenzando con
                    Slackware, una de las distribuciones más antiguas y
                    potentes, aunque también una de las más difíciles de manejar
                    en aquel entonces. A lo largo de los años, he experimentado
                    múltiples ventajas de Linux sobre Windows, como el uso
                    eficiente de recursos, la estabilidad de procesos y la
                    seguridad frente a virus. Desde programación web con PHP y
                    MySQL hasta la gestión de servidores web y de correo, he
                    utilizado Linux en todas mis empresas y proyectos,
                    automatizando tareas y disfrutando del trabajo en el
                    terminal. Incluso fuera del ámbito de la programación, sigo
                    utilizando herramientas como GIMP, Inkscape, Kdenlive y
                    Blender para editar imágenes, vídeos y animaciones en 3D,
                    todo ello en un portátil del 2012 con 7 GB de RAM, sin
                    sacrificar rendimiento ni tiempo de procesamiento. En
                    resumen, Linux me ofrece una plataforma versátil y eficiente
                    para llevar a cabo una amplia gama de tareas creativas y
                    profesionales.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Kris Stanton.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm text-justify leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Es cierto que Linux puede no ser tan común como sistema
                    operativo de escritorio, pero es ampliamente utilizado en
                    una variedad de otras áreas. Aproximadamente el 80 o 90% de
                    los servidores, incluyendo los de web y correo, funcionan
                    con Linux. Además, alrededor del 90% de las
                    supercomputadoras del mundo utilizan Linux como su sistema
                    operativo principal. Organizaciones como la NASA, el CERN,
                    Google, Facebook, Amazon y muchos ejércitos confían en Linux
                    para una variedad de aplicaciones. Incluso el tren bala
                    japonés y la mayoría de los sistemas embebidos utilizan
                    Linux. En resumen, Linux tiene una presencia significativa
                    en una amplia gama de industrias y aplicaciones, lo que
                    demuestra su versatilidad y fiabilidad.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Opiniones;
