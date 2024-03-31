import {useState} from 'react';
import { UserContext } from './Context/UserContext';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
export default function App(){
   
    const [user, setUser] = useState("test");


    return (
        <>
        <UserContext.Provider value={{user,setUser}}>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
       </Routes>
       </UserContext.Provider>
        </>
    )
}