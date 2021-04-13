import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AccountingPage() {

    return (
        <Row className='mt-3'>
            <Col className='' sm={12}>
                <Card className='my-3'>
                    <Card.Header className='bg-secondary' as="h3">Reports</Card.Header>
                    <Card.Body>
                        <Card.Title>Menage bills and daily reports</Card.Title>
                        <Link to='/admin/accounting/reports'>
                            <Button variant="primary">Manage</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='my-3'>
                    <Card.Header className='bg-secondary' as="h3">Supplies</Card.Header>
                    <Card.Body>
                        <Card.Title>View product supplies and import new supply</Card.Title>
                        <Link to='/admin/accounting/supplies'>
                            <Button variant="primary">Manage</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className='my-3'>
                    <Card.Header className='bg-secondary' as="h3">User Profiles</Card.Header>
                    <Card.Body>
                        <Card.Title>Create user profiles, manage them and assign roles</Card.Title>
                        <Link to='/admin/accounting/users'>
                            <Button variant="primary">Manage</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}