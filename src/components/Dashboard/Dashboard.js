import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Dashboard() {
    const [data, setData] = useState([])
    const token = sessionStorage.getItem('token');
    useEffect(() => {
        (async () => {
            const rawResponse = await fetch('https://jp-dev.cityremit.global/web-api/transaction-manager/v1/admin/dashboard/search', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({})
            });
            const data = await rawResponse.json();
            setData(data.data)

        })();
    });
    return (
        <div className="App">
            <h1>This is Dashboard</h1>

            {token === null ? <div>
                <h1>access denied</h1>
                <h3>Login to access data by clicking <Link to="/login"><b>here</b></Link></h3>
            </div> : <div>
                <h1>you are logged in</h1>
                <p>{JSON.stringify(data)}</p>
            </div>}


        </div>
    );
}