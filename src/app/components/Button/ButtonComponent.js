import Arrow from '../svg/arrow'
import Traslate from '../svg/traslate'
import Theme from '../svg/theme'
import Add from '../svg/Add'

function ButtonComponent( {text, rotate = '', nameIcon = 'default', rounded, filledColor = 'fill-white dark:fill-white', bgColor = "bg-purple", shadow = false, onClick} ) {
 
    let spanText = text ? <span>{text}</span> : null;
    let icon = null;
    let style = `${filledColor} ${rotate}`;
    let roundedSize = rounded === true ? 'rounded-full' : 'rounded-lg';
    let isShadow = shadow === true ? 'shadow-sm shadow-indigo-500/40 dark:shadow-purple-500/40' : '';
    if(nameIcon === 'arrow') {
        icon = <Arrow className={style}/>;    
    } else if (nameIcon === 'traslate' ) {
        icon = <Traslate className={style}/>;
    }else if (nameIcon === 'theme' ) {
        icon = <Theme className={style}/>;
    }else if (nameIcon === 'add' ) {
        icon = <Add className={style}/>;
    }else {
        icon = <Arrow className={style}/>;
    }

    return (
        <button className={`flex ${bgColor} opacity-80 items-center gap-2 p-3 hover:scale-125 ease-in duration-300 dark:text-white ${roundedSize} ${isShadow}`} onClick={onClick}>
            {icon}
            {spanText}
        </button>
    )
}

export default ButtonComponent  