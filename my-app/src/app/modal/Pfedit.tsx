import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})

interface ModalProps{
    isVisible: boolean;
    onClose: () => void;
}

const Modal_pfedit: React.FC<ModalProps> = ({isVisible, onClose}) =>{
    const [editorContent, setEditorContent] = React.useState<string>('');

    if(!isVisible) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col m-10 items-center bg-gray-300 w-1/3 h-3/4 p-5 rounded-xl">
                <h1 className="text-xl mb-4" > Editar Perfil</h1>
                
                <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                placeholder="Nome"></input>
                         
                <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                placeholder="E-mail"></input>
                           
                <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                placeholder="Curso"></input>
        
                <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                placeholder="Departamento"></input>
  
                <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                placeholder="Senha Atual"></input>

                <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                placeholder="Nova senha"></input>
      
                <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                placeholder="Confirmar nova senha"></input>
                

                <div className="w-1/2 flex justify-center">
                    <button onClick={onClose} className="flex m-10 items-center px-6 py-3 bg-red-500 text-white rounded-md"> Cancelar </button>
                    <button onClick={onClose} className="flex m-10 items-center px-6 py-3 bg-blue-500 text-white rounded-md"> Salvar </button>
                </div>
            </div>
        </div>
    );
};

export default Modal_pfedit;