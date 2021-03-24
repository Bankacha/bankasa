import { Col, Form, Table } from "react-bootstrap"
import { useSelector } from "react-redux";
import { getUsers } from "../../../store/selectors/users.selectors";
import { sumItems } from "../../../utils";

export function GeneralInfo({ bills }) {

    const users = useSelector(getUsers)

    const billsByUser = (user) => {
        const userBills = [];
        bills.forEach(bill => bill.user === user ? userBills.push(bill) : '')
        return userBills;
    }



    return (
        <Col sm={12} className='p-0'>
            <Table striped bordered hover size="sm" className='bg-light m-0'>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Check</th>
                        <th>Waiter Name</th>
                        <th>Still Active</th>
                        <th>Card</th>
                        <th>Cash</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) => {
                            return (
                                <tr key={i} className='text-center'>
                                    <td>{i + 1}</td>
                                    <td><Form.Check onChange={()=>console.log(i)}></Form.Check></td>
                                    <td>{u.name}</td>
                                    <td>*</td>
                                    <td>*</td>
                                    <td>*</td>
                                    <td>{sumItems(billsByUser(u.name))}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
    )
}