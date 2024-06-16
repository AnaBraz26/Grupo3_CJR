import { useRouter } from "next/navigation";

export default function NavBar() {
    const token = localStorage.getItem("token")
    const UserId = localStorage.getItem("UserId")
    const router = useRouter()

    function deslogar() {
        localStorage.clear();
        router.push('/')
    }

    return (
        <div className="flex justify-between items-center h-99px bg-[#A4FED3] ">
            <div className="flex-wrap ml-14">
                <a href="https://www.unb.br/">
                    <img className="w-92px cursor-pointer" src="unbLogo.png" alt="Logo da UNB" />
                </a>
            </div>
            {token ?
                <div className="flex items-center justify-round pr-9">
                    <img className="cursor-pointer w-45px h-45px mr-74px" src="notification.png" alt="Icone para olhar notificação" />
                    <a href={`http://localhost:3000/profile`}>
                        <img className="cursor-pointer rounded-100px mr-19px w-64px" src="morty.jpg" alt="Foto de pergil" />
                    </a>
                    <img onClick={() => deslogar()} className="cursor-pointer" src="exit.svg" alt="Icone de saída" />
                </div> :
                <a href="http://localhost:3000/">
                    <button className="w-154px h-14 rounded-16px border-2 border-white mr-14 bg-[#00ABED] shadow-custom duration-500 hover:duration-500 hover:bg-[#0077B5]" >
                        <h1 className="font-normal text-30px font-questrial text-white text-center">Login</h1>
                    </button>
                </a>}


        </div>
    );
}

