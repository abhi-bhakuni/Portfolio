import React from 'react';

export default function Projects() {

    const projects = [
        {
            title: 'CHATBOT',
            description: 'ChatBot is a computer program that simulates conversation with humans. It can be used for customer service, education, entertainment and more. It uses "OpenAI API" to understand queries and provide relevant responses, catering to various user needs. It aims to offer an intuitive, user-friendly experience across different platforms.',
            image: 'ChatBot.png',
            link: 'https://github.com/abhi-bhakuni/ChatBot',
        },
        {
            title: 'FLIGHT BOOKING SYSTEM',
            description: 'Flight Booking System project facilitates easy and efficient air travel reservations. It includes features like search filters for flights, seat availability and pricing. The system integrates user-friendly interfaces for browsing, selecting and enhancing the overall travel experience for users.',
            image: 'Flight Booking System.png',
            link: 'https://github.com/abhi-bhakuni/CodSoft',
        },
        {
            title: 'LAPTOP SEARCH ENGINE',
            description: 'Laptop Search Engine project is a platform designed to assist users in finding their ideal laptops. It employs advanced search algorithms to filter through a vast database of laptops, considering specifications and prices. The system provides tailored recommendations, aiding users in making informed purchasing decisions efficiently.',
            image: 'Laptop Search Engine.png',
            link: 'https://github.com/abhi-bhakuni/Laptop-Search-Engine',
        },
        {
            title: 'ARDUINO HUMAN FOLLOWING ROBOT',
            description: 'Arduino Human Following Robot project utilizes sensors and programming on an Arduino board to enable a robot to track and follow human movements autonomously. Using proximity sensors or cameras, it interprets human positions, employing motor controls to navigate and follow a person, demonstrating basic autonomous tracking capabilities.',
            image: 'Human Following Robot.png',
            link: 'Human Following Robot.png',
        },
    ];

    return (
        <div className="project" id="project">
            <div className="hpro"><b>PROJECTS</b></div>
            <div className="cpro">
                {projects.map((project, index) => (
                    <div className={index % 2 === 0 ? "project-row-left" : "project-row-right"} key={index}>
                        <div className="projectimg">
                            <a href={project.link} target='_blank' rel='noreferrer'><img src={project.image} alt={project.title} /></a>
                        </div>
                        <div className="text-overlay">
                            <b>{project.title}</b>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
