"use client"; // top to the file
import Image from "next/image";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";

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
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
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
                          />
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
