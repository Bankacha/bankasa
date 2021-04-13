import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOutButton } from "../public/components/logOutBtn";
import { clearActiveBillItem } from "../store/actions";
import { getActiveBillItem } from "../store/selectors";


export const Layout = ({ children }) => {

    const dispatch = useDispatch();

    const activeBillItem = useSelector(getActiveBillItem);

    const handleClick = () => {
        if (activeBillItem) {
            const bill = {...activeBillItem}
            dispatch(clearActiveBillItem(bill))
        }
    }

    return (
        <Container className="h-100 bg-light" fluid>
            <Row className="bg-primary text-light shadow-sm p-2 align-items-center">
                <Col sm={11}><Link onClick={() => handleClick()} className='link' to='/'><h1 className='m-0'>Bankasa</h1></Link></Col>
                <LogOutButton />
            </Row>
            {children}
        </Container>
    )
}