import { Col } from "react-bootstrap";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logOut, setLoggedInDuration, clearFilteredBills } from "../../store/actions";
import { getCurrentUser } from "../../store/selectors";

export function LogOutButton() {

    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser)

    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(setLoggedInDuration(currentUser.name));
        dispatch(clearFilteredBills())
    }

    return (
        currentUser ? <Col className='text-right' sm={1}><BiLogOutCircle onClick={() => handleLogOut()} size='2em' /></Col> : ''
    )
}