import React, {useState, useContext, FormEvent, ChangeEvent} from 'react';
import { LoginUser } from '../models/LoginUser';
import { login } from '../services/AuthService';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from'react-router-dom';
import '../App.css'

export default function LoginForm () {
    const initUser: LoginUser = {username: '', password: ''}
    const [user, setUser] = useState<LoginUser>(initUser);
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    //
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        //
        await login(user)
        .then(res => {
            console.log('login res = '+res.token);
            setUser({username: '', password: ''});
            dispatch({TYPE: 'LOGIN', TOKEN: res.token});
            navigate('/');
        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
       
            <form onSubmit={handleSubmit}>
                <fieldset className='loginForm'>
                <p>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" name="username" value={user.username} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" name="password" value={user.password} onChange={handleChange}/>
                </p>
        
                <p>
                    <button type="submit">Login</button>
                </p>
                </fieldset>
                
            </form>
        
    );
}