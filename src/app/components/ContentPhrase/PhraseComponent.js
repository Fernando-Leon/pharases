import ButtonComponent from "../Button/ButtonComponent"

export default function Phrase() {
    return (
        <div className="w-3/4 min-h-full rounded-xl p-6 pt-8 pb-8 shadow-lg shadow-indigo-500/40">
            
            <div className="flex flex-col gap-2">
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                
                <span className="text-right">
                    - Lorem Ipsum
                </span>
            </div>

            <div className="flex justify-end gap-6 pt-2">
                <ButtonComponent text="Anterior" rotate={true}/>
                <ButtonComponent text="Siguente"/>
            </div>


        </div>
    )
}