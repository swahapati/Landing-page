import { features } from "../constants";
import styles, { layout } from "../style";


const FeatureCard = ({ index, icon, title, content, }) => (
   <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
         <img
            src={icon}
            className="w-[50%] h-[50%]" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] w-[400px] ">
        {content}
      </p>
    </div>
   </div>
)


const Business = () => (
   <section className={`${styles.flexCenter} flex-row flex-auto justify-between xl:px-0 sm:px-16 px-6`}>

      <div className="w-[620px]">
         <h4 className="font-poppins font-semibold text-white xs: text-[40px] text-[30px]">
         You do the business, we’ll handle the money.
         </h4>
         <p className={`${styles.paragraph} mt-6 text-[18px] `}> 
         With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
         </p>

      </div>
      <div className="flex flex-col">
         {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
         ))}
      </div>

   </section>
  )

export default Business