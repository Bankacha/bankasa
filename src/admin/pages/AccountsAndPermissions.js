import { Card, CardColumns, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getUsers } from "../../store/selectors/users.selectors";

export function AccountsAndPermissions() {

    const users = useSelector(getUsers);

    const selectUserImg = (role) => {
        if (role === 'admin') {
            return 'https://reflectionscc.com/wp-content/uploads/2018/10/blank-male-silhouette.jpg'
        } else {
            return 'https://img.pngio.com/silhouette-icon-blank-person-template-blank-person-png-900_900.jpg'
        }
    }
    return (
        <Row>
            <Col>
                <CardColumns className='p-2 justify-content-between'>
                    {
                        users.map((u, i) => {
                            return (
                                <Card key={i} className='mt-2'>
                                    <Card.Img variant="top" src={`${selectUserImg(u.role)}`} />
                                    <Card.Body>
                                        <Card.Title>{u.name}</Card.Title>
                                        <Card.Text>
                                            Role: {u.role}
                                        </Card.Text>
                                        <Card.Text>
                                            Password: {u.password}
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                            )
                        })
                    }
                </CardColumns>
            </Col>
        </Row>

    )
}