import { Navbar } from "./components";
import React from "react";

const comandosData = [
  {
    id: 1,
    nombre: "ls",
    descripcion: "Lista los archivos y directorios en el directorio actual.",
  },
  {
    id: 2,
    nombre: "cd",
    descripcion: "Cambia el directorio actual.",
  },
  {
    id: 3,
    nombre: "pwd",
    descripcion: "Muestra el directorio de trabajo actual.",
  },
  {
    id: 4,
    nombre: "mkdir",
    descripcion: "Crea un nuevo directorio.",
  },
  {
    id: 5,
    nombre: "touch",
    descripcion:
      "Crea un archivo vacío. Si el archivo ya existe, actualiza la fecha de modificación.",
  },
  {
    id: 6,
    nombre: "cp",
    descripcion: "Copia archivos y directorios.",
  },
  {
    id: 7,
    nombre: "mv",
    descripcion: "Mueve o renombra archivos y directorios.",
  },
  {
    id: 8,
    nombre: "rm",
    descripcion: "Elimina archivos y directorios.",
  },
  {
    id: 9,
    nombre: "cat",
    descripcion: "Concatena y muestra contenido de archivos.",
  },
  {
    id: 10,
    nombre: "less",
    descripcion: "Muestra contenido de archivos de forma paginada.",
  },
  {
    id: 11,
    nombre: "head",
    descripcion: "Muestra las primeras líneas de un archivo.",
  },
  {
    id: 12,
    nombre: "tail",
    descripcion: "Muestra las últimas líneas de un archivo.",
  },
  {
    id: 13,
    nombre: "grep",
    descripcion: "Busca patrones en archivos.",
  },
  {
    id: 14,
    nombre: "find",
    descripcion: "Busca archivos y directorios.",
  },
  {
    id: 15,
    nombre: "chmod",
    descripcion: "Cambia permisos de archivos y directorios.",
  },
  {
    id: 16,
    nombre: "chown",
    descripcion: "Cambia el propietario y el grupo de archivos y directorios.",
  },
  {
    id: 17,
    nombre: "ps",
    descripcion: "Muestra los procesos en ejecución.",
  },
  {
    id: 18,
    nombre: "top",
    descripcion: "Muestra los procesos en ejecución y su consumo de recursos.",
  },
  {
    id: 19,
    nombre: "kill",
    descripcion: "Envía una señal a un proceso para finalizarlo.",
  },
  {
    id: 20,
    nombre: "ssh",
    descripcion: "Inicia una sesión de shell segura en un host remoto.",
  },
  {
    id: 21,
    nombre: "scp",
    descripcion: "Copia archivos de forma segura entre hosts.",
  },
  {
    id: 22,
    nombre: "wget",
    descripcion: "Descarga archivos de internet.",
  },
  {
    id: 23,
    nombre: "tar",
    descripcion: "Crea, modifica o extrae archivos tar.",
  },
  {
    id: 24,
    nombre: "zip",
    descripcion: "Crea archivos zip.",
  },
  {
    id: 25,
    nombre: "unzip",
    descripcion: "Extrae archivos zip.",
  },
  {
    id: 26,
    nombre: "df",
    descripcion: "Muestra el espacio en disco disponible y utilizado.",
  },
  {
    id: 27,
    nombre: "du",
    descripcion: "Muestra el tamaño de los archivos y directorios.",
  },
  {
    id: 28,
    nombre: "free",
    descripcion: "Muestra la memoria libre y utilizada del sistema.",
  },
  {
    id: 29,
    nombre: "psql",
    descripcion: "Cliente de PostgreSQL para acceder a bases de datos.",
  },
  {
    id: 30,
    nombre: "mysql",
    descripcion: "Cliente de MySQL para acceder a bases de datos.",
  },
  {
    id: 31,
    nombre: "ssh-keygen",
    descripcion: "Genera, gestiona y convierte claves SSH.",
  },
  {
    id: 32,
    nombre: "git",
    descripcion: "Herramienta de control de versiones distribuido.",
  },
  {
    id: 33,
    nombre: "grep",
    descripcion: "Busca patrones en archivos.",
  },
  {
    id: 34,
    nombre: "sed",
    descripcion: "Editor de flujo de texto para manipular y transformar texto.",
  },
  {
    id: 35,
    nombre: "awk",
    descripcion:
      "Procesador de texto y datos que permite buscar y transformar texto.",
  },
  {
    id: 36,
    nombre: "curl",
    descripcion: "Herramienta para transferir datos desde o hacia un servidor.",
  },
  {
    id: 37,
    nombre: "tail",
    descripcion: "Muestra las últimas líneas de un archivo.",
  },
  {
    id: 38,
    nombre: "head",
    descripcion: "Muestra las primeras líneas de un archivo.",
  },
  {
    id: 39,
    nombre: "wc",
    descripcion: "Cuenta palabras, líneas y caracteres en un archivo.",
  },
  {
    id: 40,
    nombre: "diff",
    descripcion: "Muestra las diferencias entre dos archivos.",
  },
  {
    id: 41,
    nombre: "man",
    descripcion: "Muestra el manual de usuario de comandos y programas.",
  },
  {
    id: 42,
    nombre: "echo",
    descripcion: "Muestra mensajes o variables de entorno.",
  },
  {
    id: 43,
    nombre: "ln",
    descripcion: "Crea enlaces duros o simbólicos.",
  },
  {
    id: 44,
    nombre: "shutdown",
    descripcion: "Apaga o reinicia el sistema.",
  },
  {
    id: 45,
    nombre: "reboot",
    descripcion: "Reinicia el sistema.",
  },
  {
    id: 46,
    nombre: "uptime",
    descripcion:
      "Muestra el tiempo transcurrido desde que el sistema está en marcha.",
  },
  {
    id: 47,
    nombre: "history",
    descripcion: "Muestra el historial de comandos ejecutados por el usuario.",
  },
  {
    id: 48,
    nombre: "locate",
    descripcion: "Busca archivos en la base de datos de índices.",
  },
  {
    id: 49,
    nombre: "updatedb",
    descripcion: "Actualiza la base de datos de índices utilizada por locate.",
  },
  {
    id: 50,
    nombre: "passwd",
    descripcion: "Cambia la contraseña del usuario.",
  },
];

const Comandos = () => (
  <div className="bg-primary w-full overflow-hidden">
    <Navbar />
    <div className="text-center max-w-xl mx-auto">
      <h1 className="text-6xl md:text-7xl font-bold text-white">
        Comandos <br />
        más utilizados en Linux
      </h1>
      <div className="text-center">
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
        <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
      </div>
    </div>
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden antialiased">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {comandosData.map((comando) => (
                <div key={comando.id} className="relative">
                  <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <svg
                          className="fill-emerald-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                        >
                          <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                        </svg>
                      </div>
                      <time className="text-sm font-medium text-white md:w-28">
                        {comando.id}
                      </time>
                    </div>
                    <div className="text-white ml-14">
                      <span className="text-white font-bold">
                        {comando.nombre}
                      </span>{" "}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border border-slate-200 text-indigo-800 shadow ml-14 md:ml-44">
                    {comando.descripcion}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Comandos;
