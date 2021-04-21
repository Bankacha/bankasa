import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { pushNotification } from "../../notifications";
import { deleteUser } from "../../store/actions";

export function DropdownButton({ name }) {

    const dispatch = useDispatch();

    const handleDelete = (name) => {
        dispatch(deleteUser(name));
        pushNotification('', `You have deleted ${name}'s profile`, 'danger');
    }
    return (
        <Dropdown>
            <Dropdown.Toggle size='sm' className='py-0' variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleDelete(name)}>Delete User</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}