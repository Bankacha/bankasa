import { Container, Row } from "react-bootstrap"

export const Layout = ({ children }) => {

    return (
        <Container className="h-100 bg-light" fluid>
            <Row className="bg-primary text-light shadow-sm p-2"><h1 className='m-0'>Bankasa</h1></Row>
            {children}
        </Container>
    )
}