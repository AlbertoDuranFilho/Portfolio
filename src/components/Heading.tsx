interface HeadingProps {
    title: string;
    subtitle?: string;
    paragraph?: string;
}

export function Heading(props : HeadingProps){
    return(
        <div className=" flex flex-col justify-center items-center" >
            <h2 className="font-bold text-primary text-2xl">{props.subtitle}</h2>
            <h1 className=" font-bold text-white text-4xl max-md:text-center " >{props.title}</h1>
            <h2 className="font-normal text-[#D9D9D9] text-2xl mt-4 max-md:text-center">{props.paragraph}</h2>
        </div>
    )
}