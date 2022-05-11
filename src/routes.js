import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Entrepreneurs from './pages/Entrepreneurs';

import Home from './pages/Home';
import Investors from './pages/Investors';
import Login from './pages/Login';

export default function Routes2() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/entrepreneurs" element={<Entrepreneurs />} />
                <Route path="/investors" element={<Investors />} />
            </Routes>
        </BrowserRouter>
    );
}