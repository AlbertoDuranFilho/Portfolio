import { CardProject } from "./CardProject";
import { Heading } from "./Heading";

import Montes from '../assets/montes-site.png'
import vlc from '../assets/vlc-site.png'

export function Projects(){
    return(
        <div>
            <div className="mt-60">
                <Heading
                title="Confira alguns projetos realizados"
                subtitle="Projetos"
                />
            </div>

            <div className="flex justify-center ">
                <CardProject title="Montês Tecnologia" img={Montes} url='www.montestecnologia.com.br' />
                <CardProject title="VLC Pedais" img={vlc} url='vlcpedais.com.br' />
            </div>
            <div className="flex justify-center ">
                <CardProject title="Montês Tecnologia" img={Montes} url='www.montestecnologia.com.br' />
                <CardProject title="Montês Tecnologia" img={Montes} url='www.montestecnologia.com.br' />
            </div>
        </div>
    )
}