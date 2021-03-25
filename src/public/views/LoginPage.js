import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLogUser } from "../../store/actions/users.actions";


export function LoginPage() {

    const dispatch = useDispatch();
    const [password, setPassword] = useState(null);

    return (
        <Row className="h-95 bg-light">
            <div className="col-8 align-self-center">
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Row>
                            <Col xs={8}>
                                <Form.Control onChange={e => setPassword(e.target.value)} placeholder="12345" />
                            </Col>
                            <Col>
                                <Link to={'/'}>
                                    <Button onClick={() => dispatch(setLogUser(password))} variant="success" type="button" className="w-100">Go</Button>
                                </Link>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
            <div className="col-4 bg-primary shadow-sm">
                <Row className="h-100">
                    <Col className="align-self-center">
                    </Col>
                </Row>
            </div>
        </Row>
    )
}
