import { Heading } from "./Heading";

import Whatsapp from '../assets/whatsapp-contato.svg'
import Email from '../assets/email-contato.svg'
import LinkedIn from '../assets/linkedin-contato.svg'
import Git from '../assets/git-contato.svg'
import { CardContact } from "./CardContact";

export function Contact(){
    return(
        <div>
            <div className="mt-24">
                <Heading
                title="Vamos lá?!"
                subtitle="Contato"
                paragraph="Como posso te ajudar?"
                />
            </div>

            <div className="flex items-center justify-around max-md:flex-col">
                <CardContact title="Email" subtitle="albertoduranfilho@gmail.com" img={Email} url="mailto:albertoduranfilho@gmai.com?" />
                <CardContact title="WhatsApp" subtitle="+55 81 99751-9315" img={Whatsapp} url="https://wa.me/5581997519315" />
                <CardContact title="LinkedIn" subtitle="@alberto-janeiro" img={LinkedIn} url="https://linkedin.com/in/alberto-janeiro/" />
                <CardContact title="GitHub" subtitle="@albertoduranfilho" img={Git} url="https://github.com/AlbertoDuranFilho" />
            </div>
    
        </div>
    )
}