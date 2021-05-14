import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { pushNotification } from "../../notifications";
import { deleteUser } from "../../store/actions";
import { getUsers } from "../../store/selectors";

export function DropdownButton({ user }) {

    const dispatch = useDispatch();
    const users = useSelector(getUsers)

    const handleDelete = (user) => {
        const oneAdmin = users.filter(u => u.role === 'admin').length === 1;

        if (user.role === 'admin' && oneAdmin) {
            pushNotification('', `You can't delete only admin user`, 'warning');
        } else {
            dispatch(deleteUser(user));
            pushNotification('', `You have deleted ${user.name}'s profile`, 'danger');
        }
    }

    return (
        <Dropdown>
            <Dropdown.Toggle size='sm' className='py-0' variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleDelete(user)}>Delete User</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}