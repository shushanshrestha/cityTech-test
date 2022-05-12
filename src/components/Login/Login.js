import React from 'react';
import PropTypes from 'prop-types'
import './Login.css';

async function loginUser(credentials) {

    return fetch('https://jp-dev.cityremit.global/web-api/config/v1/auths/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization':`Bearer ${token}`
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
    const [username, setUserName] = React.useState();
    const [password, setPassword] = React.useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await loginUser({
            login_id: username,
            login_password: password
        })
        // .then(data => {
        //     this.props.history.push('/')
        // })
        setToken(res.data[0].jwt_token);
        // console.log(res.data[0].jwt_token)
    }
    return (
        <div className="login-wrapper">
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