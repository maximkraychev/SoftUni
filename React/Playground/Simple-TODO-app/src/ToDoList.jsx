import { useState } from 'react';
import './ToDoList.css';
import TableRow from './components/TableRow';

function ToDoList() {
    const [tasks, setTask] = useState([]);

    function idGenerator() {        // pseudo id generator
        return Math.floor(Math.random() * 10000); 
    }

    function deleteTask(taskId) {
        const updatedTasks = tasks.filter(task => task.taskId !== taskId);
        setTask(updatedTasks);
    }

    function formHandler(event) {
        console.log(event);
        event.preventDefault();
        const inputElement = document.querySelector('#input');
        const value = inputElement.value;
        const taskId = idGenerator();
        setTask([...tasks, { value, taskId }]);
        inputElement.value = '';
    }

    return (
        <>
            <form onSubmit={formHandler}>
                <input id='input' type="text" />
                <input type="submit" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map(task => (
                        <TableRow key={task.taskId} task={task} deleteHandler={deleteTask} />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ToDoList;
