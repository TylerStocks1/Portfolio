import React from 'react'
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { calculateSizes } from '../constants/index.js';


import Head from '../components/Head'
import CanvasLoader from '../components/CanvasLoader';



const Hero = () => {


    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative' id='home'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>Hi, I am Tyler <span className='waving-hand'>👋</span></p>
            <p className=' hero_tag text-gray text-gray_gradient'>Crafting Worlds & Interactive Experiences
                <span className='blinking'> _ </span>
            </p>
            
            <div className='w-full h-full absolute inset-0'>
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>


                    <PerspectiveCamera makeDefault position={[ 0, 0, 30 ]}/>

                    <Head
                     //scale={2}
                     //position={[0, 0, 0]}
                     //rotation={[0, 45 , 0]}
                     position={[1.1,-7.9,-7.9]}
                     rotation={[-2.9,3.1,3.3]}
                     scale={isMobile ? 0.07 : 0.1}
                     />

                    



                    
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={.5}/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Hero