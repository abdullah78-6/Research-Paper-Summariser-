
import React from 'react'
import { FaFilePdf, FaRobot, FaLightbulb, FaArrowRight, FaBookOpen } from "react-icons/fa";
import { MdAutoAwesome, MdOutlineSummarize } from "react-icons/md";

const Herosection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 min-h-[85vh] flex items-center px-6 md:px-12 py-16">

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div className="space-y-7 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold">
            <MdAutoAwesome className="text-lg" />
            AI-Powered Research Assistant
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Understand Research Papers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
              Faster & Smarter
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Stop spending hours reading lengthy research papers. Upload your
            academic PDFs and let AI generate clear summaries, extract key
            insights, and help you understand complex research concepts in minutes.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-700">

            <div className="flex items-center gap-2">
              <FaFilePdf className="text-blue-600 text-lg" />
              PDF Analysis
            </div>

            <div className="flex items-center gap-2">
              <FaRobot className="text-indigo-600 text-lg" />
              AI Summarisation
            </div>

            <div className="flex items-center gap-2">
              <FaLightbulb className="text-yellow-500 text-lg" />
              Key Insights
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-3">

            <button className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Summarising
              <FaArrowRight />
            </button>

            <button className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white border border-blue-200 text-blue-700 font-bold hover:bg-blue-50 transition-all duration-300">
              <FaBookOpen />
              Explore Features
            </button>

          </div>

          <p className="text-sm text-gray-500">
            Designed to make academic research simpler and more accessible.
          </p>

        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center items-center">

          <div className="absolute w-80 h-80 md:w-[440px] md:h-[440px] bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-50"></div>

          <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-6 md:p-8">

            {/* Card Header */}
            <div className="flex justify-between items-center border-b border-gray-100 pb-5">

              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-3 rounded-xl">
                  <FaFilePdf className="text-red-500 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">Research_Paper.pdf</h3>
                  <p className="text-xs text-gray-500">Academic Document</p>
                </div>
              </div>

              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                Analysed
              </span>

            </div>

            {/* AI Summary */}
            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-2 text-blue-700 font-bold">
                <MdAutoAwesome className="text-xl" />
                AI Generated Summary
              </div>

              <div className="bg-blue-50 rounded-xl p-4 space-y-3">
                <div className="h-3 bg-blue-200 rounded-full w-full"></div>
                <div className="h-3 bg-blue-200 rounded-full w-5/6"></div>
                <div className="h-3 bg-blue-200 rounded-full w-4/6"></div>
                <div className="h-3 bg-blue-200 rounded-full w-3/4"></div>
              </div>

              {/* Key Insights */}
              <div className="flex items-center gap-2 text-indigo-700 font-bold pt-2">
                <MdOutlineSummarize className="text-xl" />
                Key Research Insights
              </div>

              <div className="space-y-3">

                <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <FaLightbulb className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Main Findings</h4>
                    <p className="text-xs text-gray-500">Important research discoveries</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <FaBookOpen className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Research Methodology</h4>
                    <p className="text-xs text-gray-500">Understand the research approach</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Label */}
            <div className="mt-6 flex justify-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md">
                Smart Research. Less Effort.
              </span>
            </div>

          </div>

          {/* Floating Badge */}
          <div className="absolute -top-5 right-0 md:right-4 bg-white shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3 animate-bounce">
            <MdAutoAwesome className="text-yellow-500 text-2xl" />
            <div>
              <p className="text-xs text-gray-500">Powered by</p>
              <p className="text-sm font-bold text-gray-800">Artificial Intelligence</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Herosection
