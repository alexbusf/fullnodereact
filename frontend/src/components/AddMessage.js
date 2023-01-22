import { useState } from "react";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom";
import { Form, Button, Row, Col, Container} from 'react-bootstrap';

const AddMessage = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()

    const saveMessage = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/api',{
            title: title,
            body: body
        })
        navigate("/")
    }
    return(
            <Container>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Form onSubmit={saveMessage}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Title</Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title" 
                        value = { title } 
                        onChange={ (e)  => setTitle(e.target.value) }
                        required
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label  column sm={2}>Message</Form.Label>
                    <Col sm={10}>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter message" 
                        value = { body } 
                        onChange={ (e)  => setBody(e.target.value) }
                        required
                    />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" className="btn btn-primary">Add messge</Button> 
                    </Col>
                </Form.Group>
            </Form>
            </Container>

    )
}

export default AddMessage