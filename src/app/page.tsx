import Button from "./_components/Button"

export default function Home() {
    return (
        <div>
            <h1>Bienvenide!</h1>
            <h2>A continuación puedes navegar por las páginas de este sitio</h2>
            <Button href="./about">about</Button>
            <Button href="./archivo">archivo</Button>
            <Button href="./blog">blog</Button>
            <Button href="./contacto">contacto</Button>
        </div>
    )
}