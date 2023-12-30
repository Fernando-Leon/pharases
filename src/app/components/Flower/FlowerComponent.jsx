import Image from "next/image"

function FlowerComponent( {img = 'flower1.png', position = 'absolute', rotate = 'rotate-0', controls = 'top-0 left-0', stylesExtra = '', size = '', } ) {
  return (
    <Image className={`${position} ${size} ${rotate} ${controls} ${stylesExtra} dark:hover:grayscale-0 hover:grayscale ease-in-out transition-all duration-500`} 
        src={`/flowers/${img}`}
        height={200}
        width={200}
        alt="Image of a flower"
    />
  )
}

export default FlowerComponent