import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import UserList from './UserList';
import Post from "./Post";
import Missing from "./Missing";
import NewArrival from "./NewArrival";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/post" element={<Post />} />
                <Route path="/missing" element={<Missing />} />
                <Route path="/newarrival" element={<NewArrival />} />
            </Routes>
        </Router>
    );
}

export default App;
