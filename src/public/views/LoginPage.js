import { useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogUser } from "../../store/actions/users.actions";
import { getCurrentUser } from "../../store/selectors/users.selectors";


export function LoginPage() {

    const dispatch = useDispatch();
    const [password, setPassword] = useState(null);

    // const [to, setTo] = useState('/auth')
    // const currentUser = useSelector(getCurrentUser)

    // useEffect(() => {
    //     if (currentUser) {
    //         currentUser?.role === 'waiter' ? setTo('/') : setTo('/admin')
    //     }
    // }, [currentUser])

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
            <div className="col-4 bg-success shadow-sm">
                <Row className="h-100">
                    <Col className="align-self-center">
                    </Col>
                </Row>
            </div>
        </Row>
    )
}
