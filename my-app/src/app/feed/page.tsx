import NavBar from "../components/Navbar";
import React, { useState } from "react";
import CardProfessor from "../components/cardProfessor";
import BotaoOpcoes from "../components/botaoOpcoes";

export default function Feed() {
        
    return (
      <>
        <NavBar/>
      <div className="flex items-center justify-center h-32">
        <div className="w-1/2 ">
          <h1 className="text-[25px] relative left-[150px]"> Novos professores </h1>
        </div>
        
        {/* <img className="w-8 ml-64" src="pesquisa.png" alt="Pesquisar Professor"></img>     */}
        
        <div className="w-1/2 flex">   
            <div className="m-auto">
              <input className="mr-20 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                      placeholder="Pesquisar Professor"></input>
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
            <div className="m-auto">
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
  }

