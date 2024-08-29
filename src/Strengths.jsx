import streng from './assets/Group 215.png';
import { FaArrowRight } from "react-icons/fa";
import firstimg from './assets/Rectangle 156.png';
import secondimg from './assets/Rectangle 157.png';
import thirdimg from './assets/Rectangle 158.png';
const Strengths = () => {
    return (
        <>
            <div>
                <div className='w-fit flex justify-center items-start mx-auto flex-col p-5'>
                    <h2 className="text-center mb-3 text-3xl text-[#403E3F] font-serif">
                        Our Strengths
                    </h2>
                    <div className="w-20 border-y border-[#EFB247]" />
                </div>
            </div>

            <p className='max-w-screen-xl text-center mx-auto'>Lorem ipsum dolor sit amet consectetur. Vel quam sapien diam sed egestas mattis.
                Pulvinar leo vitae lacus in quis. Convallis nunc turpis lacus laoreet dignissim turpis lacus ornare tristique.
                Eget porttitor tortor fames nequ</p>


            <div className="bg-[#FCF1DE] mt-8 py-10 px-4 md:flex md:justify-between">
                <div className="md:w-1/2 flex justify-center items-center">
                    <img src={streng} alt="Your Image" className="w-full h-auto md:max-w-md" />
                </div>



                <div className="md:mt-0 md:w-1/2 md:pl-8">
                    <h2 className="text-4xl font-bold mb-4 text-[#403E3F] font-serif">Financial Expertise</h2>
                    <p className="text-lg mb-4 text-[#969696]">
                        Lorem ipsum dolor sit amet consectetur. Gravida nullam faucibus eu mauris cras quis. In posuere tellus eget blandit in. Velit placerat rhoncus phasellus dictum iaculis pulvinar ipsum sed. Aliquet
                    </p>

                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-[#339FDE] mr-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#969696]">Lorem ipsum dolor sit amet consectetur. Gravida</span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-[#339FDE] mr-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#969696]">Lorem ipsum dolor sit amet consectetur. Gravida</span>
                        </li>
                        <li className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6 text-[#339FDE] mr-2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[#969696]">Lorem ipsum dolor sit amet consectetur. Gravida</span>
                        </li>
                    </ul>

                    <div className="mt-6 flex space-x-4">
                        <button className="bg-[#339FDE] text-white px-4 py-2 hover:bg-blue-700 transition">
                            Dashboard
                        </button>
                        <button className="bg-[#969696] text-white px-4 py-2 hover:bg-gray-600 transition flex items-center justify-between">
                            See more
                            <span className='ml-2'><FaArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>


            <div className="mt-8 py-10 px-4 md:flex md:justify-between">

                <div className="md:mt-0 md:w-1/2 md:pl-8">
                    <h2 className="text-4xl font-bold mb-4 text-[#403E3F] font-serif">Innovation and Technology</h2>
                    <p className="text-lg mb-4 text-[#969696]">
                        Lorem ipsum dolor sit amet consectetur. Faucibus diam amet ultricies sit. Nulla scelerisque
                        eget sit quisque id ullamcorper. Convallis lacus commodo pretium odio sit amet.
                        Tempor feugiat pellentesque elit interdum. Quam eget sit cum velit quisque felis convallis
                        duis malesuada. Quam in pulvinar cursus nisl id.</p>
                    <ul className="text-[#339FDE] space-y-2 list-disc text-lg md:pl-5">
                        <li className="mt-12 mb-8">
                            <span className="text-[#474747] text-xl font-semibold">Equity Financing</span>
                            <p className='text-[#000]'>Offer shares of ownership in the company in exchange for capital. This can involve selling equity to venture c</p>
                        </li>
                        <li className=''>
                            <span className="text-[#474747] text-xl font-semibold">Equity Financing</span>
                            <p className='text-[#000]'>Offer shares of ownership in the company in exchange for capital. This can involve selling equity to venture c</p>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <button className="bg-[#339FDE] text-white px-12 py-4 hover:bg-blue-700 transition">
                            View more
                        </button>
                    </div>
                </div>

                <div className="md:mt-0 md:w-1/2 mx-auto px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex justify-center items-center">
                            <img src={firstimg} alt="First Image" className="" />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={secondimg} alt="Second Image" className="" />
                        </div>
                    </div>

                 
                    <div className="mt-4 flex justify-center items-center">
                        <img src={thirdimg} alt="Third Image" className="w-full h-auto" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Strengths
