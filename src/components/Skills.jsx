import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
    const [animatedSkills, setAnimatedSkills] = useState([]);
    const [counters, setCounters] = useState([0, 0, 0]);
    const skillsRef = useRef(null);
    const counterRef = useRef(null);

    const skillCategories = [
        {
            icon: <Code className="h-6 w-6" />,
            title: 'Frontend Development',
            color: 'from-blue-500 to-blue-600',
            shadow: 'shadow-blue-200',
            skills: [
                { name: 'React.js', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'HTML5/CSS3', level: 95 },
                { name: 'Tailwind CSS', level: 88 },
                { name: 'JavaScript ES6+', level: 90 }
            ]
        },
        {
            icon: <Database className="h-6 w-6" />,
            title: 'Backend Development',
            color: 'from-emerald-500 to-emerald-600',
            shadow: 'shadow-emerald-200',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Express.js', level: 75 },
                { name: 'MongoDB', level: 75 },
                { name: 'PostgreSQL', level: 75 },
                { name: 'RESTful APIs', level: 85 }
            ]
        },
        {
            icon: <Cpu className="h-6 w-6" />,
            title: 'Data Structures & Algorithms',
            color: 'from-purple-500 to-purple-600',
            shadow: 'shadow-purple-200',
            skills: [
                { name: 'Problem Solving', level: 88 },
                { name: 'Time Complexity', level: 85 },
                { name: 'Dynamic Programming', level: 80 },
                { name: 'Graph Algorithms', level: 78 },
                { name: 'System Design', level: 70 }
            ]
        },
        {
            icon: <Wrench className="h-6 w-6" />,
            title: 'Tools & Technologies',
            color: 'from-orange-500 to-orange-600',
            shadow: 'shadow-orange-200',
            skills: [
                { name: 'Git/GitHub', level: 90 },
                { name: 'VS Code', level: 95 },
                { name: 'Vite/Webpack', level: 75 },
                { name: 'Linux/Terminal', level: 80 },
                { name: 'Docker', level: 50 }
            ]
        }
    ];

    // Skill bars animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimatedSkills(skillCategories.map(cat =>
                        cat.skills.map(skill => skill.level)
                    ));
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounter([10, 225, 10]); // target values
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateCounter = (targets) => {
        let start = [0, 0, 0];
        const duration = 1500; // 1.5s
        const steps = 30;
        const interval = duration / steps;

        let stepCount = 0;
        const timer = setInterval(() => {
            stepCount++;
            setCounters(start.map((s, i) =>
                Math.min(Math.round((targets[i] / steps) * stepCount), targets[i])
            ));
            if (stepCount === steps) clearInterval(timer);
        }, interval);
    };

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={skillsRef}>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Technical <span className="text-blue-600">Skills</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A comprehensive toolkit built through academic study and practical project experience
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl shadow-lg hover:${category.shadow} hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden`}
                        >
                            <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{category.title}</h3>
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700 font-medium">{skill.name}</span>
                                            <span className="text-sm text-gray-500">
                                                {animatedSkills[index]?.[skillIndex] ?? 0}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                            <div
                                                className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: `${animatedSkills[index]?.[skillIndex] ?? 0}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Counters Section */}
                <div ref={counterRef} className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{counters[0]}+</div>
                        <div className="text-gray-600">Technologies Learned</div>
                    </div>
                    <div className="p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">{counters[1]}+</div>
                        <div className="text-gray-600">DSA Problems Solved</div>
                    </div>
                    <div className="p-6 hover:scale-105 transition-all duration-300">
                        <div className="text-3xl font-bold text-purple-600 mb-2">{counters[2]}+</div>
                        <div className="text-gray-600">Projects Completed</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
