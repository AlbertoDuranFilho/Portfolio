import { Heading } from "./Heading";

import Job from '../assets/job.svg'
import Educ from '../assets/education.svg'
import { CardExp } from "./CardExp";

export function Experience() {
  return (
    <div className="h-full">
        <div className="mt-24">
            <Heading
            title="Minhas qualificações"
            subtitle="Resumo"
            paragraph="Um pouco sobre minha trajetória no mundo da programação"
            />
        </div>
        <CardExp
            job="CESAR School"
            date="Jan 2023 - Jul 2025"
            img={Educ}
            exp="Gestão de Tecnologia da Informação"
            text=" Essa ano após um processo seletivo, consegui uma vaga na graduação no CESAR School, 
                    onde acredito que vai levar minha carreira profissional para outro patamar, 
                    por toda bagagem que a instituição tem com seus professores e profissionais mais que qualificados, 
                    e por ter um método de ensino inovador, diretamente ligada a situações reais do mercado."
        />
        <CardExp
            job="Freelancer"
            date="Maio 2021 - Presente"
            img={Job}
            exp="Desenvolvedor Front-End"
            text=" Com alguns anos estudando e participando de eventos online como o NLW da empresa Rocketseat, 
                    tive uma boa base em desenvolvimento Front-end. Sempre tentei entender todo o processo do desenvolvimento de um software, 
                    desde a parte do UX/UI até banco de dados e cloud, mas entendi que no primeiro momento precisava focar em algo para que eu pudesse 
                    fazer ingressar no mercado."
                     
            text2="Comecei realizando dois projetos para um cliente, onde um deles é um site institucional 
                    e o outro de um produto, utilizando o Wordpress. Também fiz um site institucional utilizando as tecnologias HTML, CSS e Javascript. 
                    Recebi um projeto um pouco mais complexo, uma dashboard, onde teria que interagir através de Websocktes com um dispositivo de controle 
                    e automação residencial. Utilizei as tecnologias ReactJs e TypeScript, tive que criar Hooks, um protocolo de comunicação próprio, 
                    onde as informações que viam era em binário, e tive que fazer tratamento de data e hora, pois o equipamento tinha uma função 
                    de agendamentos de tarefa."

            text3="Em outro momento construi uma aplicação mobile, utilizando o React Native e o Expo, onde era uma aplicativo 
                    de gerenciar manuais de utilização de placas eletrônicas para lavadeiras e refrigeradores."
        />
        <CardExp
            job="UniFBV"
            date="Fev 2019 - Dez 2024"
            img={Educ}
            exp="Engenharia da Computação"
            text=" Iniciei minha graduação em engenharia da computação no Centro Universitário UniFBV - Wyden,
                    onde cursei 4 períodos na faculdade. Por motivos financeiros e por conta da pandemia, 
                    acabei tendo que optar por trancar o curso."
        />
        <CardExp
            job="Consórcio Gpipa"
            date="Out 2016 - Abr 2021"
            img={Job}
            exp="Técnico em Eletrônica"
            text=" A empresa presta serviço para o governo federal, fazendo o rastreamento dos carros pipa e a monitoração das entregas de água no sertão. 
                    Comecei estagiando nesta empresa, e após seis meses fui contratado como técnico. 
                    Comecei realizando análises nos equipamentos da empresa, onde tínhamos que avaliar tanto a parte eletrônica, 
                    quanto a parte de software do equipamento."

            text2="Após um ano fui para área de manutenção, onde os equipamentos que foram diagnósticos com falha, iam para reparo, 
                    onde tínhamos que encontrar o motivo e corrigir para que o equipamento fosse enviado para campo. 
                    epois de algum tempo também fiquei responsável por auxiliar e supervisionar as equipes de manutenção e de análise, 
                    responsável pelos insumos e a garantia da entrega dos equipamentos."
        />
        <CardExp
            job="Aluno Olímpico"
            date="Jan 2015 - Out 2015"
            img={Educ}
            exp="Robótica Móvel"
            text=" Entrei na competição na modalidade de robótica móvel, a equipe consistiam em uma dupla, 
                    um responsável pela parte mecânica e outro pelo software. 
                    Fiquei responsável pelo software onde utilizava uma IDE própria e uma programação por blocos ou em C, 
                    e como líder da equipe. Participamos de alguns campeonatos locais e chegamos até a estadual."

            text2="A competição se resumia a receber uma tarefa, onde o robô por exemplo, 
                    teria que levar determinada peça de uma cor especifica até o local daquela respectiva cor, desviando de possíveis obstáculos.
                    Durante este período ocorreu uma parceria do SENAI Areais com a empresa CESAR do Porto Digital em Recife, 
                    onde passei por um período de 2 meses de aprendizado no CESAR."
        />
        <CardExp
            job="SENAI PE"
            date="Ago 2013 - Dez 2014"
            img={Educ}
            exp="Técnico em Eletrônica"
            text=" Curso técnico onde aprendi como funciona os produtos eletrônicos e como projeta-los, 
                    também meu primeiro contato com programação de baixo nível, utilizamos a linguagem C para aprendizado e para nossos projetos."
            
            text2="Aprendi também a programar um dispositivo industrial conhecido como CLP, utilizando sua própria linguagem LADDER. 
                    Na parte de Soft Skills tive aula sobre gestão de pessoas, onde aprendi sobre liderança e comunicação com a equipe."
        />

    </div>
  );
}
