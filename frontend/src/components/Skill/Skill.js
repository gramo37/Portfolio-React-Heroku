import React from 'react';
import Footer from '../Footer/Footer';
import SideBar from '../Sidebar/SideBar';
import ColorInfoBox from './ColorInfoBox';
import "./skill.css"
import SkillItem from './SkillItem';

const Skill = () => {
    return (
        <>
            <div className="container">
                <div className="skills-container" id="skills">
                    <SideBar />
                    <div className="rightBar">
                        <div className="main">
                            <div className="inner-container">
                                <div className="inner-heading">
                                    <h2>Skills</h2>
                                </div>
                                <div className="inner-content skills-inner-content">
                                    <div className="skills-inner-container">
                                        <SkillItem skillName="HTML" proficiency={62} fillColor="green" backColor="whitesmoke"/>
                                        <SkillItem skillName="CSS" proficiency={53} fillColor="#ffbc00" backColor="whitesmoke"/>
                                        <SkillItem skillName="JS" proficiency={45} fillColor="#ffbc00" backColor="whitesmoke"/>
                                        <SkillItem skillName="React" proficiency={45} fillColor="#ffbc00" backColor="whitesmoke"/>
                                        <SkillItem skillName="Mongo DB" proficiency={30} fillColor="#ff6161" backColor="whitesmoke"/>
                                        <SkillItem skillName="Express" proficiency={34} fillColor="#ff6161" backColor="whitesmoke"/>
                                        <SkillItem skillName="Node" proficiency={34} fillColor="#ff6161" backColor="whitesmoke"/>
                                        <SkillItem skillName="Python" proficiency={40} fillColor="#ff6161" backColor="whitesmoke"/>
                                    </div>
                                    <div className="skillsInfo">
                                        <ColorInfoBox boxText="Beginner" boxColor="rgb(160 255 176)"/>
                                        <ColorInfoBox boxText="Elementary" boxColor="#558c3f"/>
                                        <ColorInfoBox boxText="Intermidiate" boxColor="#faeb38"/>
                                        <ColorInfoBox boxText="Advanced" boxColor="#ff6161"/>
                                        <ColorInfoBox boxText="Mastery" boxColor="rgb(0 102 255)"/>
                                    </div>
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

export default Skill;
