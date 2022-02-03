import React from 'react';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';

const About = () => {
    return (
        <>
            <div className="container">
                <div className="about-me-container" id="about">
                    <SideBar />
                    <div className="rightBar">
                        <div className="main">
                            <div className="inner-container">
                                <div className="inner-heading">
                                    <h2>About Me</h2>
                                </div>
                                <div className="about-me-inner-content">
                                    <p>
                                        Being a part of an amazing team, developed an award winning final year project by using
                                        <b> YOLO algorithm</b> and <b>Basic python knowledge</b>.
                                    </p>
                                    <p>
                                        Currently, working as an Assistant System Engineer at Tata Consultancy Services Ltd, and
                                        have a keen interest in the field of <b>Web development</b> and <b>Blockchain
                                            technology</b>. MERN stack development is
                                        something that has fascinated me and in near future would love to work on MERN projects.
                                    </p>
                                    <p>
                                        When I am not glued to the computer screen I like to spend time with my family, go for a
                                        walk with my father and practice chess.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};

export default About;
