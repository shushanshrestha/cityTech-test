import React from 'react';
import PropTypes from 'prop-types'
import './Login.css';
import { useNavigate } from 'react-router-dom';

async function loginUser(credentials) {

    return fetch('https://jp-dev.cityremit.global/web-api/config/v1/auths/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(credentials)
    })
        .then(response => response.json())
        .catch(err => {
            console.error(err);
            alert('Error login in please try again!');
        });

}

export default function Login({ setToken }) {
    const navigation = useNavigate()
    const [username, setUserName] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await loginUser({
            login_id: username,
            login_password: password
        })

        setToken(res.data[0].jwt_token);
        navigation("/")

    }

    return (
        <div className="login-wrapper">
            {typeof (JSON.stringify(setToken)) === 'undefined' ? console.log('false') : console.log('true')}
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" name="login_id" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" name="Login_password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.prototype = {
    setToken: PropTypes.func.isRequired
}