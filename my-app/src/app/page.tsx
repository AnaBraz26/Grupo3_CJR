"use client"; // top to the file
import Image from "next/image";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import Link from "next/link";

const validationSchema = Yup.object({
  email: Yup.string().email("email inválido inserido").required("campo obrigatório"),
  password: Yup.string().required("campo obrigatório")
});

const initualValues = { email: "", password: ""}

const submitionHandler = (values: any) => {
  console.log(values);
}

export default function Home() {
  return (
          <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="w-full bg-gray-200 shadow-md rounded-lg overflow-hidden">
              <div className="flex h-full">
                <div className="w-1/2 bg-gray-200">
                  <img className="w-full h-full" src="image 1.png" alt="Erro ao carregar imagem!"/>
                </div>
                <div className="w-1/2 flex">
                  <div className="m-auto">
                    <h2 className="w-96 h-16 text-center text-5x1 font-bold">Avaliação de Professores</h2>
                    <Formik initialValues={initualValues}  validationSchema={validationSchema} onSubmit={submitionHandler}>
                      <Form className="flex flex-col">
                        <div className="mb-4">
                          <Field 
                          type = "email" 
                          name = "email" 
                          placeholder = "Email" 
                          id = "email"
                          className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          />
                        </div>  
                        <div className="mb-4">  
                          <Field
                          type = "password" 
                          name = "password" 
                          placeholder = "Senha" 
                          id = "password"
                          className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          />
                        </div> 
                        <div className="inline-flex mb-4">
                          <a href="http://localhost:3000/feed"
                          className="w-full shadow-sm border-solid border-2 border-black bg-emerald-300 text-blue-950 py-2 px-4 hover:bg-emerald-200 focus:bg-emerald-600 focus:text-emerald-100 rounded-md"
                          >Entrar
                          <button
                          type = "button"
                          > 
                          </button>
                          </a>
                        </div>  
                        <div className="inline-flex mb-4">
                          <a 
                          href="http://localhost:3000/register" 
                          className="w-full shadow-sm border-solid border-2 border-black bg-emerald-300 text-blue-950 py-2 px-4 hover:bg-emerald-200 focus:bg-emerald-600 focus:text-emerald-100 rounded-md"
                          >   
                          Não possue conta? Cadastre-se! 
                          <button
                          type = "button"> 
                          </button>
                          </a>
                        </div> 
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>              
            </div>
          </div>
      );
}
