import React from 'react'

const Button = ({styles}) => {
  return (
   <button type='button' className={` flexCenter flex py-4 px-6 bg-blue-gradient font-poppins font-medium text-primary outine-none text-[18px] rounded-[3px] ${styles}`}>Get Started

   </button>
  )
}

export default Button
