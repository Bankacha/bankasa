import { Col, Row } from "react-bootstrap";
import '../../styles/homePage/homePageRows.css'
import { Logo } from "../components/logo";
import '../../styles/homePage/homePageText.css';
import '../../styles/homePage/homePageLogo.css';
import { BigButton } from "../components/bigButton";
import '../../styles/homePage/homePageDiv.css'


export function HomePage() {

    return (
        <div className='homePageDiv'>
            <Row className='homePageRow_1'>
                <Col className='md-10'>
                    <h1 className='homePageText'>Hello, *User!</h1>
                </Col>
                <Col className='homePageLogo' md={2}>
                    <Logo></Logo>
                </Col>
            </Row>
            <Row className='homePageRow_2'>
                <Col>
                    <BigButton text='MAP'></BigButton>
                </Col>
                <Col>
                    <BigButton text='QUICK BILL'></BigButton>
                </Col>
                <Col>
                    <BigButton text='ADMIN'></BigButton>
                </Col>
            </Row>
        </div>

    )
}