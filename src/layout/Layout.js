import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Layout = ({ children }) => {

    return (
        <Container className="h-100 bg-light" fluid>
            <Row className="bg-primary text-light shadow-sm p-2"><Link className='link' to='/'><h1 className='m-0'>Bankasa</h1></Link></Row>
            {children}
        </Container>
    )
}