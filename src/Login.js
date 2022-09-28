import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"


function Login({database:db}) {
    const navigate = useNavigate();

        
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    function auth() {
        if(username in db) {
            console.log(true);
            if(password == db[username].pword){
                navigate('/dashboard')
            } else {
                alert('incorrect password')
            }
        } else {
            alert('incorrect username')
        }
        
    }
    return (
        <div className="login ">
            <label htmlFor=""></label>
            <input onChange={e => setUsername(e.target.value)} type="text"  className="login_form" placeholder="Enter Username" />
            <label htmlFor=""  placeholder="Password"></label>
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password" className="login_form" />
            <button onClick={auth} className="submit_button">Login</button>
        </div>
    )
}

export default Login;