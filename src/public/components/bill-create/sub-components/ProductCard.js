import {Col, Row} from 'react-bootstrap';

export function ProductCard(props) {

    return (
        <Col xs={3}>
            <Row>
                <Col className="c-pointer p-3 m-2 mx-4 bg-dark text-center text-light rounded shadow-sm">
                    <p className="m-0 mb-2">{props.name}</p>
                    <p className="m-0">{props.price}</p>
                </Col>
            </Row>
        </Col>
    )
}
