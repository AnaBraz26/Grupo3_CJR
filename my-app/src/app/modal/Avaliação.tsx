import React from "react";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';
import {useState} from 'react';
import { Formik, Form, Field } from "formik";

interface Modal_reviewProps{
    isVisible: boolean;
    onClose: () => void;
}

interface ReviewType{      
    professorId: number,
    disciplineId: number,
    userId: number,
    content: string
} 

const initualValues = {professorName: "", department: "", discipline: "", editorContent:""}

function Modal_review({onClose, isVisible}: Modal_reviewProps){
    const [professorName, setProfessorName] = useState('');
    const [department, setDepartment] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [review, setReview] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);
    
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

const handleSubmit = async (e:any) => {
    e.preventDefault();
    const evaluationData = {
        professorName: professorName,
        department: department,
        discipline: discipline,
        evaluation: editorContent,
    };
    const diciplineData = {
        name: discipline, 
        professorId: 0
    };
    const professorData ={
        name: professorName,
        department: department,
        disciplineId: 0
    }

    const reviewData: ReviewType = {
        professorId: 0,
        disciplineId: 0,
        userId: 0,
        content: editorContent
    };
    
    if(localStorage.getItem("UserId")){
        console.log(localStorage.getItem("UserId"))
        axios.post("http://localhost:2000/discipline", diciplineData )
            .then((data)=>{
                professorData.disciplineId = (data.data.id)
                axios.post('http://localhost:2000/professors', professorData)
                    .then((data)=>{
                        diciplineData.professorId = (data.data.id)
                        axios.put(`http://localhost:2000/discipline/${professorData.disciplineId}`, diciplineData)
                            .then((data)=>{
                                console.log(reviewData)
                                reviewData.professorId = (diciplineData.professorId)
                                reviewData.disciplineId = (professorData.disciplineId)
                                reviewData.userId = Number(localStorage.getItem("UserId"))
                                axios.post(`http://localhost:2000/reviews/`, reviewData)
                                .then((data)=>{
                                    setReview({ type: 'success', message: 'Avaliação enviada' });
                                    setModalVisible(false);
                                    setShowSuccessMessage(true);
                                    
                                    setTimeout(() => {
                                        setShowSuccessMessage(false);
                                        onClose();
                                    }, 4000)
                                    
                                })
                                .catch((err)=>{
                                    setReview({ type: 'error', message: 'Erro ao enviar avaliação' });
                                    setShowSuccessMessage(true);
                                    setModalVisible(true);
                                    console.log(err);
                                })

                            })
                            .catch((err)=>{
                                console.log(err);
                            })
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

};

    return(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="flex flex-col m-10 items-center bg-green-300 w-0,25 p-5 rounded-xl">
                <h1 className="text-xl mb-4" > Avaliação de Professor </h1>
                <Formik initialValues={initualValues} onSubmit= {(e:any) => handleSubmit(e)}>
                    <Form onSubmit={(e:any) => handleSubmit(e)}>
                        <h2> Coloque apenas o primeiro e último nome do professor:</h2>
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
                                <Field
                                value = {editorContent}
                                onChange={handleEditorChange}
                                type="review"
                                placeholder="Avaliação"
                                id="review"
                                className="block w-full px-3 py-7 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                />
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