import { Button } from "react-bootstrap";
import '../../styles/customComponents/customButton.css'

export function CustomButton(props) {

    return (
        <Button className={props.text === "admin" ? "adminLoginBtn" : 'customButton'}>{props.text}</Button>
    )
}