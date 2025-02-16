import React from "react";
import mock01 from '../assets/images/salati.png';
import mock02 from '../assets/images/project 4.png';
import mock03 from '../assets/images/tickets.png';
import mock04 from '../assets/images/HIKE UI.png';
import mock05 from '../assets/images/مطار.png';
import mock06 from '../assets/images/سماعات.png';
import mock07 from '../assets/images/طب نفسي.png';
import mock08 from '../assets/images/home page (2).png';
import mock09 from '../assets/images/proj1.png';
import mock10 from '../assets/images/فنادق.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://tubular-bienenstitch-1972f5.netlify.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tubular-bienenstitch-1972f5.netlify.app/" target="_blank" rel="noreferrer"><h2>BookEasy</h2></a>
                <p> Developed a modern and seamless hotel booking website using React, Tailwind CSS, and Vite. Implemented Firebase authentication for secure user login, ensuring a smooth and user-friendly experience for booking accommodations worldwide. Designed with a clean and intuitive UI to enhance accessibility and ease of navigation.</p>
            </div>
            <div className="project">
                <a href="https://joyful-rabanadas-e9abac.netlify.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://joyful-rabanadas-e9abac.netlify.app/" target="_blank" rel="noreferrer"><h2>HikeSaudi</h2></a>
                <p> Developed a fully interactive and responsive website for Saudi hiking trails using React and CSS. Demonstrated expertise in crafting user-friendly designs with smooth navigation and dynamic features.</p>
            </div>
            <div className="project">
            <a href="https://www.figma.com/proto/tIluAEIgmnwBUmwCMVyNFq/saudi2034?node-id=1-2&t=DMdcEF5bkJv0zr6a-1" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
            <a href="https://www.figma.com/proto/tIluAEIgmnwBUmwCMVyNFq/saudi2034?node-id=1-2&t=DMdcEF5bkJv0zr6a-1" target="_blank" rel="noreferrer"><h2>FIFA World Cup 2034 
                </h2></a>
                <p> Designed a comprehensive ticketing platform UI/UX using Figma, showcasing advanced attention to detail and a focus on creating a seamless and visually engaging booking experience.</p>
            </div>
            <div className="project">
                <a href="https://legendary-daffodil-6b12b9.netlify.app/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://legendary-daffodil-6b12b9.netlify.app/" target="_blank" rel="noreferrer"><h2>MindCare</h2></a>
                <p>Developed an online mental health clinic platform using React, Tailwind CSS, and Vite. Integrated a database, similar to Firebase, for secure appointment scheduling, ensuring a smooth and efficient booking process. Designed with a calming and intuitive UI to enhance user experience and accessibility.</p>
            </div>
            <div className="project">
                <a href="https://incredible-panda-aed524.netlify.app/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://incredible-panda-aed524.netlify.app/" target="_blank" rel="noreferrer"><h2>AirPods Max</h2></a>
                <p>Developed a modern and minimalistic e-commerce platform for AirPods Max using React and Spline. Integrated immersive 3D visuals for an engaging user experience, ensuring a smooth and intuitive shopping journey.</p>
            </div>
            <div className="project">
                <a href="https://inspiring-gumption-b565cd.netlify.app/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://inspiring-gumption-b565cd.netlify.app/" target="_blank" rel="noreferrer"><h2>طيران السعودية</h2></a>
                <p>Built a comprehensive flight booking platform for domestic travel in Saudi Arabia using React and Tailwind CSS. Aggregates flights from all airlines, offering booking, airport services, and travel management in a seamless experience..</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/proto/fEAFYwGDE8kQ76AWJUEvTI/HikeSaudi%3A-Hiking-Trail-Platform-(Figma-UI)?node-id=0-1&t=DTJ2T9MNhcA0rtNr-1" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/proto/fEAFYwGDE8kQ76AWJUEvTI/HikeSaudi%3A-Hiking-Trail-Platform-(Figma-UI)?node-id=0-1&t=DTJ2T9MNhcA0rtNr-1" target="_blank" rel="noreferrer"><h2>HikeSaudi (Figma UI)</h2></a>
                <p>This is the foundational UI design for the HikeSaudi platform, created using Figma. It served as the blueprint for the React-based version of the application. The design features a fully interactive user interface with seamless navigation, dynamic transitions, and engaging visuals. Focused on a user-centric experience, the Figma prototype laid the groundwork for developing the coded version, showcasing my ability to transition from design to implementation effectively.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>GetTicketed(Under Development)</h2></a>
                <p>Developed a visually engaging ticketing platform for Saudi events using React, emphasizing intuitive navigation and dynamic filtering. (Still under development.)</p>
            </div>
            <div className="project">
                
                <a href="https://bejewelled-stardust-ce3329.netlify.app/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bejewelled-stardust-ce3329.netlify.app/" target="_blank" rel="noreferrer"><h2>Osteria Restaurant</h2></a>
                <p>
                Built a vibrant and responsive website for an Italian restaurant using HTML, CSS, and JavaScript, blending functionality with elegant design.</p>
            </div>
            <div className="project">
            <a href="https://www.figma.com/proto/VLDRJrZiPA08jiooQYovaS/Untitled?node-id=0-1&t=Bc4HaUGE7m7wRJ5x-1" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
            <a href="https://www.figma.com/proto/VLDRJrZiPA08jiooQYovaS/Untitled?node-id=0-1&t=Bc4HaUGE7m7wRJ5x-1" target="_blank" rel="noreferrer"><h2>Salati: Healthy Salad Delivery</h2></a>
                <p>Created a professional salad delivery app prototype with Figma, focusing on intuitive user journeys and sleek visuals to enhance user engagement and satisfaction.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
