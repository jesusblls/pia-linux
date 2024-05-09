import { Navbar } from "./components";

const versionesData = [
  {
    title: "Ubuntu",
    imageSrc: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2014/02/31472-todo-ubuntu-que-es-que-podemos-esperar-este.jpg?tf=3840x",
    description:
      "Ubuntu es un sistema operativo basado en Linux desarrollado por la empresa Canonical y la comunidad. Es un sistema operativo de código abierto y gratuito para computadoras personales.",
    url: "https://ubuntu.com/"
  },
  {
    title: "Debian",
    imageSrc: "https://www.strsistemas.com/sites/default/files/debian.jpg",
    description:
      "Debian es una distribución de Linux que se destaca por su estabilidad, confiabilidad y su amplia selección de paquetes de software. Es una de las distribuciones más antiguas y ha servido como base para muchas otras distribuciones populares.",
    url: "https://www.debian.org/index.es.html"
  },
  {
    title: "Kali Linux",
    imageSrc: "https://www.linuxadictos.com/wp-content/uploads/kali-linux-1.jpg",
    description:
      "Kali Linux es una distribución especializada en seguridad informática y pruebas de penetración. Viene preinstalada con una amplia gama de herramientas de hacking y análisis forense, lo que la hace popular entre los profesionales de la seguridad cibernética y los entusiastas del hacking ético.",
    url: "https://www.kali.org/"
  },
  {
    title: "Fedora",
    imageSrc: "https://www.marksei.com/wp-content/uploads/2015/10/Fedora-Logo.jpg",
    description:
      "Fedora es una distribución de Linux desarrollada por la comunidad y respaldada por Red Hat. Se destaca por su enfoque en la innovación y la adopción temprana de nuevas tecnologías. Es conocida por ofrecer un sistema operativo estable y seguro, con un ciclo de lanzamiento regular y soporte a largo plazo.",
    url: "https://fedoraproject.org/es/"
  }
];

const Version = ({ title, imageSrc, description, url }) => (
  <div className="bg-white rounded-lg border p-4">
    <img
      src={imageSrc}
      alt="Version Image"
      className="w-full h-48 rounded-md object-cover"
    />
    <div className="px-1 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-1 py-4">
      <a href={url} className="text-blue-500 hover:underline">
        Ver más
      </a>
    </div>
  </div>
);

const Versiones = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Navbar />
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white">
        Versiones <br />
        de Linux
      </h1>
      <h3 className="text-xl mb-5 text-white">¿Para qué son?</h3>
      <div className="text-center">
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
      </div>
    </div>
    <div className="flex items-center justify-center py-24">
      <div className="container mx-auto mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {versionesData.map((version, index) => (
            <Version key={index} {...version} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Versiones;
