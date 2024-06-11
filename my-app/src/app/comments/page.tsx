"use client";
import NavBar from "../components/Navbar";
import Respostas from "../components/Respostas";
import React, {useState} from "react";

const Comments: React.FC = () => {

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);  

  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center items-start h-screen w-screen bg-[#ededed]">
        <a href="http://localhost:3000/profile">
          <img className="mr-[37px] mt-[19px]" src="exitProfile.svg" alt="Botão para sair da página do perfil" />
        </a>
        <div className="w-[646px] flex flex-col bg-[#3EEE9A]">
            <div className="w-[646px] font-questrial border-x border-[#7E7E7E] border-b flex flex-col min-h-full bg-[#FFFFFF]">
            <h1 className="text-[#000000] font-extrabold text-base mt-3 ml-2 mb-2">Comentários</h1>
            <Respostas></Respostas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
