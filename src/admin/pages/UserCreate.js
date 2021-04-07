import React, { useState } from "react";
import { Card, Row, Form, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNewUser } from "../../store/actions";
import { IoSave } from "react-icons/io5";
export function UserCreate() {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const history = useHistory();
    const dispatch = useDispatch();

    const [userName, setUserName] = useState();
    const [role, setRole] = useState('waiter');
    const [password, setPassword] = useState(null);
    const [imageURL, setImageURL] = useState(null);

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
            setImageURL(window.URL.createObjectURL(file))
        }
    }

    const handleUserCreate = () => {
        if (userName && password) {
            dispatch(addNewUser({
                name: userName,
                password,
                role,
                img: imageURL
            }))
            history.push('./')
        }
    }

    return (
        <Row className='justify-content-center'>
            <Col sm={8}>
                <Card className='mt-3'>
                    <Row className='w-100 align-items-center'>
                        <Col sm={4}
                            onClick={() => imageUploader.current.click()}
                            className='h-15, w-100'>

                            <Card.Img
                                className='p-1 ml-3 w-100 h-100'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGk2443CL9YrfJiVs8QUzJfoqq2I48ctbiHIeNdFLWKGH1yISSOyNl45zpDlB19VSbuA8&usqp=CAU'
                                ref={uploadedImage} />

                            <input
                                ref={imageUploader}
                                className='d-none'
                                onChange={handleImageUpload}
                                type="file"
                                accept="image/*"
                                multiple={false}>
                            </input>
                        </Col>

                        <Col sm={8}>
                            <Card.Body>
                                <Row className='align-items-center'>
                                    <Col sm={10}>
                                        <Card.Title className='mt-2'>Card Title</Card.Title>
                                    </Col>
                                    <Col sm={2} className='ml-0'>
                                        <Row>
                                            <Col sm={12}>
                                                <IoSave onClick={() => handleUserCreate()} variant="primary" size='2em' />
                                            </Col>
                                            <Col sm={12}>
                                                <small>create</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Label className='mb-0 mt-2'>Name</Form.Label>
                                        <Form.Control type='text' onChange={(e) => setUserName(e.target.value)} placeholder='User name'></Form.Control>
                                        <Form.Label className='mb-0 mt-2'>Role</Form.Label>
                                        <Form.Control onChange={(e) => setRole(e.target.value)} as='select'>
                                            <option>waiter</option>
                                            <option>admin</option>
                                        </Form.Control>
                                        <Form.Label className='mb-0 mt-2'>Password</Form.Label>
                                        <Form.Control type='number' onChange={(e) => setPassword(e.target.value)} placeholder='123...'></Form.Control>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Col>
                    </Row>

                </Card>

            </Col>
        </Row>

    )
}