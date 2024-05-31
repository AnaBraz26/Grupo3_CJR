import axios from "axios";


const getData = async () => {
    const data = await axios.get("http://localhost:5555")
    console.log(data)
    return data.data;
  }

export default async function Teste () {

    const data = await getData()
    console.log()

    return(
        <div>
            <ul>
                {data.map((discipline: any) => {
                    <li>
                        <p>{discipline.id}</p>
                        <p>{discipline.name}</p>
                        <p>{discipline.professorId}</p>
                    </li>
                })}
            </ul>
        </div>
    );
}