import { Card, CardDeck, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setActiveBillItem } from "../../store/actions";
import { getBillItems, getCurrentUser} from "../../store/selectors";

export function ActiveBills() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(getCurrentUser);
    const billItems = useSelector(getBillItems);

    const userBills = billItems.filter(bill => bill?.user === currentUser.name);

    const activateBill = (bill) => {
        dispatch(setActiveBillItem(bill))
        history.push('/bill')
    }

    return (
        <Row className='h-90'>
            <Col sm={12} className='h-100 overflow-auto'>
                <Row>
                    {
                        (userBills || []).map((bill, billItemIdx) => {
                            return (
                                <Col key={`billItem-${billItemIdx}`} sm={3}>
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
                                                        bill?.items.map((el, billItemItemIdx) => {
                                                            return (
                                                                <tr key={`billItemItem-${billItemItemIdx}`}>
                                                                    <td>{el.product.name}</td>
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
