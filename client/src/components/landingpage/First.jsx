import React, { useState } from 'react'
import '../../styles/First.css'
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function First() {

    const [close,setClose]=useState(false)
    const [PerClose,setPerClose]=useState(false)
    useEffect(() => {
       setTimeout(() => {
        setClose(true)
       }, 1500);
       setTimeout(() => {
        setPerClose(true)
       }, 4000);
    }, [])


    const listings = [
        {
          id: 1,
          image:"https://5.imimg.com/data5/SELLER/Default/2021/6/SG/EC/XZ/33343279/img-1140.JPG"
        },
        {
            id: 2,
            image:"https://i0.wp.com/www.regnews.in/wp-content/uploads/2023/06/open-plots.jpg?fit=1000%2C384&ssl=1"

          },
          {
            id: 3,
            image:"https://lh5.googleusercontent.com/proxy/lSMB0jWc-wfbyiSoXoeyP-Stba9kGA9L7A4V_EhGRegcr9T8mqnq_i8OpX_EV1lVU6L4JHPgWQ3iCU-mkyz5569dqpIDs3guQtySGZE7_2bYp3JPkkxGadIuek4MpFRNwlaEt5-NkD0L2h1hA6SnPPms-GxhcoqJmi5YVd8G-U3C80f8PcynP5XpV-kFk3KIjgiH6yBNpCcOzLz0evQLAHhjxpEug6lrfsJPquvt954djAE"
          },
        
    ]
  return (
    <>
    {PerClose?(null):(
      <div className={`first_main ${close}`}>
      <motion.div
           initial={{ y: '55vh' }} // Start off-screen at the bottom
           animate={{ y: 0 }} // Slide to the original position (0)
           exit={{ y: '100%' }} // Exit by sliding back to the bottom
           transition={{ type: 'spring', stiffness: 100, damping: 15,delay:0 }} // Spring-based animation for smoothness
           style={{backgroundImage:`url(${listings[0].image})`}}>
         </motion.div>
         <motion.div
           initial={{ y: '55vh' }} // Start off-screen at the bottom
           animate={{ y: 0 }} // Slide to the original position (0)
           exit={{ y: '100%' }} // Exit by sliding back to the bottom
           transition={{ type: 'spring', stiffness: 100, damping: 15,delay:0.1 }}  // Spring-based animation for smoothness
           style={{backgroundImage:`url(${listings[1].image})`}}>
     
         </motion.div>
         <motion.div
           initial={{ y: '55vh' }} // Start off-screen at the bottom
           animate={{ y: 0 }} // Slide to the original position (0)
           exit={{ y: '100%' }} // Exit by sliding back to the bottom
           transition={{ type: 'spring', stiffness: 100, damping: 15,delay:0.2 }} // Spring-based animation for smoothness
           style={{backgroundImage:`url(${listings[2].image})`}}>
     
         </motion.div>
         </div>
    )}
    </>
  )
}

export default First