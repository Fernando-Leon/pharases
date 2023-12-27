'use client'
import { useState } from 'react'
import Image from 'next/image'
import Button from './components/Button/ButtonComponent'
import Phrase from './components/ContentPhrase/PhraseComponent'
import Modal from './components/Form/Form'

export default function Home() {

  
  const [displayL, setDisplayL] = useState('hidden');

  const handleOpenForm = () => {
      setDisplayL('visible');
  }

  const handleCloseForm = () => {
      setDisplayL('hidden');
  }

  return (
    <main className="grid relative max-h-screen min-h-screen justify-center items-center p-24 dark:bg-black">
      <nav className='flex absolute gap-4 top-3 right-6'>
        <Button nameIcon='add' rounded onClick={handleOpenForm}/>
        <Button nameIcon='theme' rounded/>
        <Button nameIcon='traslate' rounded/>
      </nav>
      <div className='w-full'>
        <Phrase />
      </div>

      <Modal displayL={displayL} onClose={handleCloseForm}/>
    </main>
  )
}