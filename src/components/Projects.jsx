import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'MERN Chat App',
            description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
            tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Socket.io'],
            type: 'Mern Stack',
            githubUrl: 'https://github.com/tentuavinash/Chat-Application-using-MERN',
            liveUrl: 'https://chat-application-using-mern-met5.onrender.com/'
        },
        {
            title: 'Algorithm Visualizer',
            description: 'Interactive web application to visualize sorting and pathfinding algorithms. Built with vanilla JavaScript and Canvas API.',
            tags: ['JavaScript', 'Canvas API', 'Algorithms', 'CSS3'],
            type: 'Frontend',
            githubUrl: 'https://github.com/tentuavinash/algorithm-visualizer',
            liveUrl: 'https://tentuavinash.github.io/algorithm-visualizer/'
        },
        {
            title: 'Task Management API',
            description: 'RESTful API for task management with user authentication, CRUD operations, and real-time updates using WebSockets.',
            tags: ['Express.js', 'PostgreSQL', 'JWT', 'WebSocket'],
            type: 'Backend',
            githubUrl: 'https://github.com/tentuavinash/task-management-api',
            liveUrl: 'https://task-management-api.onrender.com'
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio website showcasing projects and skills with responsive design and smooth animations.',
            tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            type: 'Frontend',
            githubUrl: 'https://github.com/tentuavinash/portfolio-website',
            liveUrl: 'https://tentuavinash.vercel.app'
        }
    ];

    const getTypeColor = (type) => {
        switch (type) {
            case 'Mern Stack':
                return 'from-blue-500 to-purple-500';
            case 'Frontend':
                return 'from-green-500 to-teal-500';
            case 'Backend':
                return 'from-orange-500 to-red-500';
            default:
                return 'from-gray-500 to-gray-700';
        }
    };

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A showcase of my development work and technical capabilities
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center space-x-3">
                                    <div className={`p-3 bg-gradient-to-r ${getTypeColor(project.type)} rounded-lg`}>
                                        <Folder className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                        <span className={`text-sm font-medium bg-gradient-to-r ${getTypeColor(project.type)} bg-clip-text text-transparent`}>
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                        <Github className="w-4 h-4 text-gray-700" />
                                    </a>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                        <ExternalLink className="w-4 h-4 text-gray-700" />
                                    </a>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/tentuavinash" target="_blank" p rel="noopener noreferrer"><button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">View All Projects</button></a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
