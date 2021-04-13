import { Card, CardDeck, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setActiveBillItem } from "../../store/actions";
import { getActiveBills, getCurrentUser } from "../../store/selectors";

export function ActiveBills() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(getCurrentUser);
    const activeBills = useSelector(getActiveBills);

    const userBills = activeBills?.filter(bill => bill?.user === currentUser.name)

    const activateBill = (bill) => {
        dispatch(setActiveBillItem(bill))
        history.push('/bill')
    }

    return (
        <Row className='h-90'>
            <Col sm={12} className='h-100 overflow-auto'>
                <Row>
                    {
                        (userBills || []).map((bill, i) => {
                            return (
                                <Col key={bill.id} sm={3}>
                                    <CardDeck>
                                        <Card onClick={() => activateBill(bill)} className='mt-2 p-1' style={{ width: '18rem' }}>
                                            <Table striped bordered hover size="sm">
                                                <thead>
                                                    <tr className='text-center'>
                                                        <th colSpan='3'>Bill No' {bill.id}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        bill?.items.map((el, i) => {
                                                            return (
                                                                <tr>
                                                                    <td key={i + 1}>{el.product.name}</td>
                                                                    <td>{el.quantity}</td>
                                                                    <td>{el.quantity * el.product.price}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </Table>
                                        </Card>
                                    </CardDeck>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}