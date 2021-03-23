import { Col, Row, Table } from "react-bootstrap";
import { BiChevronsRight } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addCurrentBill } from "../../../store/actions";

export function BillsInfo(props) {

    const dispatch = useDispatch();

    return (
        <Row className='mt-3 p-2 bg-secondary m-0'>
            <Col className='p-0'>
                <Table striped bordered hover size="sm" className='bg-light m-0'>
                    <thead>
                        <tr className='text-center'>
                            <th>id</th>
                            <th>Time</th>
                            <th>Table</th>
                            <th className='text-right'>Total</th>
                            <th>Waiter</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (props.bills || []).map((b, i) => {
                                return (
                                    <tr className='text-center' key={b.id}>
                                        <td>{b.id}</td>
                                        <td>{`${b.issued}`.split(' ')[4]}</td>
                                        <td>quick</td>
                                        <td className='text-right'>{b.total}</td>
                                        <td>{b.user}</td>
                                        <th><BiChevronsRight onClick={() => dispatch(addCurrentBill(b.items))} size='1.2em' /></th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}