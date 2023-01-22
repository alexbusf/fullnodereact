import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { Container, Card } from 'react-bootstrap';

const MessageList = () => {
    const [messages, setMessage] = useState([])

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {
        const response = await axios.get('http://localhost:5000/api')
        setMessage(response.data)
    }

    return(
        <Container>
            <Link to="/add" className="btn btn-primary">Add New Message</Link>

            { messages.map((message) => (
            <Card className="mt-1">
                <Card.Body>
                    <Card.Title>{ message.title }</Card.Title>
                    <Card.Text>{ message.body }</Card.Text>  
                    <Link to={`/one/${message.id}`}>Read more...</Link> 
                </Card.Body>
            </Card>    
            ))} 

        </Container>
    )
}

export default MessageList