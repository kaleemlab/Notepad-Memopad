import {Col, Container, Row} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../assets/img/logo.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <div style={{height: 120, width: 120}}>
                            <img height={70} width={70} src={logo} alt="Logo"/>
                        </div>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Icon"/></a>
                            <a href="#"><img src={navIcon2} alt="Icon"/></a>
                            <a href="#"><img src={navIcon3} alt="Icon"/></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                        <p>Powered By <a target={"_blank"} href="http://codiest.co/">codiest.co</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
