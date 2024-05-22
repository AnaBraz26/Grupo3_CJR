import NavBar from "../components/Navbar";

export default function Profile() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center h-screen w-screen bg-[#ededed]">
        <a href="http://localhost:3000/feed">
          <img className="mr-37px mt-19px" src="exitProfile.svg" alt="Botão para sair da pagina do peril" />
        </a>
        <div className="pt-99px w-646px bg-[#3EEE9A]">


        </div>
      </div>
    </>
  );
}
