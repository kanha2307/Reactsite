import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content,name,title,img}) => 
   (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[310px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} className='w-[42px] h-[27px] object-contain'/>
      <p className='font-poppins font-normal text-[18px] text-white my-10 '>{content}

      </p>
      <div className=' flex flex-col'>
        <img src={img}className='w-[48px] h-[48px] rounded-full'/>
        <div className=' flex flex-col m-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[20px] text-white '>{name}</h4>
          <p  className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>{title}</p>

          

        </div>

      </div>
      
    </div>
  )


export default FeedbackCard
