import React from 'react';
import { createRoot } from 'react-dom/client';
import { About } from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => (
    <div>
        <BrowserRouter>
            <Routes>
                <Route element={<About name='Doe' />} path='/about' />
                <Route element={<Contact text='Text'/>} path='/contact' />
            </Routes>
            
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </BrowserRouter>
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);