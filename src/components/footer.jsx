import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
function footer() {
    return (
        <div className="pt-2 text-gray-400">
            <footer className="w-full max-w-screen-xl mx-auto px-6 py-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-white uppercase">Resources</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://image-raghu.vercel.app/" className="hover:text-white transition">
                                    Image Enhancer
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-white uppercase">Follow us</h2>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/rv9451"
                                    className="hover:text-white transition"
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/raghvendra-mishra-958aa725b/"
                                    className="hover:text-white transition"
                                >
                                    LinkedIN
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-white uppercase">Legal</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-700 my-6" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} <span className="font-semibold text-white">MovieFinder</span>. All rights reserved. <br />
                        <a
                            href="mailto:raghvendramishra9451@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition"
                        >
                            raghvendramishra9451@gmail.com
                        </a>
                    </p>

                    <div className="flex items-center gap-5 text-xl">
                        <a
                            href="tel:+919451904414"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition"
                        >
                            9451904414
                        </a>
                        <a
                            href="https://www.linkedin.com/in/raghvendra-mishra-958aa725b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://www.instagram.com/m_raghu420?igsh=MXBhYXMwa2ZwaTZ4dw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://m.youtube.com/@InfinityMind96"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 transition"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default footer