import { useState, useEffect  } from 'react';
import './App.css';
import Field from './components/Field';

function App() {

    const initialArray = new Array(9).fill(false, 0, 9);
    const [fieldState, setState] = useState(initialArray);

    const [score, updateScore] = useState(0);

    console.log('main');

    useEffect(() => {

        const index = generatingRandomIndex();
        const newArray = [...fieldState];

        const showMole = setTimeout(() => {
            newArray[index] = true;
            console.log('show');
            setState(newArray);
        }, 1000);

        const hideMole = setTimeout(() => {
            newArray[index] = false;
            console.log('hide');
            setState(newArray);
        }, 1000);

        return () => {
            clearTimeout(showMole);
            clearTimeout(hideMole);
        };

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
