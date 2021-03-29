/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import profile_photo from '../img/johntel.png'

const h5Style = {
    "text-align" :  "center",
    "line-height" : 0
}

const MainProfile = () => {
    return (
        <div>
            <section className="s1">
                <div className="main-container">
                    <div className="greeting-wrapper">
                        <h3>Hi 👋, I'm John Akonya</h3>
                    </div>

                    <div className="intro-wrapper">
                        <div className="nav-wrapper">
                            <a href="index.html">
                                <div className="dots-wrapper">
                                    <div id="dot-1" className="browser-dot"></div>
                                    <div id="dot-2" className="browser-dot"></div>
                                    <div id="dot-3" className="browser-dot"></div>
                                </div>
                            </a>

                            <ul id="navigation">
                                <li><a href="index.html#contact">📧 john.akonya@gmail.com</a></li>

                            </ul>
                        </div>
                        
                        <div className="left-column">
                            <img id="profile_pic" src={profile_photo} />
                            <h5 style={h5Style}>Software developer</h5>

                            <p id="settings-note">Check out my <a href="https://github.com/johnakon" target="_blank" rel="noreferrer">Github</a><br /> 
                            I am also on <a href="https://www.linkedin.com/in/akonya-john/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                        </div>

                        <div className="right-column">
                            <div id="preview-shadow">
                                <div id="preview">
                                    <div id="corner-tl" className="corner"></div>
                                    <div id="corner-tr" className="corner"></div>
                                    <h4>What I am interested in</h4>
                                    <p>Software development, Web design, teaching.<br />I am also currently learning cloud computing.</p>
                                    <div id="corner-br" className="corner"></div>
                                    <div id="corner-bl" className="corner"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default MainProfile
