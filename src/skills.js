import React from 'react';

export default function Skills() {

    return (
        <div className="skills" id="skills">
            <div className="hskills"><b>SKILLS</b></div>
            <div className="pskills">
                <div className="cskills">
                    <div className="skill" id="skill">
                        <img src="Python Logo.jpg" alt="Python Logo" />
                        <p className="skillname">Python</p>
                    </div>
                    <div className="skill" id="skill">
                        <img src="HTML Logo.webp" alt="HTML Logo" />
                        <p className="skillname">HTML</p>
                    </div>
                    <div className="skill" id="skill">
                        <img src="CSS Logo.webp" alt="CSS Logo" />
                        <p className="skillname">CSS</p>
                    </div>
                    <div className="skill" id="skill">
                        <img src="ReactJS Logo.png" alt="ReactJS Logo" />
                        <p className="skillname">ReactJS</p>
                    </div>
                </div>
            </div>
            <div className="pskills">
                <div className="cskills">
                    <div className="skill" id="skill">
                        <img src="NodeJS Logo.png" alt="NodeJS Logo" />
                        <p className="skillname">NodeJS</p>
                    </div>
                    <div className="skill" id="skill">
                        <img src="MongoDB Logo.png" alt="MongoDB Logo" />
                        <p className="skillname">MongoDB</p>
                    </div>
                    <div className="skill" id="skill">
                        <img src="C Logo.png" alt="C Logo" />
                        <p className="skillname">C</p>
                    </div>
                    <div className="skill" id="skill">
                        <img src="MySQL Logo.png" alt="MySQL Logo" />
                        <p className="skillname">MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}