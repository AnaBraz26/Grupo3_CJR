import Image from "next/image"

interface cardProfessorProps {
    nome: string,
    curso: string,
    imgScr: string,
}

const CardProfessor: React.FC<cardProfessorProps> = ({
    nome,
    curso,
    imgScr
    }) => {
    return(
        <article className="flex flex-col m-5 items-center bg-gray-200 w-fill p-5 rounded-xl">
            <Image className="rounded-lg" 
                   src = {imgScr}
                   alt ={"profile picture"} 
                   height={100}
                   width={100}></Image>
            <h1 className="text-x1 font-medium mt-2 mb-2">{nome}</h1>
            <h2 className="text-black/70">{curso}</h2>
        </article>
    )
}

export default CardProfessor;