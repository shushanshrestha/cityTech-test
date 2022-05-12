import React, { useEffect } from 'react'

// // async function data() {
// //     const token = JSON.parse(sessionStorage.getItem('token'))
// //     return fetch('https://jp-dev.cityremit.global/web-api/transation-manager/v1/admin/dashboard/search', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'Authorization': `Bearer ${token}`
// //         },
// //         body: JSON.stringify({})
// //     })
// //         .then(response => response.json())


// // }
// // data()
// export default function Dashboard() {
//     const token = JSON.parse(sessionStorage.getItem('token'))
//     console.log(token, "<<<<<<<")
//     // useEffect(() => {
//     //     console.log("i am here")
//     //         (async () => {
//     //             console.log("here")
//     //             const rawResponse = await fetch('https://jp-dev.cityremit.global/web-api/transation-manager/v1/admin/dashboard/search', {
//     //                 method: 'POST',
//     //                 headers: {
//     //                     'Accept': 'application/json',
//     //                     'Content-Type': 'application/json',
//     //                     'Authorization': `Bearer ${token}`
//     //                 },
//     //                 body: JSON.stringify()
//     //             });
//     //             const content = await rawResponse.json();
//     //             console.log(content);
//     //         })();
//     // });
//     return (
//         <div>Dashboard</div>
//     )
// }




export default function Dashboard() {

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        console.log("Hello", token);
        // const token = tt ? JSON.parse(tt) : 'I am here'
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
            const content = await rawResponse.json();

            console.log(content);
        })();
    });
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}