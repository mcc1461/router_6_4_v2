import React from "react";
import { Link } from "react-router-dom";
import reactRouter from "../../assets/reactRouter.png";
import software from "../../assets/software.jpg"

export default function Home() {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <aside className="relative mx-2 overflow-hidden text-black rounded-lg sm:mx-16 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pt-10 pb-20 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:mt-1 mt-80 sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              React Router 6.4
              <span className="hidden text-2xl sm:block">
                Keep it simple and easy...
              </span>
            </h2>

            <Link
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; moro info
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full pt-12 sm:my-24 sm:pt-1 ">
          <img
            className="border-8 border-orange-700 rounded-lg w-150"
            src={reactRouter}
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid mx-12 text-justify place-items-left sm:mt-0 sm:mb-80">
        <p className="font-medium text-justify indent-5">
          React Router is a powerful library for routing in React applications.
          It allows you to create dynamic and responsive single-page
          applications (SPAs) with ease. The release of React Router 6.4 brings
          several new features and improvements that enhance the developer
          experience and provide more flexibility in handling routes.
        </p>
            <h2 className="mt-2 text-lg font-extrabold text-center ">
            Key Features of React Router 6.4
            </h2>
            <h3 className="mt-2 font-bold">
            1. Data Fetching in Routes React
            </h3>
          <p>
          Router 6.4 allows data fetching directly within your route
          definitions, making it easier to manage data requirements and loading
          states. 
          </p>
          
          <h3 className="mt-2 font-bold">
          2. Enhanced Error Handling
           
          </h3> 
          <p>
            
          Define error boundaries for your
          routes using the errorElement property, allowing graceful error
          handling.
          </p>
          <h3 className="mt-2 font-bold">
          3. Route Object API 
          </h3>
          <p>
            
          The Route Object API simplifies route
          
          configuration, making it more declarative and easier to understand. 
          </p>
          <h3 className="mt-2 font-bold">
          4. Transition API
          </h3>
          <p >
            
           The Transition API manages route transitions
          effectively, useful for animating transitions between routes.
          </p>
      </div>
    </div>
  );
}
