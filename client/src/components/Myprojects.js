import React from 'react'
import mastercard from '../img/mastercard.png'
import medDisApp from '../img/android.png'

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
                                    <p className="post-intro">This was part of the project from a course I took with Andela Learning Commuity (ALC). </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="post">
                                <img className="thumbnail" alt="" src={medDisApp} />
                                <div className="post-preview">
                                    <h6 className="post-title">Medicine dispensary App (android)</h6>
                                    <p className="post-intro">At Refactory Uganda, with my team we developed a client side android application for ward nurses. </p>
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
