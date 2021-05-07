import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { reduceStock, saveAndPrintOrder } from "../../../../../store/actions"
import { chargeBill } from "../../../../../store/actions"
import { getActiveBillItem, getCurrentUser, getOrderItems } from "../../../../../store/selectors"

export function OrderComponentButtons() {

    const dispatch = useDispatch()
    const currentUser = useSelector(getCurrentUser)
    const orderItems = useSelector(getOrderItems)
    const activeBillItem = useSelector(getActiveBillItem)

    const handleOrder = () => {
        const oi = [...orderItems]
        if (orderItems.length) {
            dispatch(saveAndPrintOrder(currentUser.name))
            dispatch(reduceStock(oi))
        }
    }

    const handleChargeBill = () => {
        if (activeBillItem) {
            dispatch(chargeBill())
        }
    }

    return (
        <Row className="justify-content-around m-0">
            <Col sm={6}>
                <Button onClick={() => handleOrder()} className="w-100 py-3 mt-2" variant='outline-light'>Print &amp; Save</Button>
            </Col>
            <Col sm={6}>
                <Button onClick={() => handleChargeBill()} className="w-100 py-3 mt-2" variant='danger'>Charge</Button>
            </Col>
        </Row>
    )
}
