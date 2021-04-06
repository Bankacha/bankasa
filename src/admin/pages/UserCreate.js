import React, { useState } from "react";
import { Card, Row, Button, Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../store/actions";

export function UserCreate() {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const dispatch = useDispatch();

    const [userName, setUserName] = useState();
    const [role, setRole] = useState('waiter');
    const [password, setPassword] = useState(null)

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
            console.log(file, uploadedImage)
        }
    }

    const handleUserCreate = () => {
        dispatch(addNewUser({
            name: userName,
            password,
            role,
            img: uploadedImage
        }))
    }

    return (
        <Row className='justify-content-center'>
            <Col sm={8}>
                <Card className='mt-3'>
                    <Row className='w-100 align-items-center'>
                        <Col sm={4}
                            onClick={() => imageUploader.current.click()}
                            style={{
                                height: "260px",
                                width: "100%",
                            }} >
                            <Card.Img
                                className='p-1'
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                                src='https://images.all-free-download.com/images/graphicthumb/uploads_92713.jpg'
                                ref={uploadedImage} />
                            <input
                                ref={imageUploader}
                                style={{
                                    display: "none"
                                }}
                                onChange={handleImageUpload}
                                type="file"
                                accept="image/*"
                                multiple={false}>
                            </input>
                        </Col>

                        <Col sm={8}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={(e) => setUserName(e.target.value)}></Form.Control>
                                <Form.Label>Role</Form.Label>
                                <Form.Control onChange={(e) => setRole(e.target.value)} as='select'>
                                    <option>waiter</option>
                                    <option>admin</option>
                                </Form.Control>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(e) => setPassword(e.target.value)}></Form.Control>
                                <Button onClick={() => handleUserCreate()} className='mt-2' variant="primary" size='sm'>Go somewhere</Button>
                            </Card.Body>
                        </Col>
                    </Row>

                </Card>

            </Col>
        </Row>

    )
}