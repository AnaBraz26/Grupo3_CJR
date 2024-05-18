import NavBar from "../Navbar";
import React from "react";

export default function Profile() {
        
    return (
      <>
        <NavBar/>
      <div className="flex items-center justify-center h-32">
        <div className="w-1/2 ">
          <h1 className="text-[25px] relative left-[150px]"> Novos professores </h1>
        </div>
        <img className="w-8 ml-64" src="pesquisa.png" alt="Pesquisar Professor"></img>    
        <div className="w-1/2 flex">   
            <div className="m-auto">
              <input className=" mr-20 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" placeholder="Pesquisar Professor"></input>
            </div>
        </div>
      </div>
 
        {/* <div className="border-[1px]-solid border-radius-[8px] width-[200px] margin-[10px] text-align-center box-shadow-0 [2px] [5px]">
          {/* <img src="allmight.jpg" alt="Foto do professor" className="width-[100px] height-auto border-top-left-radius-[8px] border-top-right-radius-[8px] margin-top-[10px]" /> */}
          {/* <div className="padding-[10px] font-size-[1.2em] margin-[10px]">
          </div>  */}
          {/* <h2>Nome do Professor</h2>
          <h3>Matéria</h3> */}
        {/* </div> */}
        
        <div className="border-t-4 border-red-300 mt-80">
          <h1 className="text-[25px] relative top-[20px] left-[150px]"> Todos os professores </h1>
        </div>
      </>

    );
  }
