import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Team from "../Components/Team";

export default function About({ slides }) {
  return (
    <>
    <Navbar/>
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-20 px-4">
        <div className="lg:col-span-2">
          <p className="text-2xl font-bold font-serif ">
            <div className="my-5">
              <h3 className="text-4xl">
                {" "}
                <span className="text-green-700 ">I</span>NTRO{" "}
              </h3>
              <div className="my-4">
                <div data-aos="zoom-in-left">
                  Welcome to Agr i Drone, where innovation meets agriculture to
                  revolutionize farming practices for a sustainable future.
                </div>
              </div>
            </div>

            <div className="my-5">
              <h3 className="text-4xl">
                {" "}
                <span className="text-green-700 ">O</span>UR{" "}
                <span className="text-green-700">M</span>ISSION
              </h3>
              <div className="my-4">
                <div data-aos="zoom-in-left">
                  At Agri Drone, our mission is clear: to harness the power of
                  cutting-edge drone technology to empower farmers, enhance
                  agricultural efficiency, and promote environmental
                  stewardship. We believe in the transformative potential of
                  drones to revolutionize traditional farming methods, paving
                  the way for smarter, more sustainable agricultural practices.
                </div>
              </div>
            </div>

            <div className="my-5">
              <h3 className="text-4xl">
                {" "}
                <span className="text-green-700 ">O</span>UR{" "}
                <span className="text-green-700">M</span>OTIVE
              </h3>
              <div className="my-3">
                <div data-aos="zoom-in-left">
                  At Agri Drone, we envision a future where technology and
                  agriculture converge to create a more resilient and equitable
                  food system. By democratizing access to drone technology and
                  knowledge, we empower farmers of all scales to thrive in an
                  increasingly complex and interconnected world. Join us on our
                  journey to reimagine agriculture for the 21st century.
                  Together, we can cultivate a more sustainable future for
                  generations to come.
                </div>
              </div>
            </div>
          </p>
        </div>

        <div></div>
      </div>
    </>
      <Team />
    </>
  );
}
