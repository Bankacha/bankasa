import {Col, Row} from "react-bootstrap";
import {HomeButton} from "../components/home/HomeButton";


export function HomePage() {

    return (
        <Row className="h-85">
            <Col xs={12} className="h-25">
                <Row className='bg-info text-dark align-content-center h-100'>
                    <Col xs={10}>
                        <h1 className="m-0 ml-5">Hello, *User!</h1>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} className="h-75">
                <Row className="p-5 h-100 align-content-center">
                    <HomeButton>Map</HomeButton>
                    <HomeButton>Quick</HomeButton>
                    <HomeButton>Admin</HomeButton>
                </Row>
            </Col>
        </Row>
        
    )
}
