interface CardContactProps {
    title: string;
    subtitle: string;
    img: string;
    url?: string;
}

export function CardContact(props : CardContactProps){
    return (
        <div className=" mt-44 max-md:mt-20 flex flex-col items-center ">
            <div className="w-24 h-24 rounded-full bg-secundary flex justify-center items-center">
                <img src={props.img} alt="" />
            </div>
            <p className="font-bold text-2xl text-text my-3"> {props.title} </p>
            <a className=" duration-150 hover:opacity-75 cursor-pointer" target='_blank' href={props.url}><p className="font-normal text-xl text-[#D9D9D9]">{props.subtitle}</p></a>
        </div>
    )
}