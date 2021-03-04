import { Col, Row } from "react-bootstrap";
import { Categories } from "../components/bill-create/Categories";
import { Products } from "../components/bill-create/Products";
import { OrderComponent } from "../components/bill-create/OrderComponent";

export function BillPage() {

    return (
        <div className="h-100">
            <Row className="bg-primary h-5 text-light shadow-sm"><h1>Bankasa</h1></Row>

            <Row className="bg-light h-95">
                <Col xs={8}>
                    <Row className="h-25 bg-warning pb-3">
                        <Categories />
                    </Row>

                    <Row className="position-absolute h-75 overflow-auto w-100">
                        <Products />
                    </Row>
                </Col>

                <Col className="bg-primary">
                    <OrderComponent/>
                   
                </Col>

            </Row>
        </div>

    )
}
