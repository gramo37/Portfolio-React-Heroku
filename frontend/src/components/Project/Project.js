import React from "react";
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/SideBar";

const Project = () => {
  return (
    <>
      <div className="container">
        <div className="projects-container" id="projects">
          <SideBar />
          <div className="rightBar">
            <div className="main">
              <div className="projects-inner-container">
                <div className="inner-heading">
                  <h2>Projects</h2>
                </div>
                <div className="inner-content">
                  <div className="projects-inner-inner-container">
                    <div className="card">
                      <div className="card-heading">
                        <h3>React - News App</h3>
                      </div>
                      <div className="card-content">
                        <p>
                          This application uses a news api to fetch global news.
                          Later on react is used to display the fetched data.
                        </p>
                      </div>
                      <div className="card-buttons">
                        <a href="/notFound">
                          <button>Project</button>
                        </a>
                        <a href="https://github.com/gramo37/newsApp">
                          <button>GitHub</button>
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <h3>iNotebook</h3>
                      </div>
                      <div className="card-content">
                        <p>Uses MERN technology to store todos.</p>
                      </div>
                      <div className="card-buttons">
                        <a href="/notFound">
                          <button>Project</button>
                        </a>
                        <a href="https://github.com/gramo37/iNotebook">
                          <button>GitHub</button>
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <h3>Stock Market Tracker App</h3>
                      </div>
                      <div className="card-content">
                        <p>
                          This repository can help you to track Indian stock
                          market. The code uses an python library called
                          bseIndia to get live prices from the BSE, later on
                          compares it with the values provided and sends a mail
                          if the price goes above target price or goes below
                          stoploss price.
                        </p>
                      </div>
                      <div className="card-buttons">
                        <a href="/notFound">
                          <button>Project</button>
                        </a>
                        <a href="https://github.com/gramo37/stockTracker">
                          <button>GitHub</button>
                        </a>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-heading">
                        <h3>React - LinkedIn Clone</h3>
                      </div>
                      <div className="card-content">
                        <p>
                          LinkedIn Clone - made using react redux and firebase.
                        </p>
                      </div>
                      <div className="card-buttons">
                        <a href="/notFound">
                          <button>Project</button>
                        </a>
                        <a href="https://github.com/gramo37/linkedIn-clone">
                          <button>GitHub</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Project;
