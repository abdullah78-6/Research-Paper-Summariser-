import React, { useEffect, useState } from 'react'
import axios from "axios"
import { ClipLoader } from "react-spinners";
import {useSelector,useDispatch} from "react-redux"
import { control } from '../Redux/slics';
import upload from "../assets/upload_area.png"
import {toast} from "sonner"
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
const Form = ({url}) => {
    // const file=useSelector(state=>state.main.file);
    const [file,setfile]=useState();
    const dispatch=useDispatch();
    const result=useSelector(state=>state.main.result);
    const loading=useSelector(state=>state.main.loading);
    const Summarize=async(e)=>{
        e.preventDefault();
        if(!file){
            toast.error("Please Select Paper")
           
            return ;
        }
        dispatch(control.setloading(true))
        try {
          const formdata=new FormData();
          formdata.append("file",file)
            const res=await axios.post(url+"/api/ai/paper",formdata,{
                withCredentials:true
        })
        if(res.data.status){
            dispatch(control.setresult(res.data.result));
            dispatch(control.setloading(false))
        }
        else{
            toast.error(res.data.message);
            dispatch(control.setloading(false))
        }
        } catch (error) {
            console.log("summarize error",error);
            dispatch(control.setloading(false))
        }
    }
    
return (
  <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

    {/* Description */}
    <div className="mb-10 text-center">
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
        Research Paper Summarizer
      </h2>

      <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
        Upload your research paper in PDF format and let our AI-powered
        summarizer do the hard work for you. Extract key insights,
        understand complex research concepts, and generate concise,
        meaningful summaries in seconds. Save valuable time and focus
        on discovering the knowledge that matters most.
      </p>
    </div>

    {/* PDF Preview */}
    <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">

      {/* Preview Header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-6">
        <div>
          <h2 className="text-base font-bold text-gray-800 sm:text-lg">
            Research Paper Preview
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            Preview your selected research document
          </p>
        </div>

        {file && (
          <span className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            PDF Uploaded
          </span>
        )}
      </div>

      {/* Preview Content */}
      <div className="flex min-h-[300px] w-full items-center justify-center overflow-hidden bg-gray-50 p-3 sm:min-h-[420px] sm:p-6">

        {file ? (
          <Document
            file={file}
            className="flex w-full justify-center"
          >
            <Page
              pageNumber={1}
              width={Math.min(window.innerWidth - 80, 650)}
              className="max-w-full overflow-hidden rounded-md shadow-lg"
            />
          </Document>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">

            <div className="mb-5 flex h-28 w-28 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm sm:h-36 sm:w-36">
              <img
                src={upload}
                alt="Upload research paper"
                className="h-20 w-20 object-contain sm:h-28 sm:w-28"
              />
            </div>

            <p className="text-base font-semibold text-gray-700">
              No research paper selected
            </p>

            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              Upload your PDF to preview it here
            </p>
          </div>
        )}

      </div>
    </div>

    {/* Upload Form */}
    <form
      onSubmit={Summarize}
      className="flex flex-col items-center gap-6"
    >

      {/* Upload Area */}
      <label
        htmlFor="img"
        className="group flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50/40 px-5 py-10 text-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 sm:py-12"
      >

        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16V4m0 0L8 8m4-4 4 4M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"
            />
          </svg>
        </div>

        <span className="text-base font-bold text-blue-700 sm:text-lg">
          {file ? "Choose Another Research Paper" : "Upload Your Research Paper"}
        </span>

        <span className="mt-2 text-xs text-gray-500 sm:text-sm">
          Click to browse your files (PDF format)
        </span>

        <span className="mt-4 rounded-lg border border-blue-100 bg-white px-4 py-2 text-xs font-medium text-blue-600 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
          Browse Files
        </span>

      </label>

      <input
        onChange={(e) => setfile(e.target.files[0])}
        type="file"
        id="img"
        accept=".pdf,application/pdf"
        className="hidden"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-60"
      >
        Summarize Research Paper
      </button>

    </form>

    {/* Summary Result */}
    <div className="mt-10 w-full">

      {loading ? (
        <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
          <ClipLoader color="#2563eb" size={40} />
          <p className="text-sm font-medium text-gray-600">
            Analyzing your research paper...
          </p>
          <p className="text-xs text-gray-400">
            Extracting key findings and generating your summary
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">

          <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7h8M8 11h8M8 15h5m-8 5h14a2 2 0 002-2V6a2 2 0 00-2-2H9L5 8v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-800 sm:text-lg">
                Research Paper Summary
              </h2>
              <p className="text-xs text-gray-400">
                AI-generated research insights
              </p>
            </div>
          </div>

          <div className="whitespace-pre-wrap text-sm leading-8 text-gray-600 sm:text-base">
            {result}
          </div>

        </div>
      )}

    </div>

  </div>
)

}

export default Form

