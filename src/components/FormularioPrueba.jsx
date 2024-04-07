import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import significados from "./data/significados.json";
import axios from 'axios';
import Swal from 'sweetalert2';

export default function PruebaReact() {

  const [resultado, setResultado] = useState("")

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    realizarPrueba(data)
  }

  async function realizarPrueba(data) {
    try {
      const res = await getData(data)
      setResultado(res.data.resultado_prueba)
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Prueba realizada"
      });
    } catch (error) {
      Swal.close()
      Swal.fire({
        title: "Hubo un error...",
        text: `${error.code}. Tienes que tener la API activa para que funcione. Visita github.com/jeantpdev/api-prueba-cancer-mama`,
        icon: "error"
      });
    }
  }

  async function getData(data) {

    const dataEnviar = {
      "age": data.age,
      "menopause": data.menopause,
      "tumorSize": data.tumorSize,
      "invNodes": data.invNodes,
      "nodeCaps": data.nodeCaps,
      "degMalig": data.degMalig,
      "breast": data.breast,
      "breastQuead": data.breastQuead,
      "irradiat": data.irradiat
    }
    console.log(dataEnviar)

    const res = axios({
      method: "POST",
      url: " http://127.0.0.1:5700/enviar-datos-prueba/",
      data: dataEnviar
    });
    return res

  }


  return (


    <div className="flex flex-col-reverse content-center gap-y-5 md:flex-row-reverse md:mt-56 rounded-lg shadow-lg py-6 px-5">

      <div className="md:w-1/2">

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap justify-center">

          <div className="flex flex-wrap gap-x-5 md:gap-x-5 md:gap-y-3 justify-center">

            {Object.entries(significados).map(([key, value]) => (
              <div key={key} className="">
                <label className="block text-gray-700 text-xm mb-2" htmlFor={key}>
                  {key}
                </label>
                <div className="relative">
                  <select
                    {...register(`${key}`)}
                    name={key}
                    className="block appearance-none w-56 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>Selecciona una opcion</option>
                    {Object.entries(value).map(([clave, valor]) => (
                      <option key={clave} value={valor}>{clave}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <p className='block sm:hidden text-xl text-gray-800 mt-10'>Resultado: <span>{resultado && resultado}</span></p>
            </div>

          </div>

          <button type='submit' className='font-medium px-5 py-2.5 mt-10 text-center transition rounded-lg focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-pink-500 text-white hover:bg-pink-600 border-2 border-transparent"'>Enviar datos</button>

        </form>

      </div>

      <div className="md:w-1/2 flex flex-col gap-y-5 px-5 py-5 rounded-lg" >
        <div className="">
          <label className="block md:w-full text-xm mb-2" htmlFor="grid-first-name">
            Nombre
          </label>
          <input className="appearance-none block w-full md:w-96  border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Tu nombre" />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil commodi eos modi illum neque numquam facere eaque sed ea nemo nesciunt eveniet, eligendi, veniam fuga vel architecto aperiam quis?</p>

        <p className='hidden sm:block text-xl text-gray-800'>Resultado: <span>{resultado && resultado}</span></p>
      </div>

    </div>
  )
}