'use client'
import React, { useState, useEffect, useRef } from 'react';
import ButtonComponent from '../Button/ButtonComponent';

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
    <div className="w-full h-3/4 rounded-xl p-12 pt-12 pb-12 shadow-xl shadow-indigo-500/40 dark:shadow-purple-500/40" ref={wrapper} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      
      <div className="flex flex-col gap-2 text-black dark:text-white">
        <p className=''>"{currentPhrase.phrase}"</p>
        <span className="text-right italic">- {currentPhrase.author}</span>
      </div>

      <div className="flex justify-end gap-6 pt-2">
        <ButtonComponent
          text="Anterior"
          rotate={'rotate-180'}
          onClick={() => setCurrentPhraseIndex((prevIndex) => Math.max(prevIndex - 1, 0))}
        />
        <ButtonComponent
          text="Siguiente"
          onClick={() => setCurrentPhraseIndex((prevIndex) => Math.min(prevIndex + 1, phrases.length - 1))}
        />
      </div>
      
    </div>
  );
};

export default Phrase;