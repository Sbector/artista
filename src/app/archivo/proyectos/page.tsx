import Card from "@/app/_components/Card";
import Wrapper from "@/app/_components/Wrapper";

import { Proyectos } from "@/app/constants";

export default function ProyectosPage() {



    return (
        <div>
            <Wrapper>
                <ul>
                    {Proyectos.map(({ title, year, imgsrc, imgalt, description }) => (
                        <li key={title}>
                            <Card title={title} year={year} imgsrc={imgsrc} imgalt={imgalt} description={description}></Card>
                        </li>
                    ))}
                </ul>

            </Wrapper>
        </div>
    )
}