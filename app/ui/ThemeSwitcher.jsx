'use client'

import { FaRegLightbulb } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";

import { useEffect, useState } from "react"

export default function ThemeSwitcher() {

   const [theme, setTheme] = useState('light')

   useEffect(() => {
      document.documentElement.classList = theme
      localStorage.setItem('theme', theme)
   }, 
   [theme])

   function handleClick () {
      setTheme((cur) => {
         return cur === 'light' ? 'dark' : 'light'
      })
   }

   return (
      <button
         onClick={ handleClick }
         title={ `Switch to ${ theme === 'light' ? 'dark' : 'light' } mode` }
         className="bg-slate-50 shadow-md rounded-lg border-2 h-10 aspect-square flex items-center justify-center"
      >
         {
            theme === 'light' 
               ? <FaLightbulb /> 
               : <FaRegLightbulb />
         }
      </button>
   )
}
