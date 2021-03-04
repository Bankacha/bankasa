import { Row, Col } from "react-bootstrap"

export function BillTableFooter() {

    return (
        <Col className="text-right" sm={12}>
            <Row>
                <Col className="text-right bg-light text-primary py-2">
                    <h4 className="m-0">TOTAL: 2.800</h4>
                </Col>
            </Row>
        </Col>
    )
}