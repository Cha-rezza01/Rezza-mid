import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Welcome to my portfolio! I’m Rezza Pontoh, a Computer Science student currently in my fifth semester at Universitas Klabat. I have a deep interest in technology and enjoy exploring various aspects of it, especially programming and software development. Over the course of my studies, I’ve gained experience in solving problems, developing solutions, and working on projects that challenge my creativity and technical skills. I love learning new tools and technologies, and I’m always eager to expand my knowledge and improve my capabilities. While I am still in the early stages of my career, I am dedicated to growing both my technical skills and my understanding of how technology can be applied to solve real-world problems. My goal is to continue learning, take on new challenges, and eventually contribute meaningfully to the tech industry. Through this portfolio, I hope to showcase some of the projects I’ve worked on and demonstrate my commitment to growth and development in the field of Computer Science.</p>
                <h4>Programming Language & Tools</h4>
                <div className='skills'>
                    <FaHtml5 /> <FaCss3Alt /> <FaJs /> <FaGitSquare />
                    <FaPython />  <FaGithub />
                    <VscCode />

                </div>
            </div>
        </section>
    )
}

export default About
