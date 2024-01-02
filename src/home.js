import React, { useEffect, useState } from 'react';

export default function Home() {
    const [show, xshow] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            xshow(val => !val);
        }, 6000);

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <div className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="home" id="home">
                <div className="home-content">
                    <div className="name">{show ? (<>Hi! <b>Abhishek Bhakuni</b> here</>) : (<>I'm a <b>Full Stack Web Developer</b></>)}</div>
                    <div className="icons">
                        <div className="icon"><a href="https://www.linkedin.com/in/abhibhakuni9" target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin-in fa-fw"></i></a></div>
                        <div className="icon"><a href="https://github.com/abhi-bhakuni" target='_blank' rel='noreferrer'><i className="fa-brands fa-github fa-fw"></i></a></div>
                        <div className="icon"><a href="https://www.instagram.com/abhi_bhakuni/" target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram fa-fw"></i></a></div>
                        <div className="icon"><a href="https://twitter.com/AbhiBhakuni9" target='_blank' rel='noreferrer'><i className="fa-brands fa-twitter fa-fw"></i></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}