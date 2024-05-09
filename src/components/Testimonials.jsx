import { card,discount } from "../assets";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from './FeedbackCard';
import { cmd } from "../assets";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:sb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>Linea de<br className="sm:block hidden"/>comandos. </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] text-justify`}> Esto es importante: los shells te permiten realizar cosas de una manera más optimizada de lo que una GUI (Graphical User Interface o Interfaz Gráfica de Usuario) podría permitirte hacer. Las herramientas de línea de comandos pueden ofrecer muchas opciones de configuración diferentes sin ser demasiado complejas de usar dentro de Linux. Hay una cosa acerca de Linux que las corporaciones como Microsoft, Apple y Google nunca podrán ofrecer: la libertad de hacer lo que uno quiera con su computadora. </p>
      </div>
      <div className={`flex ${styles.flexCenter}`}>
            <img src={cmd} alt="billing" className="w-[100%] h-[50%] relative z-[5]" />
            <div className='absolute z-[0] w[40%] h-[35%] top-0 bg-gradient-to-r from-indigo-500'/>
            <div className="absolute z-[1] w[80%] h-[80%] top-0 pink__gradient"/>
            <div className="absolute z-[0] w[50%] h-[50%] right-dash-20 bottom-20 blue__gradient"/>
      </div>
    </div>

    
    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div> */}
  </section>
)


export default Testimonials