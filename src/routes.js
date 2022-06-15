import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Entrepreneurs from './pages/Entrepreneurs';
import Investors from './pages/Investors';
import Projects from './pages/Projects';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/entrepreneurs" element={<Entrepreneurs />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}