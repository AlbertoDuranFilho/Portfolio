import { Heading } from "./Heading";

import Job from '../assets/job.svg'
import Educ from '../assets/education.svg'
import { CardExp } from "./CardExp";

export function Experience() {
  return (
    <div className=" bg-background h-full">
        <div className="mt-24">
            <Heading
            title="Minhas qualificações"
            subtitle="Resumo"
            paragraph="Um pouco sobre minha trajetória no mundo da programação"
            />
        </div>
        <CardExp
            job="Freelancer"
            date="Maio 2021 - Presente"
            img={Job}
            exp="Desenvolvedor Front-End"
            text="  Como aluno representando a escola SENAI areias de Pernambuco na modalidade de Robótica, 
                    onde ficava responsável pela programação do robô.  
                    Era utilizado uma IDE própria num linguagem de blocos ou utilizando a linguagem C. "
        />
        <CardExp
            job="UniFBV"
            date="Fev 2020 - Dez 2025"
            img={Educ}
            exp="Engenharia da Computação"
            text="  Linguagens de Programação (C, Java, C++) Banco de dados (Mysql)"
        />
        <CardExp
            job="Consórcio Gpipa"
            date="Out 2016 - Abr 2021"
            img={Job}
            exp="Técnico em Eletrônica"
            text="  Linguagens de Programação (C, Java, C++) Banco de dados (Mysql)"
        />
        <CardExp
            job="Aluno Olímpico"
            date="Jan 2015 - Out 2015"
            img={Educ}
            exp="Robótica Móvel"
            text="  Como aluno representando a escola SENAI areias de Pernambuco na modalidade de Robótica, 
                    onde ficava responsável pela programação do robô.  
                    Era utilizado uma IDE própria num linguagem de blocos ou utilizando a linguagem C. "
        />
        <CardExp
            job="SENAI PE"
            date="Ago 2013 - Dez 2014"
            img={Educ}
            exp="Técnico em Eletrônica"
            text="  Linguagens de Programação (C, Java, C++) Banco de dados (Mysql)"
        />

    </div>
  );
}
