import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] h-80 mt-10"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6  text-sm text-gray-600">
          <p>
            Arba Minch University Teaching Comprehensive and Specialized
            Hospital (AMU-TCSH) is a premier healthcare institution in Arba
            Minch City, dedicated to delivering high-quality, patient-centered
            medical services. As a teaching and referral hospital affiliated
            with Arba Minch University, we serve as a critical hub for medical
            education, research, and advanced clinical care.
          </p>
          <p>
            The hospital is equipped with modern medical technology and staffed
            by a multidisciplinary team of experienced healthcare professionals,
            specialists, and academic experts. We provide a broad range of
            specialized services including internal medicine, surgery,
            pediatrics, gastroenterology and gynecology, emergency care, and
            diagnostic services.
          </p>
          <p>
            In addition to delivering compassionate healthcare to the community,
            AMU-TCSH plays a vital role in training the next generation of
            health professionals through practical, hands-on education. We are
            committed to innovation, excellence, and community engagement,
            continually striving to improve health outcomes and contribute to
            the development of the national health system.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            To become a center of excellence in specialized healthcare, medical
            education, and research, recognized nationally and beyond for
            quality, innovation, and community impact.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To provide high-quality, compassionate, and specialized healthcare
            services; to advance medical knowledge through education and
            research; and to contribute to the development of an equitable and
            sustainable health system in Ethiopia.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className=" px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15]  transition-all text-gray-600 ">
          <b>⏱️ Timely and Coordinated Care</b>
          <p>
            We prioritize efficient service delivery through organized patient
            flow, timely consultations, and streamlined appointment scheduling
            minimizing wait times.
          </p>
        </div>

        <div className=" px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15]  transition-all text-gray-600 ">
          <b>🩺 Comprehensive Access</b>
          <p>
            The hospital offers a wide range of specialized medical services
            delivered by a multidisciplinary team of trusted healthcare
            professionals.
          </p>
        </div>

        <div className=" px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15]  transition-all text-gray-600 ">
          <b>🤝 Patient-Centered Approach</b>
          <p>
            We are committed to individualized care providing tailored treatment
            plans, follow-up reminders, and health education to empower patients
            in managing their well-being.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
