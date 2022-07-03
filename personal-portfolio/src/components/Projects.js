import {Col, Container, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../assets/img/project-1.jpg";
import projImg2 from "../assets/img/project-2.jpg";
import projImg3 from "../assets/img/project-3.jpg";
import projImg5 from "../assets/img/project-5.jpg";
import projImg6 from "../assets/img/project-6.jpg";
import projImg7 from "../assets/img/project-7.jpg";
import projImg8 from "../assets/img/project-8.jpg";
import projImg9 from "../assets/img/project-9.jpg";
import projImg10 from "../assets/img/project-10.jpg";
import projImg11 from "../assets/img/project-11.jpg";
import projImg12 from "../assets/img/project-12.jpg";
import projImg13 from "../assets/img/project-13.jpg";
import projImg14 from "../assets/img/project-14.jpg";
import projImg18 from "../assets/img/project-18.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg4 from "../assets/img/project-4.jpg";
import projImg15 from "../assets/img/project-15.jpg";
import projImg16 from "../assets/img/project-16.jpg";
import projImg17 from "../assets/img/project-17.jpg";

export const Projects = () => {

    const projects = [
        {
            title: "Rollo - Food",
            description: "Design & Development",
            imgUrl: projImg15,
        },
        {
            title: "Fitness",
            description: "Design",
            imgUrl: projImg16,
        },
        {
            title: "Repeat Alarm",
            description: "Design & Development",
            imgUrl: projImg17,
        },
        {
            title: "Yeroku - Stylist",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Codiest.Co",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "ShortBioLink.Com",
            description: "Development",
            imgUrl: projImg3,
        },

        {
            title: "Book Reading",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "Memo Pad",
            description: "Design & Development",
            imgUrl: projImg6,
        },
        {
            title: "Nexus",
            description: "Design & Development",
            imgUrl: projImg7,
        },
        {
            title: "Learning System",
            description: "Design & Development",
            imgUrl: projImg8,
        },

        {
            title: "Industry",
            description: "Design & Development",
            imgUrl: projImg9,
        },
        {
            title: "NomiTap",
            description: "Design & Development",
            imgUrl: projImg10,
        },
        {
            title: "Industry",
            description: "Design & Development",
            imgUrl: projImg11,
        },
        {
            title: "NomiTap",
            description: "Design & Development",
            imgUrl: projImg12,
        },
        {
            title: "Meditation Relaxing",
            description: "Game Development",
            imgUrl: projImg13,
        },
        {
            title: "Niftyverse",
            description: "Design & Development",
            imgUrl: projImg18,
        },
        {
            title: "NFT Marketplace",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Learning System",
            description: "Design & Development",
            imgUrl: projImg14,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here are some of the latest creative web and mobile projects, I was a part
                                        of.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="second">
                                        <Tab.Content id="slideInUp"
                                                     className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
