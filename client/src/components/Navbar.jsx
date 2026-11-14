import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { control } from '../Redux/slics'
const Navbar = () => {
  const dispatch=useDispatch()
  const navclass=useSelector(state=>state.main.navclass)
  useEffect(()=>{
    const val=localStorage.getItem("class")
    dispatch(control.setnavclass(val));
  },[navclass])
  const Setclass=(val)=>{
    dispatch(control.setnavclass(val));
    localStorage.setItem("class",val);
  }
  const Homeclick=()=>{
    dispatch(control.setnavclass(""))
    localStorage.removeItem("class")
  }
  

return (
  <div className="w-full bg-gradient-to-r from-blue-100 via-indigo-100 to-cyan-100 shadow-md border-b border-gray-100 px-6 md:px-12 py-4 flex justify-between items-center">

    {/* Logo */}
    <div>
      <h1
        onClick={Homeclick}
        className="text-xl md:text-2xl font-extrabold text-blue-700 cursor-pointer tracking-tight hover:text-blue-900 transition-colors duration-300 ease-in-out"
      >
        Research Paper <span className="text-gray-800">Summarizer</span>
      </h1>
    </div>

    {/* Navigation Links */}
    <ul className="flex justify-end items-center gap-4 md:gap-9 text-sm md:text-base font-semibold text-gray-600 flex-wrap">

      <li
        onClick={() => Setclass("one")}
        className={`relative cursor-pointer py-2 transition-colors duration-300 ease-in-out hover:text-blue-700
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out
        ${navclass === "one" ? "text-blue-700 after:w-full" : "after:w-0 hover:after:w-full"}`}
      >
        Home
      </li>

      <li
        onClick={() => Setclass("two")}
        className={`relative cursor-pointer py-2 transition-colors duration-300 ease-in-out hover:text-blue-700
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out
        ${navclass === "two" ? "text-blue-700 after:w-full" : "after:w-0 hover:after:w-full"}`}
      >
        Summarise
      </li>

      <li
        onClick={() => Setclass("three")}
        className={`relative cursor-pointer py-2 transition-colors duration-300 ease-in-out hover:text-blue-700
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out
        ${navclass === "three" ? "text-blue-700 after:w-full" : "after:w-0 hover:after:w-full"}`}
      >
        Features
      </li>

      <li
        onClick={() => Setclass("four")}
        className={`relative cursor-pointer py-2 transition-colors duration-300 ease-in-out hover:text-blue-700
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 after:ease-in-out
        ${navclass === "four" ? "text-blue-700 after:w-full" : "after:w-0 hover:after:w-full"}`}
      >
        Contact
      </li>

    </ul>
  </div>
)

}

export default Navbar
