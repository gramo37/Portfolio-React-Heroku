import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from './photo.jpg';

const SideBar = () => {

    const ref = useRef()
    const iconRef = useRef(null);
    const sideBarRef = useRef(null);
    const [hamIcon, sethamIcon] = useState(false);

    // If clicked outside
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (hamIcon && ref.current && !ref.current.contains(e.target)) {
                sethamIcon(false)
                hamburgerClicked()
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [hamIcon])



    const hamburgerClicked = () => {
        if (!hamIcon) {
            sideBarRef.current.classList.add("sideBarOpen")
            sideBarRef.current.classList.remove("sideBarClose")
            iconRef.current.classList.add("change")
            sethamIcon(true)
        }
        else if (hamIcon) {
            sideBarRef.current.classList.remove("sideBarOpen")
            sideBarRef.current.classList.add("sideBarClose")
            iconRef.current.classList.remove("change")
            sethamIcon(false)
        }

    }

    return (
        <>
            <div ref={ref}>
                <div className="icon-container" ref={iconRef} onClick={hamburgerClicked}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="sideBar" ref={sideBarRef} id="sideBar-id">
                    <div>
                        <img src={image} alt="" />
                        <h3>PRASANNA</h3>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/"><div>Home</div></Link></li>
                            <li><Link to="/skills"><div>Skills</div></Link></li>
                            <li><Link to="/projects"><div>Projects</div></Link></li>
                            <li><Link to="/about"><div>About me</div></Link></li>
                            <li><Link to="/contact"><div>Contact Me</div></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
};

export default SideBar;
