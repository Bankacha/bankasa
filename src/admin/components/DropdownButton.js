import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/actions";

export function DropdownButton({ name }) {

    const dispatch = useDispatch();

    return (
        <Dropdown>
            <Dropdown.Toggle size='sm' className='py-0' variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => dispatch(deleteUser(name))}>Delete User</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}