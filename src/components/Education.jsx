import React from 'react';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Education = () => {
    return (
        <section
            id="education"
            className="py-20 relative overflow-hidden bg-white"
        >
            

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-lg">
                        Education
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Academic excellence with a focus on practical application
                    </p>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg shadow-blue-200/50 hover:shadow-blue-400/50 transition-shadow duration-300 p-8 md:p-12"
                >
                    {/* Header */}
                    <div className="flex items-center mb-6">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-6 shadow-lg"
                        >
                            <GraduationCap className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                Bachelor of Technology
                            </h3>
                            <p className="text-lg text-gray-600">
                                Computer Science Engineering
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            { icon: Award, value: '9.5', label: 'CGPA', color: 'text-blue-600' },
                            { icon: BookOpen, value: '3rd', label: 'Year', color: 'text-purple-600' },
                            { icon: Star, value: 'Top', label: 'Performer', color: 'text-yellow-500' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <item.icon
                                    className={`w-8 h-8 ${item.color} mx-auto mb-3 animate-bounce`}
                                />
                                <div className="text-3xl font-bold text-gray-900 mb-1">
                                    {item.value}
                                </div>
                                <div className="text-gray-600">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Coursework */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">
                            Key Coursework
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Data Structures and Algorithms',
                                'Object-Oriented Programming',
                                'Database Management Systems',
                                'Computer Networks',
                                'Software Engineering',
                                'Operating Systems',
                                'Web Technologies',
                                'Machine Learning',
                            ].map((course, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow shadow-blue-300"></div>
                                    <span className="text-gray-700">{course}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Footer text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-12 text-center"
                >
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        My academic journey has provided me with a strong theoretical
                        foundation, which I continuously apply to real-world projects and
                        challenges.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
