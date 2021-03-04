import { Col, Row } from "react-bootstrap"

export function OrderItemsFooter() {

    return (
            <Col className="mx-2 w-100">
                <Row className="d-flex justify-content-between pt-2">
                    <h5>Order Total: 500</h5>
                    <h7 type="button">clear</h7>
                </Row>
            </Col>
    )

}