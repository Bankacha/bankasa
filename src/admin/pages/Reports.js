import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getClosedBills, getCurrentBill } from "../../store/selectors/billing.selectors";
import { Filter } from "../components/reports/Filter";
import { GeneralInfo } from "../components/reports/GeneralInfo";
import { BillsInfo } from "../components/reports/BillsInfo";
import { CurrentBillInfo } from "../components/reports/CurrentBillInfo";

export function Reports() {

    const closedBills = useSelector(getClosedBills);
    const currentBill = useSelector(getCurrentBill);

    return (
        <Row>
            <Col>

                <Row className='mt-2'>
                    <Filter />
                </Row>

                <Row className='mt-3 p-2 bg-secondary m-0'>
                    <GeneralInfo bills={closedBills}/>
                </Row>

                <Row>
                    <Col sm={8}>
                        <BillsInfo bills={closedBills} />
                    </Col>
                    <Col sm={4}>
                        <CurrentBillInfo currentBill={currentBill} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}