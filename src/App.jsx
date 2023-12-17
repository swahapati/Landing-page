import styles from './style';
import {Hero,Navbar,CTA,Stats,Business } from './components/index';
 

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexstart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={` ${styles.paddingX} ${styles.flexstart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <CTA/>   
      </div>
    </div>
     
  </div>
);

export default App