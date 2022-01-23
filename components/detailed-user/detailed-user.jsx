import React,{useState} from 'react'
import "./detailed-user.css"
import { Form,Button,Container } from 'react-bootstrap';

function DetailedUser({detailedUser}) {

    const [userInfo,setUserInfo] = useState({
        name: "",
        email: "",
        phone: "",
        username: ""
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUserInfo({...userInfo,[name]:value})
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let detailedName;
        let detailedEmail;
        let detailedUserName;
        let detailedPhone;
        if(!userInfo.name){
            detailedName = detailedUser.name;
        } else {
            detailedName = userInfo.name
        }
        if(!userInfo.email){
            detailedEmail = detailedUser.email;
        } else {
            detailedEmail = userInfo.email
        }
        if(!userInfo.username){
            detailedUserName = detailedUser.username;
        } else {
            detailedUserName = userInfo.username
        }
        if(!userInfo.phone){
            detailedPhone = detailedUser.phone;
        } else {
            detailedPhone = userInfo.phone
        }
        fetch(`https://jsonplaceholder.typicode.com/users/${detailedUser.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            id: detailedUser.id,
            name: detailedName,
            email: detailedEmail,
            username: detailedUserName,
            phone: detailedPhone
        })
        }).then((response) => response.json()).then((json) => console.log(json));

    }
    return (
        <Container className="form-container">
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" onChange={handleChange} name="name" placeholder="Name" defaultValue={detailedUser ? detailedUser.name : userInfo.name} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" onChange={handleChange} name="email" placeholder="Email" defaultValue={detailedUser ? detailedUser.email : userInfo.email} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicUserName">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" onChange={handleChange} name="username" placeholder="Username" defaultValue={detailedUser ? detailedUser.username : userInfo.username} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="tel" onChange={handleChange} name="phone" placeholder="Phone" defaultValue={detailedUser ? detailedUser.phone : userInfo.phone} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Container>
    )
}

export default DetailedUser
