
import styles from '../style';
import { discount, robot  } from '../assets';

const Hero = () => (

  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
  <div className={`flex-1 ${styles.flexStart} flex-col`}>
    <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
      <img src={discount} alt="discount" className="w-[28px] h-[28px]" />
      <p className={`${styles.paragraph}`}>
        <span className="text-white"> 20%</span> discount for{" "}
        <span className="text-white">one month</span> Account
      </p>
    </div>
    <div className="flex flex-row justify-between items-center w-full mt-4">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] ">
        The Next <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Generation</span><br className="sm:block hidden" />{" "}
        Payment method.
      </h1>
    </div>
  </div>
</section>

 

)


export default Hero