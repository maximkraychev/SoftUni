import { useState } from 'react';
import './Question.css';
import propTypes from 'prop-types';

Question.propTypes = {
    currentQuestion: propTypes.object,
    saveUserAnswer: propTypes.func,
    currentQuestionNumber: propTypes.number,
    numbersOfQuestions: propTypes.number
};

export default function Question({ currentQuestion, saveUserAnswer, currentQuestionNumber, numbersOfQuestions }) {

    const [userAnswer, setUserAnswer] = useState(null);

    function onSelect(e) {
        setUserAnswer(e.target.value);
    }

    function submitAnswer(e) {
        e.preventDefault();

        if (userAnswer == null) {
            return;
        }

        saveUserAnswer(userAnswer);
        setUserAnswer(null);
    }

    return (
        <>
            <p>
                <span>
                    {currentQuestionNumber + '/' + numbersOfQuestions}
                </span>
            </p>
            <h2>{currentQuestion?.question}</h2>

            <form onSubmit={submitAnswer}>

                {currentQuestion.options.map((option, index) => (
                    <div key={index} >
                        <input 
                            type="radio" 
                            id={index} 
                            name="option" 
                            value={option} 
                            onChange={onSelect} 
                            checked={userAnswer === option} 
                        />
                        <label htmlFor={index}>{option}</label>
                    </div>
                ))}

                <input type="submit" value={currentQuestionNumber == numbersOfQuestions ? 'Quiz results' : 'Next'} />
            </form>
        </>
    );
}