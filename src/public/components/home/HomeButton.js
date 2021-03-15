import {Col} from "react-bootstrap";


export function HomeButton(props) {
    return (
        <Col className="bg-info rounded  c-pointer h-50 py-1">
            <h3 className="my-5 text-center text-dark">{props.children}</h3>
        </Col>
    )
}
