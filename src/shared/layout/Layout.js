import { Container, Row } from "react-bootstrap"

export const Layout = ({ children }) => {

    return (
        <Container className="h-100 bg-light" fluid>
            <Row className="bg-primary h-5 text-light shadow-sm"><h1>Bankasa</h1></Row>
            {children}
        </Container>
    )
}