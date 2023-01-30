interface CardProjectProps {
   title?: string;
   img: string;
   url: string;
}

export function CardProject(props: CardProjectProps){
    return(
        <div className="w-96 h-60 rounded-lg border-b-4 border-primary duration-200 mt-20 mx-4 hover:scale-95">
            <a className="h-full w-full flex flex-col items-center justify-center " href={props.url} target='_blank' >
                <img className=' h-full opacity-20 duration-150 hover:opacity-50' src={props.img} alt=""/>
            </a>
        </div>
    )
}