import React from "react";

import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { FaLocationDot } from "react-icons/fa6";

const ConsultationForm = () => {
    return (
        <div className="bg-[#FAEBD7] p-8 md:p-10">


            <div>
                <div className='w-fit flex justify-center items-start mx-auto flex-col p-5'>
                    <h2 className="text-center mb-3 text-3xl text-[#403E3F] font-serif">
                        Get A free consultation
                    </h2>
                    <div className="w-20 border-y border-[#339FDE]" />
                </div>
            </div>

            <div className=" mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information Section */}
                <div className=" flex flex-col space-y-6 p-6">
                    <h2 className="text-2xl font-bold text-[#403E3F]">
                        LOREM IPSUM DOLOR SIT AMET
                    </h2>
                    <p className="text-[#969696] text-lg">
                        Lorem ipsum dolor sit amet consectetur. Tempor eros semper venenatis
                        ultrices venenatis. In pulvinar et senectus non eu. I.
                    </p>

                    {/* Contact Details */}

                    <div className='flex items-center cursor-pointer gap-4'>
                        <div className='text-[#339FDE] text-2xl'>
                            <MdEmail />
                        </div>
                        <span className="text-[#403E3F] font-semibold text-base">epidosisinvestment@gmail.com</span>
                    </div>

                    <div className='flex items-center cursor-pointer gap-4'>
                        <div className='text-[#339FDE] text-2xl'>
                            <BsTelephone />
                        </div>
                        <span className="text-[#403E3F] font-semibold text-base">9756545862</span>
                    </div>

                    <div className='flex items-center cursor-pointer gap-4'>
                        <div className='text-[#339FDE] text-2xl'>
                            <FaLocationDot />
                        </div>
                        <span className="text-[#403E3F] font-semibold text-base">
                            Fahad BLDG - M18 - Hor Al Anz - Dubai - United Arab Emirates
                        </span>
                    </div>
                </div>


                <div className="p-6 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Enter First name*"
                            className=" p-2 focus:outline-none focus:ring-2 focus:ring-[#339FDE]"
                        />
                        <input
                            type="text"
                            placeholder="Enter Last name*"
                            className=" p-2 focus:outline-none focus:ring-2 focus:ring-[#339FDE]"
                        />
                        <input
                            type="email"
                            placeholder="Enter your email*"
                            className=" p-2 focus:outline-none focus:ring-2 focus:ring-[#339FDE]"
                        />
                        <input
                            type="tel"
                            placeholder="Enter Phone number*"
                            className=" p-2 focus:outline-none focus:ring-2 focus:ring-[#339FDE]"
                        />
                    </div>

                    <textarea
                        placeholder="Your message"
                        className="border border-gray-300 p-2 w-full h-24 mt-4 resize-none focus:outline-none"
                    ></textarea>

                    <button className="bg-[#339FDE] text-white px-8 py-2 mt-4 hover:bg-blue-700 transition">
                        Submit →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConsultationForm;
