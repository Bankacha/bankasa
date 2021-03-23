import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { saveAndPrintOrder } from "../../../../../store/actions"
import { chargeBill } from "../../../../../store/actions"
import { getCurrentUser } from "../../../../../store/selectors/users.selectors"

export function OrderComponentButtons() {

    const dispatch = useDispatch()
    const currentUser = useSelector(getCurrentUser)

    return (
        <Row className="justify-content-around m-0">
            <Col sm={6}>
                <Button onClick={() => dispatch(saveAndPrintOrder(currentUser.name))} className="w-100 py-3 mt-2" variant='outline-light'>Print &amp; Save</Button>
            </Col>
            <Col sm={6}>
                <Button onClick={() => dispatch(chargeBill())} className="w-100 py-3 mt-2" variant='danger'>Charge</Button>
            </Col>
        </Row>
    )
}