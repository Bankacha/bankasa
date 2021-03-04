import { Row, Col, Button } from "react-bootstrap"

export function OrderComponentButtons() {

    return (
        <Row className="justify-content-around m-0">
            <Col sm={6}>
                <Button className="w-100" variant='outline-light'>Print &amp; Save</Button>
            </Col>
            <Col sm={6}>
                <Button className="w-100" variant='danger'>Charge</Button>
            </Col>
        </Row>
    )
}