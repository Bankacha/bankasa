import { Row, Col, Button } from "react-bootstrap"
import { BillTable } from "./sub-components/BillTable"
import { OrderItems } from "./sub-components/OrderItems"
import { OrderItemsHeader } from "./sub-components/order-component/OrderItemsHeader"
import { OrderItemsFooter } from "./sub-components/order-component/OrderItemsFooter"

export function OrderComponent() {

    return (
        <div className="h-100">
            <Row className="h-50">
                <Col className="h-85">
                    <Row className="text-light h-10">
                        <OrderItemsHeader/>
                    </Row>
                    <Row className="h-85">
                        <OrderItems></OrderItems>
                    </Row>
                    <Row className="h-10 rounded-pill mx-2 bg-light">
                        <OrderItemsFooter></OrderItemsFooter>
                    </Row>
                </Col>
            </Row>
            <Row className="h-50">
                <Col>
                    <Row className="h-80">
                        <Col>
                            <BillTable></BillTable>
                        </Col>
                    </Row>
                    <Row className="text-light h-20">
                        <Col className="text-right" sm={12}>
                            <Row>
                                <Col className="text-right bg-light text-primary py-2">
                                    <h4 className="m-0">TOTAL: 2.800</h4>

                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-around m-0">
                                <Col sm={6}>
                                    <Button className="w-100" variant='outline-light'>Print &amp; Save</Button>
                                </Col>
                                <Col sm={6}>
                                    <Button className="w-100" variant='danger'>Charge</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>

    )
}