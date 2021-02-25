import { Button } from "react-bootstrap";
import '../../styles/customComponents/categoryButton.css'

export function CategoryButton(props) {

    return (
        <Button className='categoryButton'>{props.text}</Button>
    )
}