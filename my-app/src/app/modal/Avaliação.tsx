import React from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import axios from 'axios';
import {useState} from 'react';
import { Formik, Form, Field } from "formik";

interface Modal_reviewProps{
    onClose: () => void;
}

const initualValues = {professorName: "", department: "", discipline: "", editorContent:""}

function Modal_review({onClose}: Modal_reviewProps){
    const [professorName, setProfessorName] = useState('');
    const [department, setDepartment] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [review, setReview] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
//}

const handleProfessorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfessorName(e.target.value);
};

const handleDeparmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartment(e.target.value);
};

const handleDisciplineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscipline(e.target.value);
};

const handleEditorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditorContent(e.target.value);
};

const handleSubmit = async () => {
    const evaluationData = {
        professorName: professorName,
        department: department,
        discipline: discipline,
        evaluation: editorContent,
    };

    axios.post('http://localhost:2000/reviews', evaluationData)
      .then(() => {
        setReview({ type: 'success', message: 'Avaliação enviada com sucesso!' });
        setTimeout(() => {
          setReview(null);
          onClose();
        }, 3000);
      })
      .catch(() => {
        setReview({ type: 'error', message: 'Ocorreu um erro ao enviar a avaliação. Por favor, tente novamente.' });
      })
};

// const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})

// interface ModalProps{
//     isVisible: boolean;
//     onClose: () => void;
// }

//const Modal_review: React.FC<ModalProps> = ({isVisible, onClose}) =>{
// const [editorContent, setEditorContent] = React.useState<string>('');

// if(!isVisible) return null;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col m-10 items-center bg-green-300 w-0,25 p-5 rounded-xl">
                <h1 className="text-xl mb-4" > Avaliação de Professor </h1>
                <Formik initialValues={initualValues} onSubmit= {(e:any) => handleSubmit()}>
                    <Form onSubmit={(e:any) => handleSubmit()}>
                        <h2> Coloque apenas o primeiro e último nome do professor:</h2>
                        {/* <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                            placeholder="Nome Professor" value={professorName} onChange={handleProfessorNameChange}></input>
                        */}
                        <Field
                         value={professorName}
                         onChange={handleProfessorNameChange}
                         type="review"
                         name="name"
                         placeholder="Nome do Professor(a)"
                         id= "name"
                         className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                         />

                        <h2 className="mt-5"> Coloque o nome completo do departamento:</h2>
                        {/* <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                            placeholder="Departamento" value={department} onChange={handleDeparmentChange}></input>
                        */}
                        <Field 
                         value={department}
                         onChange={handleDeparmentChange}
                         type="review"
                         name="departamento"
                         placeholder="Departamento"
                         id= "departamento"
                         className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                         />
                        
                        <h2 className="mt-5"> Coloque o nome completo da Disciplina:</h2>                
                        {/* <input className="justify-center mt-5 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" 
                        placeholder="Disciplina" value={discipline} onChange={handleDisciplineChange}></input>
                         */}
                         <Field
                         value={discipline}
                         onChange={handleDisciplineChange}
                         type="review"
                         name="discipline"
                         placeholder="Disciplina"
                         id= "discipline"
                         className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                         />

                        <h2 className="mt-5"> Escreva sua Avaliação:</h2>    
                        <div className="flex flex-col mt-5 w-full h-full overflow-hidden">
                            {/* <div className="w-full bg-white rounded-xl overflow-auto h-1/5"> */}
                                {/* <ReactQuill
                                    value={editorContent}
                                    onChange={setEditorContent}
                                    className="h-[8vh]" 
                                /> */}
                                <Field
                                value = {review}
                                onChange={setEditorContent}
                                type="review"
                                placeholder="Avaliação"
                                id="review"
                                className="block w-full px-3 py-7 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                />
                            {/* </div> */}
                        </div>
                        
                        <div className="w-1/2 flex justify-center">
                            <button type="button" onClick={onClose} className="flex mt-5 ml-52 items-center justify-center px-6 py-3 bg-red-500 text-white rounded-md"> Cancelar </button>
                            <button type="submit" className="flex ml-20 mt-5 justify-center items-center px-6 py-3 bg-blue-500 text-white rounded-md"> Avaliar </button>
                        </div>
                    </Form>
                </Formik>

                {review &&(
                    <div className={`mt-4 p-4 rounded ${review.type === 'success' ? 'bg-green-200' : 'bg-red-200'}`}>
                    {review.message}
                    </div>                 
                )}
            </div>
        </div>
    );
};

export default Modal_review;