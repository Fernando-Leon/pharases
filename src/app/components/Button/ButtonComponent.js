import Arrow from '../svg/arrow'

function ButtonComponent( {text = "Button", rotate = false} ) {
    let icon = rotate ? <Arrow className="rotate-180 fill-blue-400"/> : <Arrow className="fill-blue-400"/>;
    return (
        <button className="flex items-center gap-2 pl-6 pr-6 pb-2 pt-2 shadow-sm shadow-indigo-500/40 rounded-lg hover:scale-105 ease-in duration-300">
            {icon}
            <span>{text}</span>
        </button>
    )
}

export default ButtonComponent  