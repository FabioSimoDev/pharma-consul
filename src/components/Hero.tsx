import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./Navbar/NavBar";
import heroImg from "../assets/business-brainstorming-graph-chart-report-data-concept.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative" id="home">
        <div className="w-full h-full bg-black/50 absolute z-[1]"> </div>
        <img
          src={heroImg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover [object-position:50%_20%] z-0"
        />

        <div
          className="relative overflow-hidden px-4 pt-8 p-2 md:px-12 md:py-28 h-5/6"
          // data-aos="zoom-in"
        >
          <div className="relative flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left z-10">
            <div
              className="lg:w-1/2 flex flex-col justify-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h1 className="mb-5 md:text-5xl text-3xl font-[400] text-white">
                Il Partner Ideale per il Successo nel Settore{" "}
                <span className="text-primary drop-shadow-xl ">
                  Farmaceutico
                </span>
              </h1>
              <div className="text-xl font-[400] tracking-tight mb-5 text-white/50">
                Pharma Consul offre consulenza commerciale, gestione di reti
                vendita e formazione agenti, specializzandosi in strumenti
                elettromedicali, telemedicina e illuminazione per farmacie.
              </div>
              <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link
                  to="/contact"
                  className="transition-colors text-white bg-primary hover:bg-primary/80 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0"
                >
                  Scopri di più
                  <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
