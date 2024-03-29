import { Row, Col } from "react-bootstrap";
import { BillTable } from "./sub-components/BillTable";
import { OrderItems } from "./sub-components/OrderItems";
import { OrderItemsHeader } from "./sub-components/order-component/OrderItemsHeader";
import { OrderItemsFooter } from "./sub-components/order-component/OrderItemsFooter";
import { BillTableFooter } from "./sub-components/order-component/BillTableFooter";
import { OrderComponentButtons } from "./sub-components/order-component/OrderComponentButtons";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {clearActiveBillItem} from "../../../store/actions";

export function OrderComponent() {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(clearActiveBillItem());
        }
    }, [dispatch]);

    return (
        <div className="h-95">
            <Row className="h-50">
                <Col className="h-85">
                    <Row className="text-light h-10">
                        <OrderItemsHeader />
                    </Row>
                    <Row className="h-85">
                        <OrderItems />
                    </Row>
                    <Row className="h-10 mx-2">
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
