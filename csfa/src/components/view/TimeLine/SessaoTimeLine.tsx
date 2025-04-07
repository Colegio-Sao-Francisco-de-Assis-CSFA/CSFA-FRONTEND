import  React from 'react';
import TimelineItem from './TimeLineItem';


export default function TimeLine() {


    const TimeLineContent = [
        {
            year: "1985",
            title: "Fundação",
            description: "Inauguração do Colégio Educacional com apenas 3 salas de aula e 45 alunos.",
            isLeft: true,
        },
        {
            year: "1992",
            title: "Expansão",
            description: "Ampliação do Colégio Educacional para 12 salas de aula e 400 alunos.",
            isLeft: false,
        },
        {
            year: "2000",
            title: "Inovação",
            description: "Primeira turma de ensino médio.",
            isLeft: true,
        },
        {
            year: "2005",
            title: "Qualidade",
            description: "Obtenção do selo de qualidade pela ABME.",
            isLeft: false,
        }
    ]


    return(
        <div className="w-full h-auto mb-20">

            <h2 className="section-title text-center mb-12">Nossa Trajetória</h2>
        
            <div className="relative">

                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
                
                {/* Timeline items */}
                <div className="grid gap-8">
                    {
                        TimeLineContent.map((item, index) => (
                            <TimelineItem 
                                // key={item.title + index}
                                year={item.year} 
                                title={item.title} 
                                description={item.description}
                                isLeft={item.isLeft}
                            />
                        ))
                    }
                    
                </div>
                
            </div>
        </div>
    )


}