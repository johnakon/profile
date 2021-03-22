import React from 'react'

const AboutMe = () => {
    return (
        <div>

            <section class="s2">
                <div class="main-container">

                    <div class="about-wrapper">
                        <div class="about-me">
                            <h4>More about me 🧑‍ </h4>

                            <p>I am a diligent software developer and tech-enthusiast.</p>

                            <p>I love learning new technologies. I am actively looking for a software development  role to work with a great team & projects that interest me.<br /><br />This is my
					        <a target="_blank" href="resume.pdf" rel="noreferrer"> Resume</a></p>

                            <hr />
                            <div class="container">
                                <p>I have previously worked at Refactory Uganda as a <a href="https://www.refactory.ug/cohort/akonya-john" target="_blank" rel="noreferrer">Junior software developer </a></p>
                            </div>

                        </div>


                        <div class="container">
                            <h4> EXPERTISE 💻 </h4>

                            <p>Fullstack software developer with primary focus on MongoDB + React</p>

                            <div id="skills">
                                <ul>
                                    <li>JavaScript</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>React</li>
                                    <li>Nodejs</li>
                                    <li>Heroku</li>
                                    {/* <li>Git</li> */}
                                </ul>

                                <ul>
                                    <li>Git</li>
                                    <li>MySQL</li>
                                    <li>PostgreSQL</li>
                                    {/* <li>Python</li>
                                    <li>Django</li> */}
                                    <li>HTML/CSS</li>
                                    <li>Debugging</li>
                                    <li>Testing (jest)</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutMe
