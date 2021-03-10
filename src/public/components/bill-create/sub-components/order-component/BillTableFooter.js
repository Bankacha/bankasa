import { Row, Col } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { billTotalSelector } from "../../../../../store/selectors"

export function BillTableFooter() {

    const total = useSelector(billTotalSelector)
    return (
        <Col className="text-right" sm={12}>
            <Row>
                <Col className="text-right bg-light text-primary py-2">
                    <h4 className="m-0">TOTAL: {total}</h4>
                </Col>
            </Row>
        </Col>
    )
}