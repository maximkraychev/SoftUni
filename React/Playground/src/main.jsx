import React from 'react';
import ReactDOM from 'react-dom/client';
import ToDoList from './ToDoList.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToDoList />
    </React.StrictMode>,
);
