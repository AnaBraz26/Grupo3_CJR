"use client"; // top to the file

import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  email: Yup.string().email("email inválido inserido").required("campo obrigatório"),
  password: Yup.string().required("campo obrigatório"),
  username: Yup.string().required("campo obrigatório"),
  curso: Yup.string(),
  departamento: Yup.string()
});

const initualValues = { email: "", password: "", username: "", curso: "", departamento: "" }


const registerPage = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [course, setCourse] = useState("");
  const [department, setDepartment] = useState("");
  const router = useRouter()
  

  function submitionHandler(e: any) {
    e.preventDefault();
    const body = { name: name, email: email, password: password, course: course, department: department }
    console.log(body)
    console.log('aaaa')

    axios.post("http://localhost:2000/users", body)
      .then(() => {
        console.log("deu bom apenas tem que consertar o link tentei useRouter não funcionou não sei muito oq fazer")
        router.push('/')

      })
      .catch((err: any) => {
        console.log(err.response)
      })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full bg-gray-200 shadow-md rounded-lg overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/2 bg-gray-200">
            <img className="w-full h-full" src="image 1.png" alt="Erro ao carregar imagem!" />
          </div>
          <div className="w-1/2 flex">
            <div className="m-auto">
              <h2 className="w-96 h-16 text-center text-5x1 font-bold">Cadastro Usuário</h2>
              <Formik initialValues={initualValues} validationSchema={validationSchema} onSubmit={(e: any) => submitionHandler(e)}>
                <Form className="flex flex-col" onSubmit={(e: any) => submitionHandler(e)} >
                  <div className="mb-4">
                    <Field
                      required
                      value={name}
                      onChange={(e: any) => { setName(e.target.value) }}
                      type="username"
                      name="username"
                      placeholder="Nome"
                      id="username"
                      className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      required
                      value={email}
                      onChange={(e: any) => { setEmail(e.target.value) }}
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      required
                      value={password}
                      onChange={(e: any) => { setPasword(e.target.value) }}
                      type="password"
                      name="password"
                      placeholder="Senha"
                      id="password"
                      className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      value={course}
                      onChange={(e: any) => { setCourse(e.target.value) }}
                      type="username"
                      name="curso"
                      placeholder="Curso"
                      id="curso"
                      className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <Field
                      value={department}
                      onChange={(e: any) => { setDepartment(e.target.value) }}
                      type="username"
                      name="departamento"
                      placeholder="Departamento"
                      id="departamento"
                      className="mt-1 block w-full px-3 py-2 border bg-white border-black shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    />
                  </div>
                  <div className="inline-flex mb-4">

                    <button className="w-full shadow-sm border-solid border-2 border-black bg-emerald-300 text-blue-950 py-2 px-4 hover:bg-emerald-200 focus:bg-emerald-600 focus:text-emerald-100 rounded-md" type="submit">
                      Criar Conta
                    </button>

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

export default registerPage;