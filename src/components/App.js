import { useEffect,useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import {getPosts} from '../api';
import {Home} from '../pages';
import Login from '../pages/Login'
import NavBar from './NavBar'
import  Loader  from "./Loader";

const About=()=>{
    return <h1>About</h1>
}

const UserInfo=()=>{
    <h1>UserInfo</h1>
}

const Page404=()=>{
    return <h1>Page404</h1>
}

function App() {

    const [posts,setPosts]=useState([]);
     const[loading,setLoading] = useState(true);
    useEffect(()=>{

        const fetchPosts=async()=>{
            const response = await getPosts();
            console.log('response',response);
            
            if(response.success){
                setPosts(response.data.posts)
            }
             setLoading(false);
        };
        fetchPosts();
    },[]);

    if(loading){
        return <Loader/>
    }

    return(
        <div className="App">
            
            <Router>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home posts={posts}/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="/user/asdasd" element={<UserInfo/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </Router>

        </div>
    );
}


export default App;
