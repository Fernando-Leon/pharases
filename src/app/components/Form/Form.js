import { useState } from "react"
import Button from "../Button/ButtonComponent"

async function sendData(data) {
    const url = 'http://localhost:9000/api/phrases';
  
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Asegúrate de establecer el tipo de contenido adecuado
      },
      body: JSON.stringify(data), // Convierte los datos a formato JSON
    });
  
    if (!res.ok) {
      throw new Error('Failed to send data');
    }
  
    return res.json();
}

function Form( { displayL = 'hidden', onClose } )  {

    const [close, setClose] = useState('hidden');
    const [author, setAuthor] = useState('');
    const [phrase, setPhrase] = useState('');

    const handleClose = () => {
        setAuthor('');
        setPhrase('');
        setClose('hidden');
        if (onClose) {
          onClose();
        }
      };

    const handleSave = async () => {
        try {
          // Envía los datos a la API utilizando la función sendData
          const result = await sendData({ phrase, author });
          console.log('Data sent successfully:', result);
    
          // Cierra el formulario después de enviar los datos
          handleClose();
        } catch (error) {
          console.error('Error sending data:', error.message);
        }
      };

    return (
        <div className={`absolute translate-x-1/2 flex w-1/2 h-auto p-12 pt-12 pb-12 rounded-xl shadow-xl bg-white dark:bg-black shadow-indigo-500/40 dark:shadow-purple-500/40 items-center justify-center ${displayL}`}>
            <div className='flex absolute gap-4 top-3 right-6'>
                <Button nameIcon='add' rotate={'rotate-45'} rounded onClick={handleClose}/>
            </div>

            <form className="w-3/4 flex flex-col items-center justify-center gap-6 text-black dark:text-white">
                <h2 className="text-xl">ADD NEW PHRASE</h2>
                <div className="mt-1 w-full">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-white">Autor:</label>
                    <input type="text" name="author"  id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)} className="pb-3 pt-3 pl-2 pr-2 rounded-xl shadow-xl shadow-indigo-500/40 dark:shadow-purple-500/40 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm dark:bg-black outline-none" placeholder="Nombre del autor"/>
                </div>
                <div className="mt-1 w-full">
                    <label htmlFor="phrase" className="block text-sm font-medium text-gray-700 dark:text-white">Frase:</label>
                    <textarea type="text" name="phrase" id="phrase" value={phrase} onChange={(e) => setPhrase(e.target.value)} className="h-32 max-h-60 pb-3 pt-3 pl-2 pr-2 rounded-xl shadow-xl shadow-indigo-500/40 dark:shadow-purple-500/40 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm dark:bg-black outline-none" placeholder="Nombre del autor"/>
                </div>
                <div className="mt-1">
                    <Button text='Guardar' rounded filledColor='fill-white' onClick={handleSave}/>
                </div>
            </form>
        </div>
    )
}

export default Form;