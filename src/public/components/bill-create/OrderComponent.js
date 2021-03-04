import { Row, Col } from "react-bootstrap"
import { BillTable } from "./sub-components/BillTable"
import { OrderItems } from "./sub-components/OrderItems"
import { OrderItemsHeader } from "./sub-components/order-component/OrderItemsHeader"
import { OrderItemsFooter } from "./sub-components/order-component/OrderItemsFooter"
import { BillTableFooter } from "./sub-components/order-component/BillTableFooter"
import { OrderComponentButtons } from "./sub-components/order-component/OrderComponentButtons"

export function OrderComponent() {

    return (
        <div className="h-100">
            <Row className="h-50">
                <Col className="h-85">
                    <Row className="text-light h-10">
                        <OrderItemsHeader />
                    </Row>
                    <Row className="h-85">
                        <OrderItems />
                    </Row>
                    <Row className="h-10 rounded-pill mx-2 bg-light">
                        <OrderItemsFooter />
                    </Row>
                </Col>
            </Row>
            <Row className="h-50">
                <Col>
                    <Row className="h-80">
                        <Col>
                            <BillTable />
                        </Col>
                    </Row>
                    <Row className="text-light h-20">
                        <BillTableFooter />
                        <Col>
                            <OrderComponentButtons />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}