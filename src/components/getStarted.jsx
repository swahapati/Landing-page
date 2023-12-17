import styles from "../style";
import { arrowUp } from "../assets";


const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[120px] h-[120px] bg-blue-gradient rounded-full flex-col p-[2px]`}>
      <div className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] flex-col rounded-full`}>
      <div className={`${styles.flexStart} flex-row items-center `}>
        <p className="font-poppins text-[20px] text-gradient mr-3">
          <span>Get</span>
        </p>
        <img src={arrowUp} className="w-[24px] h-[24px]  "/>
        </div>
        <p className="font-poppins text-[20px] text-gradient ">
        <span> Started</span>
        </p>
      </div>
    </div>
)

export default GetStarted