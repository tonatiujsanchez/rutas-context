import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TemaProvider } from './context/TemaProvider';

ReactDOM.render(
    <React.StrictMode>
        <TemaProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </TemaProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
