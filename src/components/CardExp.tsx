interface CardExpProps {
    job: string;
    exp: string;
    text: string;
    img: string;
    date: string;
}

export function CardExp(props: CardExpProps){
    return(
        <div className="flex justify-around mt-16">
            <div className="flex flex-col items-center">
                <h2 className=" text-primary font-bold text-2xl max-md:text-center"> {props.job} </h2>
                <h3 className=" text-text font-normal text-xl max-md:text-center"> {props.date} </h3>
            </div>
            <div className=" flex flex-col ">
                <span className="z-10"><img src={props.img} alt="" /></span>
            </div>
            <div className="w-72 max-md:flex max-md:flex-col max-md:items-center">
                <h2 className=" text-primary font-bold text-2xl max-md:text-center">{props.exp}</h2>
                <hr className=" w-20 border-4 my-4 " />
                <p className=" text-text ">{props.text}</p>
            </div>
        </div>
    )
}