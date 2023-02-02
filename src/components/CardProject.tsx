interface CardProjectProps {
   title?: string;
   img: string;
   url: string;
}

export function CardProject(props: CardProjectProps){
    return(
        <div className="flex flex-col justify-center items-center mt-20">
            <h2 className=" mb-3 font-russo-one text-2xl text-secundary dark:text-backgroundlight" >{props.title}</h2>
            <div className="w-96 h-60 max-lg:w-80 rounded-lg border-b-4 border-primary duration-200  mx-4 hover:scale-95">
                <a className="h-full w-full flex flex-col items-center justify-center " href={props.url} target='_blank' >
                    <img className=' h-full opacity-30 duration-150 hover:opacity-60' src={props.img} alt=""/>
                </a>
            </div>
        </div>
    )
}