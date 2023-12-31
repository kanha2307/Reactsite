import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'
import { features } from '../constants'
const FeatureCard = ({icon,title,index,content})=>{
return(

  <div className={`flex flex-row rounded-[20px] p-6 ${index!=features.length-1?"mb-6":"mb-0"} feature-card items-center left-2 `}>
     <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>

        <img src={icon} className='object-contain h-[50%] w-[50%]'/>
     </div>
     <div className='flex item-center flex-col flex-1 ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p  className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
     </div>
 </div>
   )

}
const Business = () => {
  return (
  <section id="features" className={layout.section }>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the business,<br className='sm:block hidden'/> we'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>with the right credit card, you can improve your financial life by building credit,earning rewards and saving money. But with hundreds of credit card on the market.</p>
      <Button styles="mt-10"/>
    </div>
    <div className={`${layout.sectionImg} flex-col `}>
      {features.map((feature,index)=>(
         <FeatureCard key={feature.id} {...feature} index ={index}/>
      ))}
    </div>

  </section>
  )
}

export default Business
