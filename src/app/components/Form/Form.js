import { useState } from "react";
import Button from "../Button/ButtonComponent";
import Image from "next/image";
import FlowerComponent from "../Flower/FlowerComponent";

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

function Form({ displayL = "hidden", onClose }) {
  const [close, setClose] = useState("hidden");
  const [author, setAuthor] = useState("");
  const [phrase, setPhrase] = useState("");

  const handleClose = () => {
    setAuthor("");
    setPhrase("");
    setClose("hidden");
    if (onClose) onClose();
  };

  const handleSave = async () => {
    try {
      const result = await sendData({ phrase, author });
      console.log("Data sent successfully:", result);
      handleClose();
    } catch (error) {
      console.error("Error sending data:", error.message);
    }
  };

  return (
    <div className={`absolute flex items-center justify-center w-full h-full bg-white dark:bg-black ${displayL} z-40`}>
      <div className={`absolute flex w-1/2 h-auto p-12 pt-12 pb-12 bg-white dark:bg-black items-center justify-center border-8 border-double border-purple dark:border-oro`} >
        <div className="flex absolute gap-4 top-3 right-6">
          <Button
            nameIcon="add"
            rotate={"rotate-45"}
            rounded
            onClick={handleClose}
          />
        </div>

        <form className="w-3/4 flex flex-col items-center justify-center gap-6 text-black dark:text-white">
          <h2 className="text-xl">ADD NEW PHRASE</h2>
          <div className="w-full relative overflow-hidden">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-gray-700 dark:text-white"
            > Autor: </label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="pb-3 pt-3 pl-2 pr-2 w-full sm:text-sm dark:bg-black outline-none border-double border-purple border-4"
              placeholder="Nombre del autor"
            />
            <FlowerComponent img='flower3.png' size='w-12' controls='-bottom-6 -right-2'/>
          </div>
          <div className="w-full relative overflow-hidden">
            <label
              htmlFor="phrase"
              className="block text-sm font-medium text-gray-700 dark:text-white">
              Frase: </label>
            <textarea
              type="text"
              name="phrase"
              id="phrase"
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              className="h-32 max-h-60 pb-3 pt-3 pl-2 pr-2 w-full sm:text-sm border-double border-purple border-4 outline-none bg-transparent"
              placeholder="Phrase"
            />
          </div>
          <div className="mt-1">
            <Button
              text="Guardar"
              rounded
              filledColor="fill-white"
              onClick={handleSave}
            />
          </div>
        </form>
        <FlowerComponent img='flower4.png' size='w-28' controls='-left-12 -top-12' rotate="rotate-90"/>
        <FlowerComponent img='flower3.png' size='w-28' controls='-bottom-12 -right-12' />
        <FlowerComponent img='flower3.png' size='w-28' controls='-left-12 -bottom-12' rotate="rotate-90"/>
      </div>
    </div>
  );
}

export default Form;
