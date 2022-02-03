import React from 'react';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
import image from './photo.jpg';
import pdf from './resume.docx'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className="container">
                <div className="home-page-container" id="home" >
                    <SideBar />
                    <div className="rightBar">
                        <div className="main">
                            <div className="content-container">
                                <div>
                                    <h2 className="name">Hi, My Name is Prasanna</h2>
                                </div>
                                <div>
                                    <h3 className="profession">CODER | MERN STACK DEVELOPER | CHESS LOVER</h3>
                                </div>
                                <div>
                                    <p className="description">Assistant System Engineer at TCS in the morning and Full Stack
                                        developer
                                        at
                                        Night.</p>
                                </div>
                                <a href={pdf} ><button >Download CV</button></a>
                                <Link to="/contact"><button>Contact Me</button></Link>
                            </div>
                            <div className="profile-photo-container">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};

export default Home;
