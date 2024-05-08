import styles from "../style";
import { discount,robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col px-16 ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                <img src={discount} alt="discount"  className="w-[32px] h-[32px] "/>
                <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white"> M1-M3
                    </span> Martes {""}
                    <span className="text-white"> Sistenas
                    </span> Operativos
                </p>
           </div>
           
           <div className=" flex flex-row justify-between items-center w-full">
            <h1 className=" flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] ss:leading[75px]">
               PIA <br className="sm:block hidden"/> {" "}
               <span className=" text-gradient"> Linux
               </span> {""}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
                <GetStarted />  
            </div>
           </div>

            <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] ss:leading[75px] w-full">
            Un sistema versátil.</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad est delectus beatae eos veritatis aspernatur laborum debitis inventore tempora nisi eveniet asperiores cumque, similique distinctio sapiente labore numquam, quia quam?.</p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter}`}>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            <div className='absolute z-[0] w[40%] h-[35%] top-0 bg-gradient-to-r from-indigo-500'/>
            <div className="absolute z-[1] w[80%] h-[80%] top-0 pink__gradient"/>
            <div className="absolute z-[0] w[50%] h-[50%] right-dash-20 bottom-20 blue__gradient"/>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
            <GetStarted />
        </div>

    </section>
)


export default Hero