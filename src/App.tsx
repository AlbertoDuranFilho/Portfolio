import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Head } from "./components/Head";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { SvgIcon }from './components/SvgIcon'

export function App() {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark')
    } else {
      setTheme('dark')
    }
  }, [] )

  useEffect(() => {
    if (theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme] )

  function handleThemeSwitch(){
    setTheme(theme === 'dark' ? 'light' : 'dark');
  } 

  return (
    <div className="dark:bg-background bg-backgroundlight">
      <Head click={handleThemeSwitch} />
      <main className=' dark:bg-background bg-backgroundlight h-screen flex justify-center items-center' >
        <div className=' flex flex-col items-center' >
          <h1 className='dark:text-white text-secundary text-4xl font-russo-one'>Alberto Duran</h1>
          <p className='text-2xl dark:text-white text-secundary mt-1 font-roboto' >Desenvolvedor Front-End</p>
          <a href="https://drive.google.com/file/d/17Sy3ViQ4OFJFCYw8q6KC97soO_wsE1KF/view?usp=sharing" target='_blank' ><button className='mt-5 w-44 h-10 rounded-lg border-primary border-2 dark:text-white text-secundary duration-150 hover:bg-primary hover:text-white hover:scale-110'>CV</button></a> 
        </div>
      </main>
      <div className="mt-[-120px flex items-center justify-around">
        <div className="w-4"></div>
        <div className=" w-60 flex fill-secundary dark:fill-white justify-around items-center ">

         <a className=" duration-150 hover:opacity-70 fill-secundary dark:fill-white hover:fill-primary dark:hover:fill-primary "  href="https://github.com/AlbertoDuranFilho" target='_blank'>
            <SvgIcon
              iconName="git-mini"
              svgProp={{ width: 25, height: 22, fill: "" }}
            />
          </a>

         <a className=" duration-150 hover:opacity-70 fill-secundary dark:fill-white hover:fill-primary dark:hover:fill-primary  "  href="https://linkedin.com/in/alberto-janeiro/" target='_blank'>
            <SvgIcon
              iconName="linkedin-mini"
              svgProp={{ width: 25, height: 22, fill: "" }}
            />
          </a>

         <a className=" duration-150 hover:opacity-70 fill-secundary dark:fill-white hover:fill-primary dark:hover:fill-primary "  href="mailto:albertoduranfilho@gmai.com?" target='_blank'>
            <SvgIcon
              iconName="email-mini"
              svgProp={{ width: 25, height: 22, fill: "" }}
            />
          </a>

         <a className=" duration-150 hover:opacity-70 fill-secundary dark:fill-white hover:fill-primary dark:hover:fill-primary "  href="https://wa.me/5581997519315" target='_blank'>
            <SvgIcon
              iconName="whatsapp-mini"
              svgProp={{ width: 25, height: 22, fill: "" }}
            />
          </a>
         
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

