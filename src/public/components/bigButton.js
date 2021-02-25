import { Button } from "react-bootstrap";
import '../../styles/customComponents/bigButton.css'

export function BigButton(props) {

    return(
        <Button className='bigButton'>{props.text}</Button>
    )
}