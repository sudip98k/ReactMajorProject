import { useEffect,useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import {getPosts} from '../api';
import {Home} from '../pages';
import Login from '../pages/Login'
import NavBar from './NavBar'
import  Loader  from "./Loader";
import { useAuth } from "../hooks";

// const About=()=>{
//     return <h1>About</h1>
// }

// const UserInfo=()=>{
//     <h1>UserInfo</h1>
// }

const Page404=()=>{
    return <h1>Page404</h1>
}

function App() {
     const auth=useAuth();
  

    if(auth.loading){
        return <Loader/>
    }

    return(
        <div className="App">
            
            <Router>
            <NavBar/>
                <Routes>
                     <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </Router>

        </div>
    );
}


export default App;
