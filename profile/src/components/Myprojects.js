import React from 'react'
import mastercard from '../img/mastercard.png'
import medDisApp from '../img/app.png'
import JuniorBabyCenter from '../img/jbc.png'
import dataVisualization from '../img/plotly-dash.png'

const h3Style = {
    "text-align": "center"
}

const Myprojects = () => {
    return (
        <div>
            <section className="s1">
                <div className="main-container">
                    <h3 style={h3Style}>Some of my past projects</h3>

                    <div className="post-wrapper">
                        <div>
                            <div className="post">
                                <img className="thumbnail" alt="" src={mastercard} />
                                <div className="post-preview">
                                    <h6 className="post-title">Shopping cart</h6>
                                    <p className="post-intro">This was part of the project from a course I took with Andela Learning Commuity (ALC) software developemnt. </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="post">
                                <img className="thumbnail" alt="" src={medDisApp} />
                                <div className="post-preview">
                                    <h6 className="post-title">Medicine dispensary App (android)</h6>
                                    <p className="post-intro">At Refactory Uganda, with my team we developed a client side android mobile application for ward nurses. </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="post">
                                <img className="thumbnail" alt="" src={JuniorBabyCenter} />
                                <div className="post-preview">
                                    <h6 className="post-title">Junior Baby Center</h6>
                                    <p className="post-intro">MVP. A baby sitter hiring website. Baby sitters can register on the website. Website here <a href="https://protected-oasis-66566.herokuapp.com/" target="_blank" rel="noreferrer">Junior Baby Center</a></p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="post">
                                <img className="thumbnail" alt="" src={dataVisualization} />
                                <div className="post-preview">
                                    <h6 className="post-title">Building Dashboards</h6>
                                    <p className="post-intro">I am working on to build dashboards for visualizing data using plotly/dash. <a href="https://dash-auth-menu.herokuapp.com/" target="_blank" rel="noreferrer">Data visualization app.</a> Use [username: john, password: 001] to view this app.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Myprojects
