import footerlogo from './assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1E4C67] text-white py-10">
            <div className="max-w-full mx-auto px-14 grid grid-cols md:grid-cols-4 gap-8">
                {/* Logo and Description Section */}
                <div className="flex flex-col space-y-4">
                    <img src={footerlogo} alt='Logo' className='w-32 h-auto' />

                    <p className="text-base">
                        Lorem ipsum dolor sit amet consectetur. Enim facilisi amet egestas
                        neque iaculis vestibulum. Ultrices iaculis et malesuada lacus et.
                        Amet lectus congue porta tincidunt hendrerit maecenas. Id suscipit
                        pharetra justo.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col space-y-2">

                    <div>
                        <div className='mb-6 flex items-start mx-auto flex-col'>
                            <h3 className="text-lg text-[#fff] font-serif">
                                Quick Links
                            </h3>
                            <div className="w-20 border-y border-[#fff]" />
                        </div>
                    </div>

                    <a href="#" className="flex items-center space-x-2 text-base">
                        <span>→</span>
                        <span>Home</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-base">
                        <span>→</span>
                        <span>About Us</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-base">
                        <span>→</span>
                        <span>Contact Us</span>
                    </a>
                </div>

                {/* Pages Section */}
                <div className="flex flex-col space-y-2">

                    <div>
                        <div className='mb-6 flex items-start mx-auto flex-col'>
                            <h3 className="text-lg text-[#fff] font-serif">
                                Pages
                            </h3>
                            <div className="w-20 border-y border-[#fff]" />
                        </div>
                    </div>
                    <a href="#" className="flex items-center space-x-2 text-base">
                        <span>→</span>
                        <span>Testimonials</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-base">
                        <span>→</span>
                        <span>Blogs</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-base">
                        <span>→</span>
                        <span>Privacy Policy</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-base">
                        <span>→</span>
                        <span>Terms of Service</span>
                    </a>
                </div>

                {/* Newsletter Section */}
                <div className="flex flex-col space-y-4">

                    <div>
                        <div className='mb-6 flex items-start mx-auto flex-col'>
                            <h3 className="text-lg text-[#fff] font-serif">
                            Newsletter
                            </h3>
                            <div className="w-20 border-y border-[#fff]" />
                        </div>
                    </div>

                    <input
                        type="email"
                        placeholder="Enter your email here"
                        className="p-2 border border-white text-black"
                    />
                    <button className="bg-white text-[#1E4C67] px-4 py-2 hover:bg-gray-200 transition">
                        Submit →
                    </button>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-white mt-8 pt-4 px-8">
                <p className="text-sm">
                    © 2024 - All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
