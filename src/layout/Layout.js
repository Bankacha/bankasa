import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogOutButton } from "../public/components/logOutBtn";


export const Layout = ({ children }) => {

    return (
        <Container className="h-100 bg-light" fluid>
            <Row className="bg-primary text-light shadow-sm p-2 align-items-center">
                <Col sm={11}><Link className='link' to='/'><h1 className='m-0'>Bankasa</h1></Link></Col>
                <LogOutButton />
            </Row>
            {children}
        </Container>
    )
}