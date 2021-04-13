import { Col } from "react-bootstrap";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { clearActiveBillItem, logOut } from "../../store/actions";
import { getActiveBillItem, getCurrentUser } from "../../store/selectors";

export function LogOutButton() {

    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser)
    const activeBillItems = useSelector(getActiveBillItem)

    const handleLogOut = () => {
        const bill = { ...activeBillItems }
        dispatch(logOut())
        if (activeBillItems) {
            dispatch(clearActiveBillItem(bill))
        }
    }

    return (
        currentUser ? <Col className='text-right' sm={1}><BiLogOutCircle onClick={() => handleLogOut()} size='2em' /></Col> : ''
    )
}