import { useEffect, useState } from 'react';
import './Result.css';
import propTypes from 'prop-types';

Result.propTypes = {
    userAnswers: propTypes.array,
    answers: propTypes.array,
};


export default function Result({ userAnswers, answers }) {

    const [correctAnswerNumber, setCorrectAnswerNumber] = useState(null);

    useEffect(() => {
        let correctAnswers = 0;
        answers.forEach((x, index) => {
            if (x == userAnswers[index]) {
                correctAnswers++;
            }
        });

        setCorrectAnswerNumber(correctAnswers);
    }, []);

    return (
        <div className='result-container'>
            <h2>{`${correctAnswerNumber} / ${answers.length}`}</h2>
            <p>{((correctAnswerNumber / answers.length) * 100).toFixed(0) + '%'} of your answers are correct</p>
        </div>
    );
}