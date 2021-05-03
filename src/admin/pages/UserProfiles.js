import moment from "moment";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../store/selectors/users.selectors";
import { DropdownButton } from "../components/DropdownButton";

export function UserProfiles() {

    const users = useSelector(getUsers);

    const selectUserImg = (role) => {
        if (role === 'admin') {
            return 'https://reflectionscc.com/wp-content/uploads/2018/10/blank-male-silhouette.jpg'
        } else {
            return 'https://img.pngio.com/silhouette-icon-blank-person-template-blank-person-png-900_900.jpg'
        }
    }

    const millsToTime = (milliseconds) => {
        // const dayLength = 1000 * 60 * 60 * 24;
        // const percentOfDay = milliseconds / dayLength;
        // const h = Math.floor(percentOfDay * 24);
        // const m = Math.floor(percentOfDay * 24 * 60) % 60;
        // const s = Math.floor(percentOfDay * 24 * 60 * 60) % 60;

        // return `${h}:${m}:${s}`
        return moment.utc(milliseconds ? milliseconds : 0).format('HH:mm:ss')
    }

    return (
        <Row className='h-85'>
            <Col sm={12} className='h-100 overflow-auto'>
                <Row>
                    {
                        users.map((u, i) => {
                            return (
                                <Col key={i} xs={6} sm={4} md={3} lg={2}>
                                    <Card className='mt-2'>
                                        <Card.Img variant="top" src={u.img ? u.img : `${selectUserImg(u.role)}`} />
                                        <Card.Body>
                                            <Row>
                                                <Col sm={9}>
                                                    <Card.Title>{u.name}</Card.Title>
                                                </Col>
                                                <Col sm={2}>
                                                    <DropdownButton name={u.name} />
                                                </Col>
                                            </Row>

                                            <Card.Text>
                                                Role: <strong>{u.role}</strong>
                                            </Card.Text>
                                            <Card.Text>
                                                Password: <strong>{u.password}</strong>
                                            </Card.Text>
                                            <Card.Text>
                                                Logged in time: <strong>{millsToTime(u.duration)}</strong>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Card className='mt-2'>
                            <Link to='/admin/accounting/users/create'>
                                <Card.Img variant="top" src='https://png.pngitem.com/pimgs/s/521-5215100_people-icons-3-800-free-files-in-png.png' />
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}