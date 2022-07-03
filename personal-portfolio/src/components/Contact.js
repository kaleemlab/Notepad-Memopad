import {Col, Container, Row} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {ArrowRightCircle} from "react-bootstrap-icons";


export const Contact = () => {


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


    return (
        <section className="banner" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg}
                                     alt="Contact Us"/>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <button onClick={() => openInNewTab('https://www.instagram.com/codiest.co/')}>Let’s
                                    Connect <ArrowRightCircle
                                        size={25}/></button>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
