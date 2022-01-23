import React,{useState,useEffect} from 'react'
import "./display-users.css"
import { Container,Row,Col } from 'react-bootstrap';
import UserCard from '../user-card/user-card';
import Search from '../search/search';


function DisplayUsers({getCurrentUser}) {
    const [users,setUsers] = useState([])
    const [searchField,setSearchField] = useState("")


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log(data)
            setUsers(data)
        }
        fetchUsers();
        
    },[])

    const onSearchChange = event => {
      setSearchField(event.target.value);
    };

    return (
        <Container className="users-container">
        <Row className="users-row">
          <Col sm={4}>Users</Col>
        </Row>
        <Search onSearchChange={onSearchChange} />
        <hr />
        <Container className="user-container">
        {users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase())).map(user => <UserCard key={user.id}  getCurrentUser={getCurrentUser} user={user}  />)}
        </Container>
      </Container>
    )
}

export default DisplayUsers

