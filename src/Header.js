import { useContext } from "react";
import { Navbar,Container } from "react-bootstrap";
import { UserContext } from "./Context/UserContext";
export default function Header(){
  const {user} = useContext(UserContext);
    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand> Context Example</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> Signed in as : {user}</Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )

}