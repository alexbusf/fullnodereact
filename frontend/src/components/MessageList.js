import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { Container } from 'react-bootstrap';

const MessageList = () => {
    const [messages, setMessage] = useState([])

    useEffect(() => {
        getMessages()
    }, [])

    const getMessages = async () => {
        const response = await axios.get('http://localhost:5000/api')
        setMessage(response.data)
    }
    const deleteMessage = async (id) => {
        await axios.delete(`http://localhost:5000/api/${id}`)
        getMessages()
    }
    return(
        <Container>
            <Link to="/add" className="btn btn-primary">Add New Message</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Message</th>
                        <th>Control</th>
                    </tr>
                </thead>
                <tbody>
                    { messages.map((message) => (
                        <tr key={ message.id }>
                            <td>{ message.title }</td>
                            <td>{ message.body }</td>
                            <td>
                                <Link to={`/edit/${message.id}`} className="btn btn-primary me-1">Edit</Link>
                                <button onClick={ () => deleteMessage(message.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

export default MessageList