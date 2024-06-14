import React from "react";
import { Link } from "react-router-dom";
import software from "../../assets/software.jpg";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container px-6 m-auto text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="border-4 border-orange-700 rounded-lg md:5/12 lg:w-5/12">
            <img src={software} alt="image" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-center text-gray-900 md:text-4xl">
            Devoted developers work on React development
            </h2>
            <p className="mt-6 text-justify text-gray-600 indent-5">
              As a cornerstone of the MERN stack, React enables the creation of
              dynamic and responsive user interfaces. Developer mcc1461
              showcases exceptional dedication and passion in React development,
              leveraging its declarative approach to manage complex UIs
              efficiently. React's component-based architecture facilitates code
              reuse, making it easier to debug and scale applications.
            </p>
            <p className="mt-4 text-justify text-gray-600 indent-5">
              A vital tool in mcc1461’s toolkit is React Router, which is
              essential for navigation within single-page applications (SPAs).
              React Router allows for seamless transitions between views without
              full-page reloads, enhancing user experience. It supports nested
              routes, lazy loading, and dynamic route matching, enabling mcc1461
              to build cohesive and efficient applications. React Router's
              hooks, such as useHistory and useParams, integrate smoothly with
              state management, simplifying routing logic.
            </p>
            <p className="mt-4 text-justify text-gray-600 indent-5">
              Through the adept use of React and React Router, mcc1461 crafts
              responsive, user-friendly web applications, significantly
              elevating both the development process and the end-user
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
