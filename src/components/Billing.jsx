import { apple,bill,git,google } from '../assets';
import styles, {layout} from '../style';
const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={git} alt="billing" className="w-[50%] h-[100%] relative z-[5]" />


      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}> 
        <h2 className={styles.heading2}>Controla <br className='sm:block hidden'/> todo lo que haces.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
          Con Linux, el usuario tiene el control total del sistema operativo. Puede instalar, desinstalar y modificar cualquier aspecto del sistema. Además, Linux es un sistema operativo de código abierto, lo que significa que cualquier persona puede modificar su código fuente y distribuirlo libremente.
        </p>
        {/* <div className='flex flex-row flex-wrap sm>mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="apple_store" className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div> */}
      </div>
    </section>
  )


export default Billing