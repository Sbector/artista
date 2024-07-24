import Card from "@/app/_components/Card";
import TextWrapper from "@/app/_components/TextWrapper";

import { Proyectos } from "@/app/constants";

export default function ProyectosPage() {



    return (
        <div>
            <TextWrapper>
                <ul>
                    {Proyectos.map(({ title, year, imgsrc, imgalt, description }) => (
                        <li key={title}>
                            <Card title={title} 
                            year={year} 
                            imgsrc={imgsrc} 
                            imgalt={imgalt} 
                            description={description}></Card>
                        </li>
                    ))}
                </ul>

            </TextWrapper>
        </div>
    )
}