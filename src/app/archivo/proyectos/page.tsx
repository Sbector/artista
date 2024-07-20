import Card from "@/app/_components/Card";
import Wrapper from "@/app/_components/Wrapper";

import { Proyectos } from "@/app/constants";

export default function ProyectosPage() {



    return (
        <div>
            <Wrapper>
                {Proyectos.map(({ title, year, imgsrc, imgalt, description }) => (
                    <Card title={title} year={year} imgsrc={imgsrc} imgalt={imgalt} description={description}></Card>
                ))}
            </Wrapper>
        </div>
    )
}