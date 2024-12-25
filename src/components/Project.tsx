import React from "react";
import mock01 from '../assets/images/Rectangle 1.png';
import mock02 from '../assets/images/project 4.png';
import mock03 from '../assets/images/tickets.png';
import mock04 from '../assets/images/61.png';
import mock05 from '../assets/images/time app.png';
import mock06 from '../assets/images/HIKE UI.png';
import mock07 from '../assets/images/aman.png';
import mock08 from '../assets/images/salati.png';
import mock09 from '../assets/images/proj1.png';
import mock10 from '../assets/images/home page (2).png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.figma.com/proto/tIluAEIgmnwBUmwCMVyNFq/saudi2034?node-id=1-2&t=DMdcEF5bkJv0zr6a-1" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/proto/tIluAEIgmnwBUmwCMVyNFq/saudi2034?node-id=1-2&t=DMdcEF5bkJv0zr6a-1" target="_blank" rel="noreferrer"><h2>FIFA World Cup 2034</h2></a>
                <p> Designed a comprehensive ticketing platform UI/UX using Figma, showcasing advanced attention to detail and a focus on creating a seamless and visually engaging booking experience.</p>
            </div>
            <div className="project">
                <a href="https://joyful-rabanadas-e9abac.netlify.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://joyful-rabanadas-e9abac.netlify.app/" target="_blank" rel="noreferrer"><h2>HikeSaudi</h2></a>
                <p> Developed a fully interactive and responsive website for Saudi hiking trails using React and CSS. Demonstrated expertise in crafting user-friendly designs with smooth navigation and dynamic features.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/proto/VLDRJrZiPA08jiooQYovaS/Untitled?node-id=5-573&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/proto/VLDRJrZiPA08jiooQYovaS/Untitled?node-id=5-573&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><h2>Salati: Healthy Salad Delivery 
                </h2></a>
                <p>  Created a professional salad delivery app prototype with Figma, focusing on intuitive user journeys and sleek visuals to enhance user engagement and satisfaction.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/proto/3dbPMyyKQJTgyyLbOY7mGl/aman?node-id=8-1139&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/proto/3dbPMyyKQJTgyyLbOY7mGl/aman?node-id=8-1139&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><h2>Aman: Online Mental Health Support platform</h2></a>
                <p>Designed a mental health support app in Figma, reflecting a deep understanding of accessibility and user-centric design for a seamless therapy session experience.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/proto/fEAFYwGDE8kQ76AWJUEvTI/HikeSaudi%3A-Hiking-Trail-Platform-(Figma-UI)?node-id=0-1&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/proto/fEAFYwGDE8kQ76AWJUEvTI/HikeSaudi%3A-Hiking-Trail-Platform-(Figma-UI)?node-id=0-1&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><h2>HikeSaudi (Figma UI)</h2></a>
                <p>This is the foundational UI design for the HikeSaudi platform, created using Figma. It served as the blueprint for the React-based version of the application. The design features a fully interactive user interface with seamless navigation, dynamic transitions, and engaging visuals. Focused on a user-centric experience, the Figma prototype laid the groundwork for developing the coded version, showcasing my ability to transition from design to implementation effectively.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/proto/f4dJcpxq6bU28suRHEfDYt/Time-Management-Mobile-Application?node-id=0-1&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/proto/f4dJcpxq6bU28suRHEfDYt/Time-Management-Mobile-Application?node-id=0-1&t=Coszupt7A5XrdHvB-1" target="_blank" rel="noreferrer"><h2>Time Management Mobile Application</h2></a>
                <p>Designed a productivity-enhancing time and task management app in Figma, showcasing my ability to simplify complex workflows into a user-friendly interface.</p>
            </div>
            <div className="project">
                <a href="https://cozy-muffin-272a83.netlify.app" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://cozy-muffin-272a83.netlify.app" target="_blank" rel="noreferrer"><h2>SoundBeam: Modern Headphones E-Commerce Platform</h2></a>
                <p>Built an elegant e-commerce website for premium headphones using React and JavaScript, highlighting a modern and professional interface tailored for tech-savvy users.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>GetTicketed(Under Development)</h2></a>
                <p>Developed a visually engaging ticketing platform for Saudi events using React, emphasizing intuitive navigation and dynamic filtering. (Still under development.)</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Osteria Restaurant</h2></a>
                <p>
                Built a vibrant and responsive website for an Italian restaurant using HTML, CSS, and JavaScript, blending functionality with elegant design.</p>
            </div>
            <div className="project">
                <a href="https://www.figma.com/proto/YpMtYG6FP05SnJQnGHktvp/Untitled?node-id=1-28&t=Pv3FiIWFZw60FuEF-1" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.figma.com/proto/YpMtYG6FP05SnJQnGHktvp/Untitled?node-id=1-28&t=Pv3FiIWFZw60FuEF-1" target="_blank" rel="noreferrer"><h2>SkyPort: Airport Management Mobile Application</h2></a>
                <p>Designed an intuitive and user-friendly mobile application prototype using Figma for seamless airport navigation and services. The app includes features such as flight booking, real-time flight tracking, airport maps, and a comprehensive airport guide. Focused on providing a smooth user experience with modern visuals and interactive elements to simplify travel management. This design ensures accessibility and responsiveness, catering to a diverse range of users.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;