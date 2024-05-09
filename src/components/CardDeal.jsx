import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Encuentra una forma <br className="sm:block hidden"/> nueva de trabajar.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>Los programas en base a Linux - ofimática, navegación web, etc.- son compatibles con la inmensa mayoría de los programas Windows, pero también con la mayoría de los terminales móviles - iPhone, Blackberry y otros PDA- . Y si no lo son, la comunidad de usuarios sabrá indicarle el programa que hay que instalar para que la compatibilidad sea posible o sabrá crear este programa si todavía no existe. Ésta es la fuerza de los sistemas operativos libres, en mejoramiento constante en función a las necesidades de los usuarios.</p>
        {/* <Button styles="mt-10"/> */}
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
)


export default CardDeal