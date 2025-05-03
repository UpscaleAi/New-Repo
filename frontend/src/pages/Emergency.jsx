import React from 'react'
import { assets } from "../assets/assets";

const Emergency = () => {
return (
  <div>
    <div className="text-center text-2xl pt-10 text-[#707070]">
      <p>
        EMERGENCY <span className="text-gray-700 font-semibold">SERVICES</span>
      </p>
    </div>

    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
      <img className="w-full md:max-w-[400px]" src={assets.car} alt="" />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.781208119076!2d37.548693171915666!3d6.016717990305053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17babb792704bbed%3A0x3256badbeed2c79e!2sReferal%20Hospital!5e0!3m2!1sen!2set!4v1741936038072!5m2!1sen!2set"
        width="900"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>



      <div className="flex flex-col justify-center items-start gap-6">
        <p className=" font-semibold text-lg text-gray-600">CALL CENTER</p>
        <div className="flex flex-col justify-center items-start text-gray-600 gap-6 w-full md:max-w-[400px]">
          In times of medical emergencies, every second counts.Our Emergency
          Ambulance Services ensure you get the urgent care you need, when you
          need it.
          <p className="text-gray-600">
            Whether it's a critical situation or a medical transport request,
            our team is ready to assist.
          </p>
        </div>
        <a href="tel:+251987156534">
          <button className="bg-primary text-white border border-gray-400 px-4 py-2 rounded text-sm hover:bg-upscale hover:text-white transition-all duration-500 cursor-pointer">
            Call Ambulance
          </button>
        </a>
      </div>
    </div>
    <div className="flex flex-col md:flex-row mb-20">
      <div className=" px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15]  transition-all text-gray-600 ">
        <b>📍 Quick Access</b>
        <p>Call an ambulance with just one tap.</p>
      </div>

      <div className=" px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15]  transition-all text-gray-600 ">
        <b>🗺 Live Location </b>
        <p>Find the nearest emergency services instantly.</p>
      </div>

      <div className=" px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15]  transition-all text-gray-600 ">
        <b>☎ 24/7 Support </b>
        <p>We're here for you anytime, anywhere.</p>
      </div>
    </div>
  </div>
);
};

export default Emergency



  