import NavBar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center h-screen w-screen bg-[#ededed]">
        <a href="http://localhost:3000/feed">
          <img className="mr-37px mt-19px" src="exitProfile.svg" alt="Botão para sair da pagina do peril" />
        </a>
        <div className="pt-151px w-646px flex flex-col bg-[#3EEE9A]">
          <div className="w-150px h-150px rounded-full relative z-10 left-[67px] top-[-76px]">
            <a href="http://localhost:3000/profile">
              <img className="rounded-full" src="morty.jpg" alt="profile image" /></a>
          </div>
          <div className=" w-646px flex flex-col h-screen absolute bg-[#FFFFFF]">
            <div className="text-#222E50 font-questrial pl-67px pb-6 mt-88px border-b-2 border-[#7E7E7E]">
              <h1 className="font-bold text-xl ">Morty Games</h1>
              <div className="ml-[-4px] mt-0.5 flex justify-start items-center ">
                <img className="w-6" src="office.png" alt="" />
                <p className="font-normal text-sm ml-3">Ciência da Computação / Dept. Ciência da Computação</p>
              </div>
              <div className="ml-[-2px] mt-0.5 flex justify-start items-center">
                <img className="w-6" src="letter.png" alt="" />
                <p className="font-normal text-sm ml-2.5">Morty.gamer.23@cjr.org.br</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>

      </div>
    </>
  );
}
