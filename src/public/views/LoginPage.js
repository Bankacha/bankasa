import {Col, Row, Form, Button} from "react-bootstrap";


export function LoginPage() {

    return (
        <Row className="h-95 bg-light">
            <div className="col-8 align-self-center">
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Row>
                            <Col xs={8}>
                                <Form.Control placeholder="12345"/>
                            </Col>
                            <Col>
                                <Button variant="success" type="button" className="w-100">Go</Button>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
            <div className="col-4 bg-success shadow-sm">
                <Row className="h-100">
                    <Col className="align-self-center">
                    </Col>
                </Row>
            </div>
        </Row>
    )
}
