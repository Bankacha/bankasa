import { Col } from "react-bootstrap";


export function AdminButton(props) {
    return (
        <Col className="bg-primary rounded c-pointer h-50 py-1">
            <h3 className="my-5 text-center text-light">{props.children}</h3>
        </Col>
    )
}