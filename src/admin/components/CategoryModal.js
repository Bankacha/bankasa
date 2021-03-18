import { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, editCategory } from "../../store/actions";
import { getCategories } from "../../store/selectors";

export const CategoryModal = (props) => {

    const categories = useSelector(getCategories)
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.isEditing) {
            setValue('category', `${props.category.name}`)
        }
    }, [props.isEditing])

    const { register, handleSubmit, errors, reset, setValue } = useForm({
        defaultValues: {
            category: null
        }
    });

    const onSubmit = (data) => {
        if (props.isEditing) {
            const newData = { ...props.category, name: data.category }
            dispatch(editCategory(newData))
            props.closeModal()
        }
        if (props.isCreation) {
            const newData = {
                name: data.category,
                value: data.category.toLowerCase(),
                id: data.category.toLowerCase().replace(' ', '_')
            }
            dispatch(createCategory(newData))
            reset()
        }
    }

    console.log(categories)

    return (
        <Modal show={props.show} onHide={props.onClose}>

            <Modal.Dialog className='w-100 p-2'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.isEditing ? props.category?.name : 'Category name'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <p>{props.isEditing ? 'Change Category name' : 'Enter Category name'}</p>
                            <Form.Control name='category' ref={register({ required: true })}></Form.Control>
                            <Form.Text className="text-danger">
                                {errors.category && "category name is required!"}
                            </Form.Text>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type='submit'>Save changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Dialog>
        </Modal>

    )
}