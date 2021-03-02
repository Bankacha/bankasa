import { Button } from "react-bootstrap";
import '../../styles/customComponents/customButton.css'

export function CustomButton(props) {

    return (
        <Button>{props.text}</Button>
    )
}
