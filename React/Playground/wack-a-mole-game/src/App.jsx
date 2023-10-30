import { useState, useEffect  } from 'react';
import './App.css';
import Field from './components/Field';

function App() {

    const initialArray = new Array(9).fill(false, 0, 9);
    const [fieldState, setState] = useState(initialArray);

    const [score, updateScore] = useState(0);
    const [index, setIndex] = useState(generatingRandomIndex());

    useEffect(() => {
        
        const showMole = setInterval(() => {
            const newArray = [...fieldState];
            newArray[index] = true;
            console.log('show', fieldState);
            setState(newArray);
        }, 1000);

        return () => clearInterval(showMole);
    }, []);


    useEffect(() => {
        const hideMole = setTimeout(() => {
            const reset = [...fieldState].map(() => false);
            setState(reset);
            setIndex(() => generatingRandomIndex());
            console.log('hide', fieldState);
        }, 500);

        return () => clearTimeout(hideMole);

    }, [fieldState]);


    function generatingRandomIndex() {
        return Math.floor(Math.random() * 9);   // Generating indexes from 0 to 8
    }

    function scoreHandler(currentFieldState) {
        if(currentFieldState == true) {
            updateScore(score + 1);
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
