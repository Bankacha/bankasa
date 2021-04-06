import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLogUser } from "../../store/actions/users.actions";
import { getUserByPasword } from "../../store/selectors";


export function LoginPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [password, setPassword] = useState(null);

    const user = useSelector(getUserByPasword(password))

    const handleLogIn = () => {
        if (user) {
            dispatch(setLogUser(user))
            history.push('/')
        } else {
            if (password) {
                alert('no password')
            }
        }

    }


    return (
        <Row className="h-95 bg-light">
            <div className="col-8 align-self-center">
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Row>
                            <Col xs={8}>
                                <Form.Control onChange={e => setPassword(e.target.value)} placeholder="12345" />
                                <p>Password for presentation is: <strong>777</strong></p>
                            </Col>
                            <Col>
                                <Button onClick={() => handleLogIn()} variant="success" type="button" className="w-100">Go</Button>
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
