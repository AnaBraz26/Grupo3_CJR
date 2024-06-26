"use client";
import NavBar from "../components/Navbar";
import Comment from "../components/Comment"
import Pfedit from "../modal/Pfedit";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const Profile: React.FC = () => {

  const router = useRouter()
  if (!localStorage.getItem("token")){
    router.push('/feed')
  }
  const [usuario, setUsuario] = useState({email: '',
    department: '',
    name: '',
    course: ''})

  const token = localStorage.getItem("token")
  const UserId = localStorage.getItem("UserId")

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);  

  useEffect(()=>{
    axios.get(`http://localhost:2000/users/${UserId}`)
      .then((data)=>{
        setUsuario(data.data)

      })
      .catch((err)=>{
        console.log(err.response)
      })
  },[])



  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center items-start h-screen w-screen bg-[#ededed]">
        <a href="http://localhost:3000/feed">
          <img className="mr-[37px] mt-[19px]" src="exitProfile.svg" alt="Botão para sair da página do perfil" />
        </a>
        <div className="w-[646px] flex flex-col bg-[#3EEE9A]">
          <div className="w-[150px] h-[150px] rounded-full relative z-2 left-[67px] top-[75px]">
            <a href={`http://localhost:3000/profile`}>
              <img className="rounded-full" src="morty.jpg" alt="profile image" />
            </a>
          </div>

          <div className="w-[646px] font-questrial border-x border-[#7E7E7E] border-b flex flex-col min-h-full bg-[#FFFFFF]">
            <div className="flex border-b border-[#7E7E7E]">
              <div className="text-[#222E50] pl-[67px] pb-6 mt-[88px] ">
                <h1 className="font-bold text-xl">{usuario.name}</h1>
                <div className="ml-[-4px] mt-0.5 flex justify-start items-center">
                  <img className="w-6" src="office.png" alt="" />
                  <p className="font-normal text-sm ml-3">{usuario.department}</p>
                </div>
                <div className="ml-[-2px] mt-0.5 flex justify-start items-center">
                  <img className="w-6" src="letter.png" alt="" />
                  <p className="font-normal text-sm ml-2.5">{usuario.email}</p>
                </div>
              </div>
              <div className="mt-3 w-[154px] font-questrial">
                <button onClick={openModal} className="w-[154px] h-[37px] rounded-2xl border-2 border-[#222E50] bg-[#A4FED3] font-normal text-base shadow-custom mb-2">Editar Perfil</button>
                <Pfedit isVisible={isModalVisible} onClose={closeModal}/>

                <button className="w-[154px] h-[37px] rounded-2xl border-2 border-[#222E50] bg-[#FEA4A4] font-normal text-base shadow-custom">Excluir Perfil</button>
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
};

export default Profile;
