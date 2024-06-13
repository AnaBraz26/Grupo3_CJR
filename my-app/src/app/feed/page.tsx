"use client";
import NavBar from "../components/Navbar";
import React, { useState } from "react";
import CardProfessor from "../components/cardProfessor";
import BotaoOpcoes from "../components/botaoOpcoes";
import Avaliação from "../modal/Avaliação";
import {Formik, Form, Field} from "formik";
import axios from "axios";
import * as Yup from "yup";
import {useRouter} from "next/navigation";

interface SearchResult{
  id: number;
  name: string;
  otherField: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
});

const initualValues = {name: ""}

const Feed: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);  

    const [name, setName] = useState("");
    const[searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [error, setError] = useState<string| null> (null);
    const router = useRouter();

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try{
        const response = await axios.get("http://localhost:2000/professors?name=${name}`");
        setSearchResults(response.data);}
        catch(err){
          console.error(err);
          setError('Não encontrado');
          setTimeout(() => {
            setError(null);
          }, 5000);
        }
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      }

      const handleRedirect = () => {
        router.push('/')
      }
    

   return (
      <>
        <NavBar/>
      <div className="flex items-center justify-center h-32">
        <div className="w-1/2 ">
          <h1 className="text-[25px] relative left-[150px]"> Novos professores </h1>
        </div>
        
        <div className="w-1/2 flex">   
            <div className="m-auto">
              <form onSubmit={handleSearch}>
              <input type="text" value={name} onChange={handleChange} className="mr-20 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                      placeholder="Pesquisar Professor"></input>
              </form>

              {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4 flex justify-between items-center transition-opacity duration-2000 ease-in-out opacity-100">
                  <p>Ocorreu um erro: {error}</p>
              </div>
              )}

              <ul>
                {searchResults.map((result) => (
                  <li key={result.id}>
                    {result.name} - {result.otherField}
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>

      <div className="flex flex-wrap ml-32">
        <CardProfessor
          nome = "All Might"
          curso = "Educação Física"
          imgScr = "/allmight.jpg"
          />

        <CardProfessor
          nome = "Gojo satoru"
          curso = "Expansão de Domínio"
          imgScr = "/gojo.jpeg"
          />

        <CardProfessor
          nome = "Professor nome"
          curso = "Nome da matéria"
          imgScr = "/user.png"
          />

        <CardProfessor
          nome = "Professor nome"
          curso = "Nome da matéria"
          imgScr = "/user.png"
          />
      </div>

      {/* <div>
        {professores.map(professor) => (
          <cardProfessor
            nome = {cardProfessor.nome}
            curso = {cardProfessor.curso}
            imgScr = {cardProfessor.imgScr}

        )}

      </div>
  */}       

        <div className="border-t-4 border-red-300 mt-20 flex items-center justify-center">
          <h1 className=" w-1/2 flex text-[25px] relative top-[20px] left-[150px]"> Todos os professores </h1>
                  
          <div className="w-1/2 flex">  
            <div className="justify-center">

              <button onClick={openModal} className="w-40 h-14 rounded-16px border-2 border-white mr-14 bg-[#00ABED] shadow-custom duration-500 hover:duration-500 hover:bg-[#0077B5] mt-8 ml-32"> 
              <h1 className="font-normal text-l font-questrial text-white text-center">Nova Avaliação</h1>
              </button>

              {isModalVisible && <Avaliação onClose={closeModal}/>}
              {/* <Avaliação isVisible={isModalVisible} onClose={closeModal}/>           */}
            </div> 

            <div className="justify-center">
              <BotaoOpcoes></BotaoOpcoes>
            </div>

          </div>

        </div>

        <div className="flex flex-wrap mt-10 ml-32">
        <CardProfessor
          nome = "All Might"
          curso = "Educação Física"
          imgScr = "/allmight.jpg"
          />

        <CardProfessor
          nome = "Gojo satoru"
          curso = "Expansão de Domínio"
          imgScr = "/gojo.jpeg"
          />

        <CardProfessor
          nome = "Professor nome"
          curso = "Nome da matéria"
          imgScr = "/user.png"
          />

        <CardProfessor
          nome = "Professor nome"
          curso = "Nome da matéria"
          imgScr = "/user.png"
          />
        
        <CardProfessor
          nome = "Professor nome"
          curso = "Nome da matéria"
          imgScr = "/user.png"
          />
        
        <CardProfessor
          nome = "Professor nome"
          curso = "Nome da matéria"
          imgScr = "/user.png"
          />
      </div>
      </>


    );
  };

export default Feed;
   
