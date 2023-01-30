import './head.css'

export function Head(){
    return(
        <header className="h-16 border-b-2 border-primary flex justify-around items-center ">
            <div className='w-16 h-8 mx-4 '></div>
            <h1 className="text-white">Portfólio</h1>
            <label className=" relative w-16 h-8  ml-4 mr-4 ">
                <input type="checkbox" name="darkmode" id="darkmode" className="opacity-0 w-0 h-0 toggle-input" />
                <span className="absolute top-0 right-0 left-0 bottom-0 cursor-pointer rounded-2xl 
                                bg-primary transition-all before:absolute before:w-[24px] before:h-[24px] 
                                before:left-[4px] before:bottom-[4px] before:rounded-full 
                                before:bg-black toggle-slider " 
                />
            </label>
        </header>
    )
}