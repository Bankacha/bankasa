import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/actions/users.actions";
import { getCurrentUser } from "../store/selectors/users.selectors";

export const Layout = ({ children }) => {

    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser)
    
    return (
        <Container className="h-100 bg-light" fluid>
            <Row className="bg-primary text-light shadow-sm p-2 align-items-center">
                <Col sm={11}><Link className='link' to='/'><h1 className='m-0'>Bankasa</h1></Link></Col>
                {
                  currentUser ?  <Col className='text-right' sm={1}><BiLogOutCircle onClick={()=> dispatch(logOut())} size='2em'/></Col> : ''
                }
            </Row>
            {children}
        </Container>
    )
}