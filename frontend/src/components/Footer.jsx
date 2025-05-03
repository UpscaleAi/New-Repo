import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Arba Minch University Teaching and Comprehensive Specialized
            Hospital is a new facility in Arba Minch, Ethiopia. <br />The facility was
            inaugurated by Prime Minister Abiy Ahmed on July 6, 2024. It
            provides a range of medical services and serves as a training ground
            for students from the university's College of Medicine and Health
            Sciences.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">QUICK LINKS</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <a href="#">
              <li className="hover:text-primary">Home</li>
            </a>
            <a href="doctors">
              <li className="hover:text-primary">Doctors</li>
            </a>
            <a href="about">
              <li className="hover:text-primary">About us</li>
            </a>
            <a href="emergency">
              <li className="hover:text-primary">Ambulance</li>
            </a>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">ADDRESS</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Arba Minch, ET.</li>
            <li>P.O Box 0112</li>
            <li>+251-9871-565-34</li>
            <li>amus-hospital@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          AMU-TCSH 2025 &copy; All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer
