import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles ,{ layout } from '../style'
const CardDeal = () => 
 (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few steps.

        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores commodi perferendis tenetur ipsum suscipit libero quibusdam eligendi doloremque excepturi expedita!
        </p>
        <Button styles="mt-10"/>

      </div>
      <div className={layout.sectionImg}>
        <img src= {card}className='w-[100%] h-[100%]'/>


      </div>
    </section>
  )


export default CardDeal
