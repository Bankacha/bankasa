import { Card, CardDeck, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setActiveBillItem } from "../../store/actions";
import { getBillItems, getCurrentUser } from "../../store/selectors";
import { calculateItems } from "../../utils";

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

    const calculateTotal = (id) => calculateItems(billItems.find(bill => bill.id === id).items);

    return (
        <Row className='h-90'>
            <Col sm={12} className='h-100 overflow-auto'>
                <Row>
                    {
                        userBills.length ? userBills.map((bill, billItemIdx) => {
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
                                                                    <td className='text-right'>{el.quantity}</td>
                                                                    <td className='text-right'>{el.quantity * el.product.price}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th scope="row">Total</th>
                                                        <td colSpan='2' className='text-center'><strong>{calculateTotal(bill.id)}</strong></td>
                                                    </tr>
                                                </tfoot>
                                            </Table>
                                        </Card>
                                    </CardDeck>
                                </Col>
                            )
                        }) : (
                            <Col>
                                <div className='text-center mt-5'>
                                    <img src='https://img.pngio.com/open-empty-box-png-image-royalty-free-stock-png-images-for-your-empty-box-png-256_256.png' alt='empty box'/>
                                    <h1>Currently there's no active bills for this user</h1>
                                </div>
                            </Col>

                        )
                    }
                </Row>
            </Col>
        </Row>
    )
}
