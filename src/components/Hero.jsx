import React from "react";
import { motion } from "framer-motion";
// import { Avatar } from "./avatar.jpg";
import { ArrowDown, Github, Linkedin, Mail, Code2, Brain } from "lucide-react";

const Hero = () => {
    const floatingIcons = [
        { Icon: Code2, x: "-80px", y: "-120px", delay: 0 },
        { Icon: Brain, x: "100px", y: "150px", delay: 0.3 },
    ];

    const scrollToAbout = () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
        >
            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, x, y, delay }, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.3,
                        scale: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute"
                    style={{
                        top: "50%",
                        left: "50%",
                        transform: `translate(${x}, ${y})`,
                    }}
                >
                    <Icon className="w-12 h-12 text-purple-400" />
                </motion.div>
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Text */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                            Hi, I’m <br />
                            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                                Avinash Tentu
                            </span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-8 max-w-lg">
                            A passionate Computer Science student, crafting impactful solutions with modern web technologies and sharp problem-solving skills.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4 mb-8">
                            <a
                                href="https://github.com/tentuavinash"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 group"
                            >
                                <Github className="w-6 h-6 text-gray-800 group-hover:text-black" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 group"
                            >
                                <Linkedin className="w-6 h-6 text-blue-700 group-hover:text-blue-800" />
                            </a>
                            <a
                                href="mailto:your@email.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 group"
                            >
                                <Mail className="w-6 h-6 text-red-500 group-hover:text-red-600" />
                            </a>
                        </div>

                        {/* Scroll Button */}
                        <button
                            onClick={scrollToAbout}
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                        >
                            <ArrowDown className="w-5 h-5 mr-2" /> Learn More
                        </button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <motion.img
                            src="/avatar.jpg"
                            alt="Profile"
                            className="
            w-80 h-80 object-cover rounded-full border-4 border-white 
            shadow-lg 
            shadow-blue-300 
            drop-shadow-[0_0_25px_rgba(168,85,247,0.6)] 
        "
                            animate={{
                                y: [0, -10, 0],
                                boxShadow: [
                                    "0px 0px 25px rgba(96,165,250,0.8), 0px 0px 50px rgba(168,85,247,0.6)",
                                    "0px 0px 35px rgba(96,165,250,0.6), 0px 0px 60px rgba(168,85,247,0.4)",
                                    "0px 0px 25px rgba(96,165,250,0.8), 0px 0px 50px rgba(168,85,247,0.6)"
                                ]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
