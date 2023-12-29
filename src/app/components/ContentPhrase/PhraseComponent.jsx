'use client'
import React, { useState, useEffect, useRef } from 'react';
import ButtonComponent from '../Button/ButtonComponent';
import Image from 'next/image';
import FlowerComponent from '../Flower/FlowerComponent';

async function getData() {
  const res = await fetch('http://localhost:9000/api/phrases', { next: { revalidate: 1000 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

const Phrase = () => {
  const [phrases, setPhrases] = useState([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const currentPhrase = phrases[currentPhraseIndex];
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setPhrases(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, []);

  const wrapper = useRef(null);
  const [dimensiones, setDimensiones] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const actualizarDimensiones = () => {
      const elemento = wrapper.current;
  
      if (elemento) {
        const { width, height } = elemento.getBoundingClientRect();
        setDimensiones({ width: width, height: height });
      }
    };
  
    actualizarDimensiones();
    window.addEventListener('resize', actualizarDimensiones);
  
    return () => { window.removeEventListener('resize', actualizarDimensiones); };
  }, [wrapper.current]);

  useEffect(() => {
    const handleDeviceOrientation = (event) => {
      const tiket = wrapper.current;
      tiket.style.transition = 'none';

      const rotationX = Math.round(event.beta);
      const rotationY = Math.round(event.gamma);

      tiket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    };

    // Suscríbete al evento deviceorientation
    window.addEventListener("deviceorientation", handleDeviceOrientation, true);

    // Limpia el efecto al desmontar el componente
    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation, true);
    };
  }, [wrapper.current]);
  

  const handleMouseMove = (e) => {
    const tiket = wrapper.current;
    
    tiket.style.transition = 'none';
    const rect = tiket.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let nMult = 4;
    
    const rotationY = ((y - dimensiones.height / 2) / (dimensiones.height / 2)) * nMult;
    const rotationX = ((x - dimensiones.width / 2) / (dimensiones.width / 2)) * nMult;
    
    tiket.style.transform =  `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const tiket = wrapper.current;
    tiket.style.transition = 'transform .3s ease-in-out';
    tiket.style.transform =  `rotateX(0deg) rotateY(0deg)`;
  };
  
  
  if (!currentPhrase) return  <div> Loading... </div>; 


  return (
    <div className="relative bg-transparent dark:bg-transparent flex flex-col w-full h-3/4 border-8 border-double border-purple dark:border-purple p-12 pt-24 pb-24 ease-in-out transition-all duration-500 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#c237db,0_0_15px_#c237db,0_0_30px_#c237db]" ref={wrapper} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      
      <div className="flex flex-col gap-2 text-black dark:text-white">
        <p className=''>"{currentPhrase.phrase}"</p>
        <span className="text-right italic">- {currentPhrase.author}</span>
      </div>

      <div className="absolute flex h-full items-center self-center top-0 left-0 z-10">
        <ButtonComponent
          rounded
          filledColor='fill-purple hover:saturate-200 dark:fill-oro dark:hover:saturate-200 z-30'
          bgColor='transparent'
          rotate='-rotate-90'
          onClick={() => setCurrentPhraseIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
        />
      </div>

      <div className="absolute flex h-full items-center self-center top-0 right-0 z-10">
        <ButtonComponent
          filledColor='fill-purple hover:saturate-200 dark:fill-oro dark:hover:saturate-200 z-30'
          rounded
          rotate='rotate-90'
          bgColor='transparent'
          onClick={() => setCurrentPhraseIndex((prevIndex) => Math.min(prevIndex + 1, phrases.length - 1))}
        />
      </div>

      <FlowerComponent img='flower4.png' size='w-28' controls='-left-12 -top-12' rotate='rotate-90' stylesExtra='z-20'/>
      <FlowerComponent img='flower4.png' size='w-28' controls='-top-12 -right-12' rotate='rotate-90'  stylesExtra='z-20'/>
      <FlowerComponent img='flower3.png' size='w-28' controls='-bottom-12 -right-12' stylesExtra='z-20'/>
      <FlowerComponent img='flower3.png' size='w-28' controls='-left-12 -bottom-12' rotate='rotate-90' stylesExtra='z-20'/>


      <div className='absolute w-full h-28 left-0 -bottom-12 flex justify-center justify-self-center'>
        <FlowerComponent img='flower2.png' position='relative' controls='bottom-0' rotate='rotate-0' stylesExtra='justify-self-center h-full'/>
      </div>

      
    </div>
  );
};

export default Phrase;