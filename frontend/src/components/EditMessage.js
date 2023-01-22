import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom";
import { Form, Button, Row, Col, Container} from 'react-bootstrap';

const EditMessage = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const updateMessage = async (e) => {
        e.preventDefault()
        await axios.patch(`http://localhost:5000/api/${id}`,{
            title: title,
            body: body
        })
        navigate("/")
    }
    useEffect(() => {
        getMessageById()
    }, [])

    const getMessageById = async () => {
        const response = await axios.get(`http://localhost:5000/api/${id}`)
        setTitle(response.data.title)
        setBody(response.data.body)
    }
    return(
        <Container>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Form onSubmit={updateMessage}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Title</Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title"
                        required 
                        value = { title } 
                        onChange={ (e)  => setTitle(e.target.value) }
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label  column sm={2}>Message</Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter message" 
                        required
                        value = { body } 
                        onChange={ (e)  => setBody(e.target.value) }
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Update messge</Button>
                    </Col>
                </Form.Group>
            </Form>
            </Container>
    )
}

export default EditMessage