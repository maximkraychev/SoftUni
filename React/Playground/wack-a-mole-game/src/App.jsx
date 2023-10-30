import { useState, useEffect } from 'react';
import './App.css';
import Field from './components/Field';

function App() {

    const initialArray = new Array(9).fill(false);
    const [fieldState, setState] = useState(initialArray);

    const [score, updateScore] = useState(0);

    useEffect(() => {
        const showMole = setInterval(() => {
            const newArray = [...fieldState];
            const index = generatingRandomIndex();
            newArray[index] = true;
            setState(newArray);

            setTimeout(() => {
                const reset = [...fieldState].map(() => false);
                setState(reset);
            }, 700);

        }, 1500);

        return () => clearInterval(showMole);
    }, [fieldState]);


    function generatingRandomIndex() {
        return Math.floor(Math.random() * 9);   // Generating indexes from 0 to 8
    }

    function scoreHandler(currentFieldState) {
        if (currentFieldState == true) {
            updateScore(score + 1);
            setState(fields => fields.map(() => false));
        }
    }

    return (
        <div className='container'>
            <h1>Score</h1>
            <p>{score}</p>
            <div className='board'>
                {fieldState.map((x, index) => <Field key={index} state={x} handler={scoreHandler} />)}
            </div>
        </div>
    );
}

export default App;
