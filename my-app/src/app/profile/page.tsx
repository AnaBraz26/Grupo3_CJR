import NavBar from "../components/Navbar";
import Comment from "../components/Comment"

export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center items-start h-screen w-screen bg-[#ededed]">
        <a href="http://localhost:3000/feed">
          <img className="mr-[37px] mt-[19px]" src="exitProfile.svg" alt="Botão para sair da página do perfil" />
        </a>
        <div className="w-[646px] flex flex-col bg-[#3EEE9A]">
          <div className="w-[150px] h-[150px] rounded-full relative z-10 left-[67px] top-[75px]">
            <a href="http://localhost:3000/profile">
              <img className="rounded-full" src="morty.jpg" alt="profile image" />
            </a>
          </div>
          <div className="w-[646px] font-questrial border-x border-[#7E7E7E] border-b flex flex-col min-h-full bg-[#FFFFFF]">
            <div className="text-[#222E50] pl-[67px] pb-6 mt-[88px] border-b border-[#7E7E7E]">
              <h1 className="font-bold text-xl">Morty Games</h1>
              <div className="ml-[-4px] mt-0.5 flex justify-start items-center">
                <img className="w-6" src="office.png" alt="" />
                <p className="font-normal text-sm ml-3">Ciência da Computação / Dept. Ciência da Computação</p>
              </div>
              <div className="ml-[-2px] mt-0.5 flex justify-start items-center">
                <img className="w-6" src="letter.png" alt="" />
                <p className="font-normal text-sm ml-2.5">Morty.gamer.23@cjr.org.br</p>
              </div>
            </div>
            <h1 className="text-[#000000] font-extrabold text-base mt-3 ml-2 mb-2">Publicações</h1>
            <Comment></Comment>
            <Comment></Comment>

          </div>


        </div>
      </div>
    </>
  );
}
