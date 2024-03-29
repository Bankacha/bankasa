import React, { useState } from "react";
import { Card, Row, Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addNewUser } from "../../store/actions";
import { getUsers } from "../../store/selectors/users.selectors";
import { pushNotification } from "../../notifications";
import { useForm } from "react-hook-form";

export function UserCreate() {

    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);

    const history = useHistory();
    const dispatch = useDispatch();

    const users = useSelector(getUsers)

    const [userName, setUserName] = useState();
    const [role, setRole] = useState('waiter');
    const [password, setPassword] = useState(null);
    const [imageURL, setImageURL] = useState(null);

    const { register, errors, handleSubmit } = useForm()

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
            const exiting = users.find(user => user.name === userName || user.password === password)

            if(exiting) {
                history.push('/admin/accounting/users')
                pushNotification('', 'The password or user name is already existing', 'danger')
            } 
            
            if (!exiting) {
                dispatch(addNewUser({
                    name: userName,
                    password,
                    role,
                    img: imageURL,
                    duration: null
                }))
                history.push('./')
                pushNotification('', 'You created a new user successfully', 'success')
            }

        }
    }

    return (
        <Row className='justify-content-center mt-3'>
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
                                <Form onSubmit={handleSubmit()} >

                                    <Row className='align-items-center'>
                                        <Col sm={10}>
                                            <Card.Title className='mt-2'>User Profile</Card.Title>
                                        </Col>
                                        <Col sm={2} className='ml-0'>
                                            <Row>
                                                <Col sm={12} className='text-right'>
                                                    <Button type='submit' onClick={() => handleUserCreate()} variant="primary" size='2em'><strong>create</strong></Button>
                                                </Col>

                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label className='mb-0 mt-2'>Name</Form.Label>
                                                <Form.Control
                                                    ref={register({ required: true })}
                                                    name='name'
                                                    type='text'
                                                    onChange={(e) => setUserName(e.target.value)}
                                                    placeholder='User name'
                                                >
                                                </Form.Control>
                                                <Form.Text className="text-danger">
                                                    {errors.name && "user name is required!"}
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Label className='mb-0 mt-2'>Role</Form.Label>
                                            <Form.Control onChange={(e) => setRole(e.target.value)} as='select'>
                                                <option>waiter</option>
                                                <option>admin</option>
                                            </Form.Control>
                                            <Form.Label className='mb-0 mt-2'>Password</Form.Label>
                                            <Form.Control
                                                ref={register({ required: true })}
                                                name='password'
                                                type='number'
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder='123...'
                                            >
                                            </Form.Control>
                                            <Form.Text className="text-danger">
                                                {errors.password && "password is required!"}
                                            </Form.Text>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Col>
                    </Row>

                </Card>

            </Col>
        </Row>

    )
}