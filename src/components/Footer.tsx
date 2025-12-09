import React from "react";
import Image from "next/image";
import Logo from "@/assets/Images/Logo.png";

const Footer = ({ scrollToSection }: { scrollToSection?: (sectionId: string) => void }) => (
    <footer className="w-full px-[10px] md:px-[50px] lg:px-[70px] pb-[20px] sm:pb-[10px]" style={{ background: 'var(--tt-bg-color)', color: 'var(--tt-color-text-gray)' }}>
        <div className="text-h3 sm:text-h2 w-full">
            Grill Shack
        </div>
        <div className="mb-[32px] mx-2 text-normal2">
            Enjoy crispy, island-style fried chicken made fresh daily in the heart of Waikiki. From quick bites to catering, Grill Shack brings flavor and aloha to every meal.
        </div>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[100px] lg:grid-cols-3 gap-[10px] lg:gap-8">
                {/* Logo and Social Icons */}
                <div className="col-span-2 lg:col-span-1 mx-auto flex flex-row items-center lg:items-start gap-4">
                    <Image
                        src={Logo}
                        alt="Grill Shack Logo"
                        width={100}
                        height={100}
                        className="object-contain w-auto h-[200px] md:h-[230px] aspect-square rounded-full"
                    />
                    <div className="flex h-[120px] justify-evenly gap-[10px] flex-col my-auto max-w-100">
                        <a
                            href="https://www.instagram.com/grilll_shack"
                            aria-label="Instagram"
                            className="min-w-[100px] p-2 py-4 h-full w-full items-center justify-center flex rounded-lg group transition-all"
                            style={{ background: 'color-mix(in oklab, var(--color-white) 5%, transparent)' }}
                            onMouseEnter={e => e.currentTarget.style.background = 'color-mix(in oklab, black 30%, transparent)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'color-mix(in oklab, var(--color-white) 5%, transparent)'}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                style={{ color: 'var(--tt-color-text-gray)' }}
                            >
                                <defs>
                                    <linearGradient id="insta-gradient" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#f9ce34" />
                                        <stop offset="50%" stopColor="#ee2a7b" />
                                        <stop offset="100%" stopColor="#6228d7" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M15.9287 0H6.07107C2.72349 0 0 2.72362 0 6.07121V15.9288C0 19.2765 2.72349 22 6.07107 22H15.9287C19.2765 22 22 19.2764 22 15.9288V6.07121C22.0001 2.72362 19.2765 0 15.9287 0ZM20.0482 15.9288C20.0482 18.2002 18.2002 20.0481 15.9288 20.0481H6.07107C3.79979 20.0482 1.95195 18.2002 1.95195 15.9288V6.07121C1.95195 3.79992 3.79979 1.95195 6.07107 1.95195H15.9287C18.2001 1.95195 20.0481 3.79992 20.0481 6.07121V15.9288H20.0482Z"
                                    fill="currentColor"
                                    className="fill-opacity-60 group-hover:fill-[url(#insta-gradient)] group-hover:fill-opacity-100 transition-all"
                                />
                                <path
                                    d="M10.9999 5.33008C7.87405 5.33008 5.33105 7.87307 5.33105 10.9989C5.33105 14.1246 7.87405 16.6675 10.9999 16.6675C14.1257 16.6675 16.6687 14.1246 16.6687 10.9989C16.6687 7.87307 14.1257 5.33008 10.9999 5.33008ZM10.9999 14.7154C8.95048 14.7154 7.283 13.0482 7.283 10.9988C7.283 8.94925 8.95035 7.28189 10.9999 7.28189C13.0494 7.28189 14.7168 8.94925 14.7168 10.9988C14.7168 13.0482 13.0493 14.7154 10.9999 14.7154Z"
                                    fill="currentColor"
                                    className="fill-opacity-60 group-hover:fill-[url(#insta-gradient)] group-hover:fill-opacity-100 transition-all"
                                />
                                <path
                                    d="M16.9065 3.67773C16.5305 3.67773 16.161 3.82999 15.8954 4.09675C15.6285 4.36222 15.4751 4.73179 15.4751 5.10916C15.4751 5.48537 15.6287 5.85481 15.8954 6.12157C16.1609 6.38704 16.5305 6.54059 16.9065 6.54059C17.2839 6.54059 17.6522 6.38704 17.9189 6.12157C18.1857 5.85481 18.338 5.48524 18.338 5.10916C18.338 4.73179 18.1857 4.36222 17.9189 4.09675C17.6535 3.82999 17.2839 3.67773 16.9065 3.67773Z"
                                    fill="currentColor"
                                    className="fill-opacity-60 group-hover:fill-[url(#insta-gradient)] group-hover:fill-opacity-100 transition-all"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.tiktok.com/@grill_shack"
                            aria-label="TikTok"
                            className="p-2 py-4 h-full w-full items-center justify-center flex rounded-lg group transition-all"
                            style={{ background: 'color-mix(in oklab, var(--color-white) 5%, transparent)' }}
                            onMouseEnter={e => e.currentTarget.style.background = 'color-mix(in oklab, black 30%, transparent)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'color-mix(in oklab, var(--color-white) 5%, transparent)'}
                        >
                            <svg height="22" width="22" viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--tt-color-text-gray)' }}>
                                <path fill="currentColor" className="fill-opacity-60 group-hover:fill-[#C1272D] group-hover:fill-opacity-100 transition-all" d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="col-span-1 sm:col-span-2 flex flex-row justify-evenly w-full mb-8 lg:mb-0">
                    {/* Contact Us */}
                    <div className="col-span-1 text-center h-full lg:mr-10 mr-0">
                        <div className="flex h-full flex-col items-center justify-center">
                            <div className="text-h5 font-semibold mb-[22px] text-[var(--white)]">Contact Us</div>
                            <div className="text-normal4 text-[var(--tt-color-text-gray)]">
                                <div className="flex flex-col items-center">
                                    <a
                                        href="tel:+441895913672"
                                        className="mb-[10px] hover:text-primary hover:underline cursor-pointer transition-colors"
                                    >
                                        +44 1895 913672
                                    </a>
                                    <a
                                        href="mailto:info@grillshack.co.uk"
                                        className="hover:text-primary hover:underline cursor-pointer transition-colors"
                                    >
                                        info@grillshack.co.uk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="col-span-1 text-center h-full ">
                        <div className="flex h-full flex-col items-center justify-center">
                            <div className="text-h5 text-[var(--white)] font-semibold mb-[22px]">
                                Quick Links
                            </div>
                            <div className="text-normal4 text-[var(--tt-color-text-gray)]">
                                <div className="text-center grid grid-cols-2 gap-[10px]">
                                    <button onClick={() => scrollToSection && scrollToSection('Home')} className="hover:text-primary transition-colors cursor-pointer">
                                        <span className="hover:underline">Home</span>
                                    </button>
                                    <button onClick={() => window.location.pathname = "/menu"} className="hover:text-primary transition-colors cursor-pointer">
                                        <span className="hover:underline">Menu</span>
                                    </button>
                                    <button onClick={() => scrollToSection && scrollToSection('Reviews')} className="hover:text-primary transition-colors cursor-pointer">
                                        <span className="hover:underline">Reviews</span>
                                    </button>
                                    <button onClick={() => scrollToSection && scrollToSection('Featuring')} className="hover:text-primary transition-colors cursor-pointer">
                                        <span className="hover:underline">Featuring</span>
                                    </button>
                                    <button onClick={() => scrollToSection && scrollToSection("FAQ's")} className="hover:text-primary transition-colors cursor-pointer">
                                        <span className="hover:underline">FAQ's</span>
                                    </button>
                                    <button onClick={() => scrollToSection && scrollToSection('Location')} className="hover:text-primary transition-colors cursor-pointer">
                                        <span className="hover:underline">Location</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-[60px]" />
        {/* Bottom Bar */}
        <div className="bg-primary rounded-full text-white w-[90%] mx-auto min-h-[37px] py-[10px] sm:px-[50px] md:px-[100px] ">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center text-normal4 gap-[20px]">
                <p className="hidden sm:block">
                    Grill Shack Inc. 2025 All Rights Reserved
                </p>
                <p className="text-nowrap">
                    Made with <a target="_blank" href="http://tableturnerr.com" className="hover:underline cursor-pointer"><u>TableTurnerr.com</u></a>
                </p>
            </div>
        </div>
        <div className="block sm:hidden w-full text-center text-[10px] mt-2">
            Grill Shack Inc. 2025 All Rights Reserved
        </div>
    </footer>
);

export default Footer;
