import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "../../../../../store/actions";
import { orderTotalSelector } from "../../../../../store/selectors";
import { BiXCircle } from "react-icons/bi";

export function OrderItemsFooter() {

    const dispatch = useDispatch()
    const total = useSelector(orderTotalSelector)

    return (
        <Col className="w-100">
            <Row className="mt-1 pt-2 rounded-pill bg-light">
                <Col sm={10}>
                    <h5>Order Total : {total}</h5>
                </Col>
                <Col sm={2}>
                    <h5><BiXCircle size='0.8em' className='c-pointer' onClick={() => dispatch(clearOrder())} /></h5>
                </Col>
            </Row>
        </Col>
    )
}