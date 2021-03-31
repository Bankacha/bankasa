import { Row, Table, Col } from "react-bootstrap";
import { useSelector } from "react-redux"
import { getBillItems, getClosedBills } from "../../../../store/selectors";

export function BillTable() {

    const billItems = useSelector(getBillItems)
    const closedBills = useSelector(getClosedBills)
    
    return (
        <Row>
            <Col className="w-100 h-100 position-absolute overflow-auto">
                <Table striped hover size="sm" variant=''>
                    <tbody className="text-light w-100 position-absolute px-3">
                        {
                            billItems.map((el, i) => {
                                return (
                                    <tr key={i} className='row w-100'>
                                        <td className='col-sm-7'>{el.product?.name}</td>
                                        <td className='col-sm-3'>{el?.quantity}</td>
                                        <td className='col-sm-2 text-right'>{el.product?.price}</td>
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