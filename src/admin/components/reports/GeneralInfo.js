import { useEffect, useState } from "react";
import { Col, Form, Table } from "react-bootstrap"
import { useSelector } from "react-redux";
import { getBillItems } from "../../../store/selectors";
import { getUsers } from "../../../store/selectors/users.selectors";
import { sumItems } from "../../../utils";

export function GeneralInfo({ bills, setUncheckedUser }) {

    const users = useSelector(getUsers);
    const activeBills = useSelector(getBillItems)
    const [userRows, setUserRows] = useState(users.map(u => ({ ...u, checked: true })));

    const billsByUser = (user) => {
        const userBills = [];
        bills.forEach(bill => bill.user === user ? userBills.push(bill) : '')
        return userBills;
    }

    const handleWaiterChecked = (name, checked) => {
        setUserRows(userRows.map(ur => {
            if (ur.name === name) {
                return {
                    ...ur,
                    checked
                }
            }
            return ur;
        }))
    }

    useEffect(()=> {
        setUncheckedUser(userRows)
    }, [userRows, setUncheckedUser])

    console.log(activeBills)

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
                        userRows.map((u, i) => {

                            return (
                                <tr key={i} className='text-center'>
                                    <td>{i + 1}</td>
                                    <td><Form.Check checked={u.checked} onChange={({ target }) => handleWaiterChecked(u.name, target.checked)}></Form.Check></td>
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