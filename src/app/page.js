'use client'
import { useState } from 'react'
import Button from './components/Button/ButtonComponent'
import Phrase from './components/ContentPhrase/PhraseComponent'
import Modal from './components/Form/Form'
import FlowerComponent from './components/Flower/FlowerComponent'

export default function Home() {

  
  const [displayL, setDisplayL] = useState('hidden');

  const handleOpenForm = () => { setDisplayL('visible'); }

  const handleCloseForm = () => { setDisplayL('hidden'); }

  return (
    <main className="grid relative max-h-screen min-h-screen justify-center items-center p-24 dark:bg-black overflow-hidden">
      
      <div className='w-full z-20'>
        <Phrase />
      </div>

      <nav className='flex absolute gap-4 bottom-8 right-0 w-full  justify-center z-10'>
        <Button nameIcon='add' bgColor='transparent' filledColor='opacity-80 dark:fill-white' shadow rounded isHover onClick={handleOpenForm}/>
        <Button nameIcon='theme' rounded bgColor='transparent' filledColor='opacity-80 dark:fill-white' shadow isHover/>
        <Button nameIcon='traslate' rounded bgColor='transparent' filledColor='opacity-80 dark:fill-white' shadow isHover/>
      </nav>
      <Modal displayL={displayL} onClose={handleCloseForm}/>
      
      <FlowerComponent img='flower3.png' size='w-80' controls='-bottom-24 -right-24' />   
      <FlowerComponent img='flower3.png' size='w-80' controls='-bottom-24 -left-24' stylesExtra='-scale-x-100'/>   
      <FlowerComponent img='flower3.png' size='w-80' controls='-top-40 -right-24' rotate='-rotate-90'/>   
      <FlowerComponent img='flower3.png' size='w-80' controls='-top-40 -left-24' stylesExtra='-scale-x-100' rotate='rotate-90'/>

    </main>
  )
}