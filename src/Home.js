import { useContext } from "react"
import { UserContext } from "./Context/UserContext";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

 
export default function Home(){
    const {user} = useContext(UserContext);
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    )
}