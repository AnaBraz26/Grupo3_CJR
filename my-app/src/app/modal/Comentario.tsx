import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})

interface ModalProps{
    isVisible: boolean;
    onClose: () => void;
}

const Modal_comentar: React.FC<ModalProps> = ({isVisible, onClose}) =>{
    const [editorContent, setEditorContent] = React.useState<string>('');

    if(!isVisible) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col m-10 items-center bg-green-300 w-1/2 h-3/4 p-5 rounded-xl">
                <h2 className="text-xl mb-4" > Fazer Comentário </h2>
                
                <div className="flex flex-col mt-5 w-full h-full overflow-hidden">
                    <div className="w-full bg-white rounded-xl overflow-auto h-full">
                        <ReactQuill
                            value={editorContent}
                            onChange={setEditorContent}
                            className="h-[70vh]" 
                        />
                     </div>
                </div>

                <div className="w-1/2 flex justify-center">
                    <button onClick={onClose} className="flex m-10 items-center px-6 py-3 bg-red-500 text-white rounded-md"> Cancelar </button>
                    <button onClick={onClose} className="flex m-10 items-center px-6 py-3 bg-blue-500 text-white rounded-md"> Comentar </button>
                </div>
            </div>
        </div>
    );
};

export default Modal_comentar;