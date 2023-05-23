import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
// Utilisateurs en dur pour le test
// const initialUsers = [
//     {
//         id: 1,
//         name: 'John Doe',
//         role: 'user',
//         imageUrl: 'https://thumbor.itds.ch/LUjh1GB5oYB8FpHBiCKqUj5YqOQ=/600x600/https://www.pdpeurope.ch/media/web/pdpeurope.ch/media/team/default-square.png'
//     },
//     {
//         id: 2,
//         name: 'Jane Doe',
//         role: 'user',
//         imageUrl: 'https://thumbor.itds.ch/LUjh1GB5oYB8FpHBiCKqUj5YqOQ=/600x600/https://www.pdpeurope.ch/media/web/pdpeurope.ch/media/team/default-square.png'
//     },
//     {
//         id: 3,
//         name: 'Alice',
//         role: 'refuge',
//         imageUrl: 'https://thumbor.itds.ch/LUjh1GB5oYB8FpHBiCKqUj5YqOQ=/600x600/https://www.pdpeurope.ch/media/web/pdpeurope.ch/media/team/default-square.png'
//     },
//     {
//         id: 4,
//         name: 'Bob',
//         role: 'refuge',
//         imageUrl: 'https://thumbor.itds.ch/LUjh1GB5oYB8FpHBiCKqUj5YqOQ=/600x600/https://www.pdpeurope.ch/media/web/pdpeurope.ch/media/team/default-square.png'
//     },
// ];

function UserList() {
    // const [users, setUsers] = useState(initialUsers);
    // const navigate = useNavigate();
    //
    // const deleteUser = (id) => {
    //     const updatedUsers = users.filter(user => user.id !== id);
    //     setUsers(updatedUsers);
    // }
    //
    // return (
    //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    //         {users.map(user => (
    //             <div key={user.id} style={{display: 'flex', alignItems: 'center', margin: '10px', padding: '10px', border: '1px solid black'}}>
    //                 <img src={user.imageUrl} alt={user.name} style={{marginRight: '10px', width: '50px', height: '50px'}}/>
    //                 <div style={{marginRight: '10px'}}>
    //                     <p><strong>ID:</strong> {user.id}</p>
    //                     <p><strong>Name:</strong> {user.name}</p>
    //                     <p><strong>Role:</strong> {user.role}</p>
    //                 </div>
    //                 <div>
    //                     <button onClick={() => navigate('/post')} style={{marginRight: '5px'}}>POST</button>
    //                     <button onClick={() => navigate('/missing')} style={{marginRight: '5px'}}>Missing</button>
    //                     <button onClick={() => navigate('/newarrival')} style={{marginRight: '5px'}}>Nouveaux arrivant</button>
    //                     <button onClick={() => deleteUser(user.id)}>DELETE USER</button>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // );
    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('jwtToken');

            const response = await fetch('/api/admin/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({token})
            });

            const data = await response.json();
            console.log(data);
        };
    }, []);  // Passer un tableau vide comme dépendance pour que le hook s'exécute une seule fois

    // ...
}

export default UserList;
