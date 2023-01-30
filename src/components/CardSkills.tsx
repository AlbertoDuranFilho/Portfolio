interface CardSkillsProps{
    title: string;
    img: string;
}

export function CardSkills(props : CardSkillsProps){
    return(
        <div className="w-40 h-40 bg-secundary rounded-xl border-b-4 border-primary flex flex-col justify-around items-center ml-10 max-lg:mt-5 max-md:ml-2 max-md:mt-3 hover:scale-110 hover:duration-150">
            <h1 className="text-primary font-bold text-2xl">{props.title}</h1>
            <span><img src={props.img} alt="" /></span>
        </div>
    )
}