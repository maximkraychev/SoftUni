import { useEffect, useState } from 'react';
import './Question.css';
import propTypes from 'prop-types';

Question.propTypes = {
    question: propTypes.object,
    userAnswerHandler: propTypes.func,
    currentQuestion: propTypes.number,
    questionNumber: propTypes.number
};

export default function Question({ question, userAnswerHandler, currentQuestion, questionNumber }) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [userAnswer, setUserAnswer] = useState(null);
    const [tempAnswer, setTemAnswer] = useState(null);

    function onSelect(selectEvent) {
        if (selectEvent == undefined) {
            return;
        }

        setTemAnswer(selectEvent.target.value);
        setSelectedOption(selectEvent.target.name);
    }

    function resetSelectedOption() {
        setUserAnswer(tempAnswer);
        setSelectedOption(null);
    }


    useEffect(() => {
        if(userAnswer == null) {
            return;
        }

        userAnswerHandler(userAnswer);
        setUserAnswer(null);
        setTemAnswer(null);
    }, [userAnswer, userAnswerHandler]);

    return (
        <>
            <p>
                <span>
                    {currentQuestion + '/' + questionNumber}
                </span>
            </p>
            <h2>{question?.question}</h2>

            <form onSubmit={(event) => event.preventDefault()}>
                <div>
                    <input type="radio" id='a' name='option1' value={question?.a} onChange={onSelect} checked={selectedOption === 'option1'} />
                    <label htmlFor="a">{question?.a}</label>
                </div>
                <div>
                    <input type="radio" id='b' name='option2' value={question?.b} onChange={onSelect} checked={selectedOption === 'option2'} />
                    <label htmlFor="b">{question?.b}</label>
                </div>
                <div>
                    <input type="radio" id='c' name='option3' value={question?.c} onChange={onSelect} checked={selectedOption === 'option3'} />
                    <label htmlFor="c">{question?.c}</label>
                </div>
                <div>
                    <input type="radio" id='d' name='option4' value={question?.d} onChange={onSelect} checked={selectedOption === 'option4'} />
                    <label htmlFor="d">{question?.d}</label>
                </div>
                <input type="submit" value={currentQuestion == questionNumber ? 'Quiz results' : 'Next'} onClick={resetSelectedOption} />
            </form>
        </>
    );
}