import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, password})
            });

            const data = await response.json();

            if (data.token) {
                console.log('Token Received');
                console.log(data.token);

                // Stocker le token dans le localStorage
                localStorage.setItem('jwtToken', data.token);
                navigate('/users');
            } else {
                // Afficher une erreur
                console.log("Erreur");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="email" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
