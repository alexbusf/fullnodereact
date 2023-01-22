import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate, useParams, Link } from "react-router-dom";
import { Container, Card} from 'react-bootstrap';

const MessageOne = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const deleteMessage = async (id) => {
        await axios.delete(`http://localhost:5000/api/${id}`)
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
            <Card  border="light">
                <Card.Header> </Card.Header>
                <Card.Body>
                    <Card.Title>{ title }</Card.Title>
                    <Card.Text>{ body }</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/edit/${id}`} className="btn btn-primary me-1">Edit</Link>
                    <button onClick={ () => deleteMessage(id)} className="btn btn-danger">Delete</button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default MessageOne