import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Head } from "./components/Head";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

import Git from './assets/git-mini.svg'
import LinkedIn from './assets/linkedIn-mini.svg'
import Email from './assets/email-mini.svg'
import Whatsapp from './assets/whatsapp-mini.svg'

export function App() {

  return (
    <div className="bg-background">
      <Head />
      <main className=' bg-background h-screen flex justify-center items-center' >
        <div className=' flex flex-col items-center' >
          <h1 className='text-white text-4xl'>Alberto Duran</h1>
          <p className='text-2xl text-white mt-1' >Desenvolvedor Front-End</p>
          <button className='mt-5 w-44 h-10 rounded-lg border-primary border-2 text-white transition hover:bg-primary hover:scale-110'>Saiba Mais</button>
        </div>
      </main>
      <div className="bg-background mt-[-120px] text-white flex items-center justify-around">
        <div className="w-4"></div>
        <div className=" w-60 flex justify-around items-center ">
          <a href="" target='_blank'><img className=" duration-300 hover:opacity-70" src={Git} alt="" /></a>
          <a href="" target='_blank'><img className=" duration-300 hover:opacity-70"  src={LinkedIn} alt=""/></a>
          <a href="" target='_blank'><img className=" duration-300 hover:opacity-70"  src={Email} alt="" /></a>
          <a href="" target='_blank'><img className=" duration-300 hover:opacity-70"  src={Whatsapp} alt="" /></a>
        </div>
        <div></div>
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

