import React,{useState,useEffect} from 'react'
import "./user-card.css"
import {Row,Col,Spinner } from 'react-bootstrap';

function UserCard({getCurrentUser,user}) {

    const [image,setImages] = useState("")
    useEffect(() => {
        fetch("https://picsum.photos/50/50?rand=2").then((res) => setImages(res));
        console.log(image)
    },[])
    return (
        <Row onClick={() => getCurrentUser(user.id)} className="users">
            <Col sm={2}>
             {image.url ? <img src={image.url} alt="profile " /> : <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>}
            </Col>
            <Col className="user-name" sm={10}>
            {user.name}
            </Col>
        </Row>
    )
}

export default UserCard
