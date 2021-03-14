import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeButton } from "../components/home/HomeButton";


export function HomePage() {

    return (
        <Row className="h-85">
            <Col sm={12} className="h-25">
                <Row className='bg-info text-dark align-content-center h-100'>
                    <Col xs={10}>
                        <h1 className="m-0 ml-5">Hello, *User!</h1>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Col>
            <Col sm={12} className="h-75">
                <Row className="pr-5 mr-5 h-100 align-content-center justify-content-around">
                    <Link to=''>
                        <Col className="mx-5" sm={12}>
                            <HomeButton>Map</HomeButton>
                        </Col>
                    </Link>
                    <Link to='/bill'>
                        <Col className="mx-5" sm={12}>
                            <HomeButton>Quick</HomeButton>
                        </Col>
                    </Link>
                    <Link to='/admin/products'>
                        <Col className="mx-5" sm={12}>
                            <HomeButton>Admin</HomeButton>
                        </Col>
                    </Link>
                </Row>
            </Col>
        </Row>

    )
}
