import { Heading } from './Heading'
import FaceImg from '../assets/face.png'

export function About(){
    return(
        <div className='h-full mt-28' >
            <Heading title='Um pouco da minha historia...' subtitle='Sobre' />
            <div className=" flex justify-center mt-28 ">
                <img className="w-36 h-36" src={FaceImg} alt="" />
                <p className=' w-[31.25rem] ml-12 text-white' >Minha historia com o universo da programação começa desde os 15 anos, 
                    quando comecei a aprender Pascal com meu tio. 
                    Ao decorrer da minha jornada acabei indo para o caminho da eletrônica, 
                    onde aprender a programação de baixo nível, 
                    mas minha paixão mesmo acendeu quando conheci o universo do Javascript,
                     e entrei de cabeça. 
                    <br />
                    <br />
                    Iniciei a graduação de engenharia da computação, 
                    realizei alguns trabalhos como freelancer, 
                    utilzando React Js, Typescript, React Native e o Figma para construir os designer. 
                    Atualmente continuou estudando outras tecnologias como Node js, Storybook, Tailwind.
                </p>
            </div>
        </div>
    )
}