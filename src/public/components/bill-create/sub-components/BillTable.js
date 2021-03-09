import { Row, Table, Col } from "react-bootstrap";
import { useSelector } from "react-redux"

export function BillTable() {

    const onTable = useSelector(state => state.products.onTable)

    console.log(onTable)

    return (
        <Row>
            <Col className="w-100 h-100 position-absolute overflow-auto">
                <Table striped hover size="sm" variant=''>
                    <tbody className="text-light w-100 position-absolute px-3">
                        {
                            (onTable.length ? onTable : []).map((el, i) => {
                                return (
                                    <tr key={i} className='row w-100'>
                                        <td className='col-sm-7'>{el.item?.name}</td>
                                        <td className='col-sm-3'>{el?.quantity}</td>
                                        <td className='col-sm-2 text-right'>{el.item?.price}</td>
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