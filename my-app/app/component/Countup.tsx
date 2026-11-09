"use client"
import React, { useEffect, useState, useRef } from 'react' 
import { useInView } from 'framer-motion' 

export default function Counter() {

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);

    
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    useEffect(() => {
        if (!isInView) return; 

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev >= 10) {
                    clearInterval(timer)
                    return 10
                }

                return prev + 1;
            })
        }, 100);
    }, [isInView])

    useEffect(() => {
        if (!isInView) return; 
        const timer2 = setInterval(() => {
            setCount2((prev) => {
                if (prev >= 99) {
                    clearInterval(timer2)
                    return 99
                }

                return prev + 1;
            })
        }, 10);
    }, [isInView]) 

    useEffect(() => {
        if (!isInView) return;

        const timer3 = setInterval(() => {
            setCount3((prev) => {
                if (prev >= 115) {
                    clearInterval(timer3)
                    return 115
                }

                return prev + 1;
            })
        }, 10);
    }, [isInView])

  return (
    <div ref={containerRef} className="my-15 md:mx-40 mx-5 text-white bg-blue-800 flex flex-row text-center  justify-center py-2 items-center  md:gap-25 gap-x-5 rounded-bl-3xl rounded-tr-3xl ">
        <div className="flex flex-col gap-2 justify-center py-4 px-3 items-center hover:bg-blue-500 rounded-xl md:px-5">
          <h3 className="md:text-5xl text-2xl font-bold">{count}K</h3>
          <p className="md:text-2xl text-sm font-semibold">Happy Clients</p>
        </div>
        <div className="flex flex-col gap-2 justify-center py-4 px-3 items-center  hover:bg-blue-500 rounded-xl md:px-5">
          <h3 className="md:text-5xl text-2xl font-bold">{count2}%</h3>
          <p className="md:text-2xl text-sm font-semibold">Satisfied Clients</p>
        </div>
        <div className="flex flex-col gap-2 justify-center py-4 px-3 items-center hover:bg-blue-500 rounded-xl md:px-5">
          <h3 className="md:text-5xl text-2xl font-bold">{count3}</h3>
          <p className="md:text-2xl text-sm font-semibold">Active Antenna</p>
        </div>
    </div>
  )
}
