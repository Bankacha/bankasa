import { useState } from "react"
import { Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { getCurrentUser } from "../../../../../store/selectors"

export function OrderItemsHeader() {
    
    const currentUser = useSelector(getCurrentUser)
    const [time , setTime] = useState(new Date())


    setTimeout(()=> setTime(new Date()), 55000)

    const [h , m , s] = `${time}`.split(' ')[4].split(':')

    return (
        <Col className="text-light my-1 px-4 d-flex justify-content-between">
            <h6>{currentUser.name}</h6>
            <h6>{`${h}:${m}`}</h6>
        </Col>
    )
}