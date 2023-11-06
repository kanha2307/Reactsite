import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Business from './components/Business'
import Billing from './components/Billing'
import Button from './components/Button'
import Carddeal from './components/CardDeal'
import Clients from './components/Clients'
import CTA from './components/CTA'
import FeedbackCard from './components/FeedbackCard'
import Footer from './components/Footer'
import Getstarted from './components/GetStarted'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
const App = () => {
  return (
    <div className=' text-white w-full bg-primary '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
           <Billing/> 
          <Carddeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/> 
        </div>
      </div>
    </div>
  )
}

export default App
