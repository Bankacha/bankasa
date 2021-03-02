import {Col} from "react-bootstrap";


export function HomeButton(props) {
    return (
        <Col className="bg-success rounded mx-5 c-pointer">
            <h3 className="my-5 text-center text-light">{props.children}</h3>
        </Col>
    )
}
