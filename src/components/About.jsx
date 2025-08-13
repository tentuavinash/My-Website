import React from "react";
import { GraduationCap, Award, Code2, Brain } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
    {
        icon: GraduationCap,
        title: "B.Tech Student",
        description: "3rd Year, Computer Science Engineering",
    },
    {
        icon: Award,
        title: "Academic Excellence",
        description: "9.5/10 CGPA - Consistent Top Performer",
    },
    {
        icon: Code2,
        title: "Full Stack Development",
        description: "Modern web technologies & frameworks",
    },
    {
        icon: Brain,
        title: "DSA Expertise",
        description: "Strong algorithmic problem-solving skills",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="py-24 bg-gradient-to-b from-white via-blue-50 to-purple-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        About Me
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                        A passionate developer with a strong foundation in computer science
                        and a drive for innovation.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg text-gray-700 leading-relaxed"
                    >
                        <p>
                            I'm a passionate B.Tech student in my 3rd year, maintaining an
                            impressive{" "}
                            <span className="font-semibold text-blue-600">9.5 CGPA</span> while
                            actively developing my expertise in full-stack web development.
                            My journey combines rigorous academic learning with hands-on
                            project experience.
                        </p>
                        <p>
                            What sets me apart is my dual focus on both{" "}
                            <span className="font-semibold text-emerald-600">
                                practical development skills
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-emerald-600">
                                strong algorithmic thinking
                            </span>
                            . I believe that excellent software engineering requires both
                            creative problem-solving and solid computer science fundamentals.
                        </p>
                        <p>
                            Currently seeking opportunities to apply my skills in challenging
                            projects and contribute to innovative teams that value both
                            technical excellence and continuous learning.
                        </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                        className="grid sm:grid-cols-2 gap-6"
                    >
                        {highlights.map(({ icon: Icon, title, description }, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: { opacity: 1, y: 0 },
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Icon className="w-8 h-8 text-blue-600" />
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">{description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-20 p-10 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl text-white text-center shadow-lg"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        Ready to Make an Impact
                    </h3>
                    <p className="text-lg opacity-90 max-w-3xl mx-auto">
                        With a strong foundation in computer science principles and growing
                        expertise in modern web technologies, I'm excited to tackle
                        challenging problems and contribute to meaningful projects.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
