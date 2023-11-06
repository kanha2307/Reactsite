import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks,socialMedia } from '../constants'
const Footer = () => 
   (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>

        <img src={logo} className=' w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} max-w-[310px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex-[1.5] flex-row flex w-full justify-between flex-wrap md:mt-0 mt-10'>
          {
            footerLinks.map((footerLink)=>(
               <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                  <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
                  
                  <ul className=' list-none mt-4'>
                  {
                    
                      footerLink.links.map((Link,index) => (
                        <li key={Link.name} className={`font-poppins font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${index!=footerLink.links.length-1?"mb-4":"mb-0"}`}>{Link.name}</li>
                      ))
                    }
                  </ul>
               </div> 
                          
               ))
          }

        </div>
      </div>
      <div className='flex justify-between items-center w-full md:flex-row  flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-normal text-center  text-[18px] leading-[27px] text-white'>2021 Hoobank. All Rights Reserved.</p>
        <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((social,index)=>(
              <img className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length-1?"mr-6":"mr-0"}`}key={social.id} src={social.icon}/>
            ))}
        </div>
      </div>
    </section>
  )


export default Footer
