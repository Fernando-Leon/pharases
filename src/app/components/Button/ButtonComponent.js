import Arrow from '../svg/arrow'
import Traslate from '../svg/traslate'
import Theme from '../svg/theme'
import Add from '../svg/Add'

function ButtonComponent( {text, title = 'Boton', rotate = '', nameIcon = 'default', rounded, isHover, filledColor = 'fill-slate-600 dark:fill-white', bgColor = "bg-white", shadow = false, onClick} ) {
 
    let spanText = text ? <span>{text}</span> : null;
    let icon = null;
    let hover = isHover === true ? 'hover:pr-6 hover:pl-6 hover:dark:bg-purple hover:dark:text-white' : '';
    let style = `${filledColor} ${rotate}`;
    let roundedSize = rounded === true ? 'rounded-full' : 'rounded-lg';
    let isShadow = shadow === true ? 'shadow-lg  dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#c237db,0_0_15px_#c237db,0_0_30px_#c237db]' : '';
    // let isShadow = shadow === true ? 'shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.2)]' : '';
    if(nameIcon === 'arrow') {
        icon = <Arrow className={style}/>;    
    } else if (nameIcon === 'traslate' ) {
        icon = <Traslate className={style}/>;
    }else if (nameIcon === 'theme'  ) {
        icon = <Theme className={style}/>;
    }else if (nameIcon === 'add' ) {
        icon = <Add className={style}/>;
    }else {
        icon = null;
        roundedSize += 'pr-4 pl-4 rounded-full'
    }

    return (
        <button className={`flex ${bgColor} ${hover} transition-all items-center gap-2 p-3 hover:fill-secondary ease-in duration-300 dark:text-white ${roundedSize} ${isShadow}`} onClick={onClick} title={title}>
            {icon}
            {spanText}
        </button>
    )
}

export default ButtonComponent  