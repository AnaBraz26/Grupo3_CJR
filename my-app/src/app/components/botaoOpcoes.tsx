"use client"
import React from "react";

const BotaoOpcoes = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="m-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-40 h-14 rounded-16px border-2 border-white mr-14 bg-[#00ABED] shadow-custom duration-500 hover:duration-500 hover:bg-[#0077B5] mt-8"
      >
       <h1 className="font-normal text-2xl font-questrial text-white text-center"> Ordenar </h1>
      </button>
      {isOpen && (
              <div className="absolute mt-2 w-52 bg-transparent rounded-md origin-top-right divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#" className="block w-50 h-10 rounded-16px border-2 border-white mr-14 bg-[#00ABED] shadow-custom duration-500 hover:duration-500 hover:bg-[#0077B5]" role="menuitem">
              <h1 className="justify-center ml-12 mt-1">Nome</h1>
              </a>
              
              <a href="#" className="block w-50 h-10 rounded-16px border-2 border-white mr-14 bg-[#00ABED] shadow-custom duration-500 hover:duration-500 hover:bg-[#0077B5]" role="menuitem">
              <h1 className="justify-center ml-11 mt-1">Matéria</h1>
              </a>
              
              <a href="#" className="block w-50 h-10 rounded-16px border-2 border-white mr-14 bg-[#00ABED] shadow-custom duration-500 hover:duration-500 hover:bg-[#0077B5]" role="menuitem">
                <h1 className="justify-center ml-10 mt-1">Recentes</h1>
              </a>
              
              <a href="#" className="block w-50 h-10 rounded-16px border-2 border-white mr-14 bg-[#00ABED] shadow-custom duration-500 hover:duration-500 hover:bg-[#0077B5]" role="menuitem">
                <h1 className="justify-center ml-11 mt-1">Antigas</h1>
              </a>      
          </div> 
      )}
    </div>
  );
};

export default BotaoOpcoes;