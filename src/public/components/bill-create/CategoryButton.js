import {Col, Row} from "react-bootstrap";

export function CategoryButton({children}) {
    return (
        <Col xs={2} className="align-self-end">
            <Row>
                <Col
                    className="c-pointer p-3 m-2 mx-4 bg-light text-center text-dark rounded shadow-sm">
                    {children}
                </Col>
            </Row>
        </Col>
    )
}
