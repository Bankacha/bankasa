import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { reduceStock, saveAndPrintOrder } from "../../../../../store/actions"
import { chargeBill } from "../../../../../store/actions"
import { getBillItems, getCurrentUser, getOrderItems } from "../../../../../store/selectors"

export function OrderComponentButtons() {

    const dispatch = useDispatch()
    const currentUser = useSelector(getCurrentUser)
    const orderItems = useSelector(getOrderItems)
    const billItems = useSelector(getBillItems)

    const handleOrder = () => {
        const oi = [...orderItems]
        dispatch(saveAndPrintOrder(currentUser.name))
        dispatch(reduceStock(oi))
    }
    console.log(billItems)
    const handleChargeBill = () => {
        if (billItems.length) {
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