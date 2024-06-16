import React, { useState} from "react";
import { Formik, Form, Field } from "formik";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as Yup from "yup";


interface Modal_editProps{
    isVisible: boolean;
    onClose: () => void;
}

const validationSchema = Yup.object({
    content: Yup.string().required("campo obrigatório"),
  });

const initualValues = { content: "" }

function Modal_editar({onClose}: Modal_editProps){

const [content, setContent] = useState("");

const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
};

const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = { content: content }

    axios.patch("http://localhost:2000/comments", body)
        .then(() => {
            console.log("put body")
            //router.push('/')
    
        })
        .catch((err) => {
            console.log(err)
            })
    
};


    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col m-10 items-center bg-green-300 w-1/2 h-3/4 p-5 rounded-xl">
                <h2 className="text-xl mb-4" > Editar Comentário </h2>
                
                <div className="flex flex-col mt-5 w-full h-full overflow-hidden">
                    <div className="w-full bg-green-300 rounded-xl overflow-auto h-full">
                    <Formik initialValues={initualValues} onSubmit= {(e:any) => handleSubmit(e)}>
                        <Form onSubmit={(e:any) => handleSubmit(e)}>
                        <h2> Edite seu comentario:</h2>
                            <Field
                            value={content}
                            onChange={handleContentChange}
                            type="comentario"
                            content="content"
                            placeholder="escreva aqui!"
                            id= "content"
                            className="mt-1 block w-full px-3 py-20 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            />

                            <div className="w-1/2 flex justify-center">
                                <button type="button" onClick={onClose} className="flex m-10 items-center px-6 py-3 bg-red-500 text-white rounded-md"> Cancelar </button>
                                <button type="submit" className="flex m-10 items-center px-6 py-3 bg-blue-500 text-white rounded-md"> Editar </button>
                            </div>
                        </Form>
                    </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal_editar;