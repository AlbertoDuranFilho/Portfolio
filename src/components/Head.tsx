import './head.css'

interface HeadProps {
    click: () => void;
}

export function Head(props : HeadProps){
    return(
        <header className=" bg-background h-16 w-full border-b-2 border-primary flex justify-around items-center fixed left-0 top-0 ">
            <div className='w-16 h-8 mx-4 '></div>
            <h1 className="text-white font-roboto ">Portfólio</h1>
            <label className=" relative w-16 h-8  ml-4 mr-4 ">
                <input type="checkbox" name="darkmode" id="darkmode" className="opacity-0 w-0 h-0 toggle-input" onClick={props.click} />
                <span className="absolute top-0 right-0 left-0 bottom-0 cursor-pointer rounded-2xl 
                                bg-primary transition-all before:absolute before:w-[24px] before:h-[24px] 
                                before:left-[4px] before:bottom-[4px] before:rounded-full 
                                before:bg-black toggle-slider " 
                />
            </label>
        </header>
    )
}