import { useContext } from "react";
import { UserContext } from "./Context/UserContext";
import { Container } from "react-bootstrap";


export default function Footer(){
 
    const {user} = useContext(UserContext);

return (
    <>
       <Container fluid style = {{width: '100%' , height: '50px' , textAlign: 'center', bottom: '0', position: 'fixed', backgroundColor:'#212529', color: 'white'}}>
       <h6>Signed In as {user}</h6>
       <h6>Made with Rapid Api</h6>
       </Container>
    </>
);
}