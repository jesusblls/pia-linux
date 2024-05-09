import styles from "../style"
import {fime, logo} from '../assets'
import {footerLinks, socialMedia} from '../constants'

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex  justify-start mr-10">
          <img src={logo} alt="lg" className="w-[400px] h-[150px] object-contain" />
        </div>
        <div className="flex-1 flex justify-start mr-10">      
          <img src={fime} alt="lg" className="w-[300px] h-[120px] object-contain" />
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map ((footerLinks) => (
            <div key={footerLinks.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLinks.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLinks.links.map((Links, index) => (
                  <li key={Links.name} className={`font-poppins font-normal text-[16px] leading[24px] text-dimWhite hover:text-secondary cursor pointer${index !== footerLinks.links.length - 1 ? 'mb-4' : 'mb-0' }`}>
                    {Links.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between intems-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 FACULTAD DE INGENIERIA MECANICA Y ELECTRICA. SISTEMAS OPERATIVOS:LINUX.  
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social,index) => (
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursos-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0' }`}/>
          ))}
        </div>
      </div>
    </section>
  )


export default Footer