import { stats } from "../constants"
import styles from "../style"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6  gap-x-8`}>
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-row items-center gap-x-4">
          <h4 className="font-poppins font-semibold text-white xs: text-[40px] text-[30px] uppercase">
            {stat.value}
          </h4>
          <h5 className="font-poppins text-gradient xs: text-[20px] text-[15px] uppercase">
            {stat.title}
          </h5>
          {/* <div className="border-2  h-[40px] border-white"/> */}
        </div>
      ))}

    </section>
)


export default Stats