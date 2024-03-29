import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getClosedBills, getCurrentBill, getFilteredBills } from "../../store/selectors/billing.selectors";
import { Filter } from "../components/reports/Filter";
import { GeneralInfo } from "../components/reports/GeneralInfo";
import { BillsInfo } from "../components/reports/BillsInfo";
import { CurrentBillInfo } from "../components/reports/CurrentBillInfo";
import { useState } from "react";
import { sumItems } from "../../utils";

export function Reports() {

    const closedBills = useSelector(getClosedBills);
    const currentBill = useSelector(getCurrentBill);
    const filteredBills = useSelector(getFilteredBills);

    const [uncheckedUser, setUncheckedUser] = useState([])

    const bills = filteredBills.length ? filteredBills : closedBills;

    const billsByUser = (users) => {
        const userBills = [];
        bills.forEach(bill => {
            uncheckedUser.forEach(user => {
                if (user.checked === true) {
                    if (bill.user === user.name) {
                        userBills.push(bill)
                    }
                }
            })
        })
        return userBills
    }
    
    const billsTotal = sumItems(bills)

    return (
        <Row className='h-90'>
            <Col className='h-95'>
                <Row className='mt-2'>
                    <Filter />
                </Row>

                <Row className='mt-3 p-2 bg-secondary m-0 rounded'>
                    <GeneralInfo total={billsTotal} bills={bills} setUncheckedUser={setUncheckedUser} />
                </Row>

                <Row className='h-65'>
                    <Col sm={8}  className='h-100'>
                        <BillsInfo bills={billsByUser()} />
                    </Col>
                    <Col sm={4}>
                        <CurrentBillInfo currentBill={currentBill} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}