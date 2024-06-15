"use client";
import Comentario from "../modal/Comentario";
import Editar from "../modal/Editar";
import Comment from "../components/Comment"
import React, {useState} from "react";


const Respostas: React.FC = () => {

    const [isModalComentVisible, setIsModalComentVisible] = useState<boolean>(false);
    const [isModalEditVisible, setIsModalEditVisible] = useState<boolean>(false);
  
    const openModalComent = () => setIsModalComentVisible(true);
    const closeModalComent = () => setIsModalComentVisible(false);  

    const openModalEdit = () => setIsModalEditVisible(true);
    const closeModalEdit = () => setIsModalEditVisible(false);  

    return (
        <div className="w-[630px] bg-[#3EEE9A] rounded-[36px] font-questrial ml-2 mt-3.5 mb-2.5">
            <Comment></Comment>
            <div>
                <div className="w-[630px] font-questrial border-x border-[#7E7E7E] border-b flex flex-col min-h-full bg-[#FFFFFF]" />
                    <div className="flex border-b border-[#7E7E7E]" />
                        <div className="flex ml-20 items-center mt-3.5">
                            <a href="http://localhost:3000/profile">
                                <img className="rounded-full w-12 " src="bart.png" alt="profile image" />
                            </a>
                            <h1 className="font-bold text-[#000000] text-xs ml-2.5">
                                <a href="http://localhost:3000/profile">Bart Simpson</a>
                                <span className="text-[#71767B] font-black"> · <span className="font-medium">17/04/2024, ás 21:42</span> ·
                                    <span className="font-bold">João Frango</span> · <span className="font-bold">Surf</span>
                                </span>
                            </h1>
                        </div>
                        <div className="flex w-[523px] ml-36 mb-5">
                        <p className="text-[#222E50] text-xs font-medium">
                            Pode cre, falou tudo
                        </p>
                        </div>
                    <div className="flex w-[500px] font-questrial border-x border-[#7E7E7E] border-b flex flex-col min-h-full bg-[#FFFFFF] ml-16 mb-5" />
                    <div className="flex ml-20 items-center mt-3.5">
                            <a href="http://localhost:3000/profile">
                                <img className="rounded-full w-12 " src="bart.png" alt="profile image" />
                            </a>
                            <h1 className="font-bold text-[#000000] text-xs ml-2.5">
                                <a href="http://localhost:3000/profile">Bart Simpson</a>
                                <span className="text-[#71767B] font-black"> · <span className="font-medium">17/04/2024, ás 21:42</span> ·
                                    <span className="font-bold">João Frango</span> · <span className="font-bold">Surf</span>
                                </span>
                            </h1>
                        </div>
                        <div className="flex w-[523px] ml-36 mb-5">
                        <p className="text-[#222E50] text-xs font-medium">
                            Pode cre, falou tudo
                        </p>
                        </div>
                    <div className="flex w-[500px] font-questrial border-x border-[#7E7E7E] border-b flex flex-col min-h-full bg-[#FFFFFF] ml-16 mb-5" />
 
            </div>
        </div>
    )
};

export default Respostas;