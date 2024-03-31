import { useContext} from 'react';
import {Form,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Context/UserContext';
export default function Login(){
   
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);


    return (
        <div style={{backgroundImage : "url(" + "https://images.unsplash.com/photo-1521459467264-802e2ef3141f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" + ")",
        height: '725px'}}>
        <Form className='container' >
            <h1>Login Form</h1>
          <Form.Group className='mb-4'>
          <Form.Label>Enter Username: </Form.Label>
            <Form.Control type = "email" onChange={(e)=>{setUser(e.target.value)}}>
            </Form.Control>
          </Form.Group> 

          <Form.Group className='mb-4'>
            <Form.Label>Enter Password: </Form.Label>
            <Form.Control type="password"></Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={()=>navigate('/home')}> Login </Button>
          </Form>
        
        </div>
    )
}