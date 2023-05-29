import "./App.css";
import "../css/custom.css";
import "../css/font-awesome.min.css";
import "../css/kube.min.css";
import "../css/custom.min.css";
import dp from "../img/dp.jpg";
import { Link } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function App() {
  const headingStyle = {
    fontFamily: "Montserrat",
    textTransform: "none",
  };
  return (
    <div className="App">
      <div className="main-nav">
        <div className="container-nav">
          <header className="group top-nav">
            <div
              className="navigation-toggle"
              data-tools="navigation-toggle"
              data-target="#navbar-1"
            >
              {/* <span className="logo">LOGO</span> */}
            </div>
            <div className="nav-container">
              <nav id="navbar-1" className="navbar item-nav">
                <ul className="nav-ul">
                  <li className="active">
                    {/* <a href="#about">About</a> */}
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={300}
          
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    {/* <a href="#experiences">Experiences</a> */}
                    <Link
                      activeClass="active"
                      to="experiences"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={400}
                      >Experiences</Link>
                  </li>
                  <li>
                    {/* <a href="#achievements">Projects</a> */}
                    <Link
                      activeClass="active"
                      to="achievements"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                      >Projects</Link>
                  </li>
                  <li>
                    {/* <a href="#skills">Skills</a>
                     */}

<Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={600}
                      >Skills</Link>
                  </li>
                  <li>
                    <a href="#contact">Talk to Me</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>

      {/* <!-- Introduction --> */}
      <div className="intro section" id="about">
        <div className="container" id="about-id">
          <div className="container-contents">
            <div className="units-row units-split wrap" id="about-conatiner">
              <div className="unit-20">
                <img src={dp} alt="Avatar" />
              </div>
              <div className="unit-80 cursorcontainer">
                <h1 style={headingStyle}>
                  {" "}
                  Myself Abhishek Ranjan ,<br />
                  <span
                    style={{ color: "#00a8ff", fontWeight: "bold" }}
                    id="typed-text"
                    className="typed-text"
                  >
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={["Developer", "ML Practitioner", "Designer"]}
                      onLoop={(loopCount) =>
                        console.log(`Just completed loop ${loopCount}`)
                      }
                    />
                  </span>
                </h1>
              </div>
              <p className="about-para">
                I am Pre-Final year student at{" "}
                <span>
                  <a href="https://nitrkl.ac.in/">
                    National Institute of Technology , Rourkela
                  </a>
                </span>{" "}
                majoring in Computer Science and Engineering. Being a problem
                solver and tech enthusiast, I love exploring different domains
                of computer science which aligns with my interest and domain. I
                am passionate about leveraging my technical background in web
                development, data science, computer vision, NLP and machine
                learning to solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Work Experience --> */}
      <div className="work section second" id="experiences">
        <div className="container" id="experiences-id">
          <h1>
            Work
            <br />
            Experiences
          </h1>
          <ul className="work-list">
            <li>Oct 2022-Dec 2022</li>
            <li>
              <a href="https://erip.in/">eRIP</a>
            </li>
            <li>Graphics Design Intern</li>
          </ul>
          <ul className="work-list">
            <li>August 2022-Oct 2022</li>
            <li>
              <a href="https://ssoc.devfolio.co/">Social Summer of Code 2022</a>
            </li>
            <li>OSS Contributor</li>
          </ul>
          <ul className="work-list">
            <li>July 2021-Jan 2022</li>
            <li>
              <a href="https://codeforcause.org/">Code For Cause</a>
            </li>
            <li>Graphics Design + Frontend web Intern </li>
          </ul>
        </div>
      </div>

      {/* <!-- Projects & Achievements --> */}
      <div className="award section second" id="achievements">
        <div className="container" id="projects-id">
          <h1>
            Projects &amp;
            <br />
            Achievements
          </h1>
          <ul className="award-list list-flat">
            <li>November 2022 - December 2022</li>
            <li>
              <a
                href="https://github.com/AbhishekRP2002/OCR-Guide/blob/main/Automatic_Number_Plate_Recognition_with_Easy_OCR_and_OpenCV.ipynb"
                className="href"
              >
                Automatic Number Plate Recognition System using OpenCV and
                EasyOCR
              </a>
            </li>
            <li>
              <a href="https://github.com/AbhishekRP2002/" className="href">
                Object Tracking with OpenCV
              </a>
            </li>
          </ul>
          <ul className="award-list list-flat">
            <li>August 2022 - Novemeber 2022</li>
            <li>
              <a
                href="https://github.com/AbhishekRP2002/ML-AI-Notes-and-Self-Practice/blob/main/GPT3_textsummarize.ipynb"
                className="href"
              >
                Abstractive Text Summarizer
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AbhishekRP2002/project-sentiment-analysis-api"
                className="href"
              >
                Sentiment Analysis API
              </a>
            </li>
            <li>
              <a href="#" className="href">
                Meta Hacker Cup 2022 - Global Rank 214
              </a>
            </li>
            <li>
              <a
                href="https://www.techgig.com/codegladiators/top-ranker"
                className="href"
              >
                Top 20 : Code Gladiators 2022 , Machine Learning Contest
              </a>
            </li>
          </ul>
          <ul className="award-list list-flat">
            <li>May 2022 - July 2022</li>
            <li>
              <a href="" className="href">
                Microsoft Learn Students Ambassador(MLSA)
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AbhishekRP2002/Sorting-Visualizer"
                className="href"
              >
                Sorting Visualizer
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Technical Skills --> */}
      <div className="skills section second" id="skills">
        <div className="container" id="skills-id">
          <h1>
            Technical
            <br />
            Skills
          </h1>
          <ul className="skill-list list-flat">
            <li>Programming Language</li>
            <li>C/C++ - Python - Javascript</li>
          </ul>
          <ul className="skill-list list-flat">
            <li>Database</li>
            <li>MySQL - MongoDB </li>
          </ul>
          <ul className="skill-list list-flat">
            <li>Frameworks and Libraries</li>
            <li>
              ReactJS - Bootstrap - Tensorflow - Keras - PyTorch - TensorFlowJS
              - Scikit-Learn - Numpy - Pandas
            </li>
          </ul>
          <ul className="skill-list list-flat">
            <li>Web Technologies</li>
            <li>
              Git - Version Control Systems- Webpack - Vercel - Netlify - Figma
              - HTML - CSS - Adobe Premiere Pro - Adobe After Effects - VS Code
              - Adobe Illustrator
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Quote --> */}
      <div className="quote">
        <div className="container-image text-centered">
          <h1>
            
            Knowledge is Power.</h1>
        </div>
      </div>

      <footer>
        <div 
        className="container-bottom">
        
            <div className="designer-class">
              <p>Designed by 
                <a className="name-class" href="https://linktr.ee/Abhishekrp2002">
                   Abhishek Ranjan

                </a>
                </p>
            </div>

        
        </div>
      </footer>
    </div>
  );
}

export default App;
