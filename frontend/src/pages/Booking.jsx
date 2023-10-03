import React, { useState } from "react";
import Layout from "../Components/Layout";
import Wallpapers from "../components/Wallpapers";

export default function Booking() {


  return (
    <Layout className="min-h-[747px]">
      <div className="flex">
        <Wallpapers className="flex justify-center w-[860px] h-[500px]">
          <div
            className={`w-[805px] h-full bg-[url('/picture.jpg')] bg-center bg-cover`}
          ></div>
          <div
            className={`w-[805px] h-full bg-[url('/zal-1.jpg')] bg-center bg-cover`}
          ></div>
          <div
            className={`w-[805px] h-full bg-[url('/zal-3.jpg')] bg-center bg-cover`}
          ></div>
          <div
            className={`w-[805px] h-full bg-[url('/zal-4.jpg')] bg-center bg-cover`}
          ></div>
        </Wallpapers>
        <div className="w-2/4 my-6 flex items-center justify-center">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3 mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300"
                  id="grid-first-name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Your Surname"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3 mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="+998 (xx) xxx-xx-xx"
                />
              </div>
              <div className="w-1/2 px-3 mb-0 rounded-md">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-hall"
                >
                  Choose Hall
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-hall"
                  >
                    <option>First Hall</option>
                    <option>Second Hall</option>
                    <option>Third Hall</option>
                    <option>Fourth Hall</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-1/2 px-3  mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Date From
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500"
                  id="grid-city"
                  type="date"
                />
              </div>
              <div className="w-1/2 px-3 mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="xx:xx"
                />
              </div>
            </div>
            <button className="w-[512px] h-[44px] ml-1 text-center mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Book
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
