import React from 'react';
import { Menu } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#44444d] text-white py-6 shadow-md">
            <div className="max-w-screen-xl mx-auto flex justify-between px-4">
                {/* Left-aligned Section */}
            

                {/* Centered Logo */}
                <div className="flex justify-center items-center w-1/2">
                    <img
                        src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
                        alt="Logo"
                        className="h-auto w-1/2 lg:w-28 pr-2"
                    />
                    <div className="text-center text-sm border-l-white border-l-[1px] pl-2 ">
                        <span className="block font-semibold">Inshorts Pte. Ltd.</span>
                        <span>© COPYRIGHT 2024</span>
                    </div>
                </div>

                {/* Right-aligned Section for Social Icons */}
                <div className="flex gap-4 items-center w-1/4">
                    <a
                        href="https://www.facebook.com/inshortsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <img
                            src="https://assets.inshorts.com/website_assets/images/facebook.png"
                            alt="Facebook"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://twitter.com/inshorts"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <img
                            src="https://assets.inshorts.com/website_assets/images/twitter.png"
                            alt="Twitter"
                            className="w-6 h-6"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/news-in-shorts"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkedin"
                    >
                        <img
                            src="https://assets.inshorts.com/website_assets/images/linkedin.png"
                            alt="Linkedin"
                            className="w-6 h-6"
                        />
                    </a>
                </div>
            </div>

            {/* Additional Links */}
            <div className="flex justify-center mt-4">
                <a href="/tnc" className="text-sm mx-4" target="_blank" rel="noopener noreferrer">
                    Terms & Conditions
                </a>
                <a href="/tnc" className="text-sm mx-4" target="_blank" rel="noopener noreferrer">
                    Terms & Conditions
                </a>
                <a href="/privacy" className="text-sm mx-4" target="_blank" rel="noopener noreferrer">
                    Privacy Policies
                </a>
            </div>
        </footer>
    );
};

export default Footer;
