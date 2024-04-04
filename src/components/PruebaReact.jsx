import React, { useState } from 'react'
import significados from "./data/significados.json";
import axios from 'axios'

export default function PruebaReact() {

  const [resultado, setResultado] = useState("")

  function getValues(){
    const inputEdad = document.getElementById('inputAge').value;
    const inputMenopause = document.getElementById('inputMenopause').value;
    const inputTumorSize = document.getElementById('inputTumorSize').value;
    const inputInvNodes = document.getElementById('inputInvNodes').value;
    const inputNodeCaps = document.getElementById('inputNodeCaps').value;
    const inputDegMalig = document.getElementById('inputDegMalig').value;
    const inputBreast = document.getElementById('inputBreast').value;
    const inputBreastQuad = document.getElementById('inputBreastQuad').value;
    const inputIrradiat = document.getElementById('inputIrradiat').value;

    return {inputEdad, 
            inputMenopause, 
            inputTumorSize, 
            inputInvNodes, 
            inputNodeCaps,
            inputDegMalig,
            inputBreast,
            inputBreastQuad,
            inputIrradiat
          }
  }

  async function realizarPrueba(){
    const values = getValues()
    const res = await getData(values)
    setResultado(res.data.resultado_prueba)
    console.log(resultado)
  }

  async function getData(values){

    const dataEnviar = {
        "edad": values.inputEdad,
        "menopausia": values.inputMenopause,
        "tumorTamaño": values.inputTumorSize,
        "invNodes": values.inputInvNodes,
        "nodesCaps": values.inputNodeCaps,
        "gradoTumor": values.inputDegMalig,
        "breast": values.inputBreast,
        "breastQuead": values.inputBreastQuad,
        "irradiat": values.inputIrradiat
    }

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

        <div className="flex flex-wrap justify-center">

          <div className="flex flex-wrap gap-x-5 md:gap-x-5 md:gap-y-3 justify-center">

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                Edad
              </label>
              <div className="relative">
                <select id = 'inputAge' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.age).map((clave, index) => (
                  <option key={index} value={significados.age[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            
            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                Menopause
              </label>
              <div className="relative">
                <select id = 'inputMenopause' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.menopause).map((clave, index) => (
                  <option key={index} value={significados.menopause[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                Tumor size
              </label>
              <div className="relative">
                <select id = 'inputTumorSize' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.tumorSize).map((clave, index) => (
                  <option key={index} value={significados.tumorSize[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                inv-nodes
              </label>
              <div className="relative">
                <select id = 'inputInvNodes' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.invNodes).map((clave, index) => (
                  <option key={index} value={significados.invNodes[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                node-caps
              </label>
              <div className="relative">
                <select id = 'inputNodeCaps' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.nodeCaps).map((clave, index) => (
                  <option key={index} value={significados.nodeCaps[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                deg-malig
              </label>
              <div className="relative">
                <select id = 'inputDegMalig' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.degMalig).map((clave, index) => (
                  <option key={index} value={significados.degMalig[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                breast
              </label>
              <div className="relative">
                <select id = 'inputBreast' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.breast).map((clave, index) => (
                  <option key={index} value={significados.breast[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                breast-quead
              </label>
              <div className="relative">
                <select id = 'inputBreastQuad' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.breastQuad).map((clave, index) => (
                  <option key={index} value={significados.breastQuad[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block w-96 md:w-auto text-gray-700 text-xm mb-2" htmlFor="grid-state">
                irradiat
              </label>
              <div className="relative">
                <select id = 'inputIrradiat' className="block appearance-none w-full md:w-44 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                {Object.keys(significados.irradiat).map((clave, index) => (
                  <option key={index} value={significados.irradiat[clave]}>{clave}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>

              </div>
            </div>

            <div>
                <p className='block sm:hidden text-xl text-gray-800 mt-10'>Resultado: <span>{resultado && resultado}</span></p>
            </div>    

          </div>

          <button className='font-medium px-5 py-2.5 mt-10 text-center transition rounded-lg focus-visible:ring-2 ring-offset-2 ring-gray-200 bg-pink-500 text-white hover:bg-pink-600 border-2 border-transparent"' onClick={realizarPrueba}>Enviar datos</button>
          
        </div>

      </div>

      <div className="md:w-1/2 flex flex-col gap-y-5 px-5 py-5 rounded-lg" >
        <div className="">
            <label className="block w-96 md:w-full text-xm mb-2" htmlFor="grid-first-name">
              Nombre
            </label>
            <input className="appearance-none block w-full md:w-96  border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Tu nombre"/>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil commodi eos modi illum neque numquam facere eaque sed ea nemo nesciunt eveniet, eligendi, veniam fuga vel architecto aperiam quis?</p>
        
        <p className='hidden sm:block text-xl text-gray-800'>Resultado: <span>{resultado && resultado}</span></p>
      </div>

    </div>
  )
}