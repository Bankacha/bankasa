import { Col, Table } from "react-bootstrap"
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
                    <tr>
                        <th>#</th>
                        <th>Waiter Name</th>
                        <th>Check In</th>
                        <th>Check Out</th>
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
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{u.name}</td>
                                    <td>*</td>
                                    <td>*</td>
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