import { useState, useEffect } from 'react';
import './App.css';
import Field from './components/Field';

function App() {

    const initialField = new Array(9).fill(false);
    const [field, setField] = useState(initialField);
    const [score, updateScore] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            showMole();
            setTimeout(() => {
                hideMole();
            }, 700);
        }, 1500);

        return () => clearInterval(interval);
    }, [field]);

    function showMole() {
        const newField = [...field];
        const index = generatingRandomIndex();
        newField[index] = true;
        setField(newField);
    }

    function hideMole() {
        const newField = [...field].map(() => false);
        setField(newField);
    }

    function generatingRandomIndex() {
        return Math.floor(Math.random() * field.length);   // Generating indexes from 0 to 8
    }

    function scoreHandler(currentFieldState) {
        if (currentFieldState == true) {
            updateScore((score) => score + 1);
            hideMole();
        }
    }

    return (
        <div className='container'>
            <h1>Score</h1>
            <p>{score}</p>
            <div className='board'>
                {field.map((x, index) => <Field key={index} state={x} handler={scoreHandler} />)}
            </div>
        </div>
    );
}

export default App;
