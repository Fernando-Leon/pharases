import Image from 'next/image'
import Button from './components/Button/ButtonComponent'
import Phrase from './components/ContentPhrase/PhraseComponent'

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center p-24">
      <Phrase />
    </main>
  )
}
