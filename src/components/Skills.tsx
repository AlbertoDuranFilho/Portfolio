import HTML5 from '../assets/html5.svg'
import CSS3 from '../assets/css3.svg'
import JavaScript from '../assets/js.svg'
import ReactJs from '../assets/reactjs.svg'
import TypeScript from '../assets/ts.svg'
import NodeJs from '../assets/nodejs.svg'
import ReactNative from '../assets/reactjs.svg'
import TailwindCSS from '../assets/tailwind.svg'
import Figma from '../assets/figma.svg'
import Vite from '../assets/vite.svg'
import { CardSkills } from './CardSkills'
import { Heading } from './Heading'

export function Skills(){
    return (
        <div className="flex flex-col h-full items-center mt-28" >
            <Heading title='Habilidades' />
            <div className='flex flex-row mt-40 max-lg:mt-20 max-md:mt-20 max-lg:grid max-lg:grid-cols-3  max-md:grid max-md:grid-cols-2'>
               <CardSkills title='HTML5' img={HTML5} />
               <CardSkills title='CSS3' img={CSS3} />
               <CardSkills title='JavaScript' img={JavaScript} />
               <CardSkills title='ReactJs' img={ReactJs} />
               <CardSkills title='TypeScript' img={TypeScript} />
               
            </div>
            <div className='flex flex-row my-28 max-md:my-5 max-lg:my-5 max-lg:grid max-lg:grid-cols-3 max-md:grid max-md:grid-cols-2'>
            <CardSkills title='NodeJs' img={NodeJs} />
               <CardSkills title='React Native' img={ReactNative} />
               <CardSkills title='Tailwind' img={TailwindCSS} />
               <CardSkills title='Figma' img={Figma} />
               <CardSkills title='Vite' img={Vite} />
            </div>
        </div>
    )
}