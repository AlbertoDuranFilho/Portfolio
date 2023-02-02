import { CardProject } from "./CardProject";
import { Heading } from "./Heading";

import Montes from '../assets/montes-site.png'
import vlc from '../assets/vlc-site.png'
import GithubFinder from '../assets/github-finder.png'
import NLWCopa from '../assets/nlw-copa.png'
import RocketPay from '../assets/rocket-pay.png'
import DesignSystem from '../assets/Ignite-lab-design-system.png'

export function Projects(){
    return(
        <div>
            <div className="mt-60">
                <Heading
                title="Confira alguns projetos realizados"
                subtitle="Projetos"
                />
            </div>

            <div className="flex justify-center max-md:flex-col ">
                <CardProject title="Montês Tecnologia" img={Montes} url='https://www.montestecnologia.com.br' />
                <CardProject title="VLC Pedais" img={vlc} url='https://vlcpedais.com.br' />
            </div>
            <div className="flex justify-center max-md:flex-col ">
                <CardProject title="GitHub Finder" img={GithubFinder} url='https://github.com/AlbertoDuranFilho/GitHub-Finder' />
                <CardProject title="NLW Copa" img={NLWCopa} url='https://github.com/AlbertoDuranFilho/nlw-copa' />
            </div>
            <div className="flex justify-center max-md:flex-col ">
                <CardProject title="RocketPay" img={RocketPay} url='https://github.com/AlbertoDuranFilho/explorer-lab-01' />
                <CardProject title="Ignite Lab Design System" img={DesignSystem} url='https://github.com/AlbertoDuranFilho/ignite-lab-design-system-rocketseat' />
            </div>
        </div>
    )
}