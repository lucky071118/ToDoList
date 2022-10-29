
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';

const App = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3030', { method: "GET" }).then(res => res.text()).then(message => setMessage(message));
    });


    return (
        <div>
            <h1 >{message}</h1>
        </div >
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);