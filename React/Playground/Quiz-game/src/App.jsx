import { useEffect, useState } from 'react';
import './App.css';
import StartButton from './components/StartButton';
import Question from './components/Question';
import Result from './components/Result';

const PROGRESS_STATE = {
    START: 'start',
    IN_PROGRESS: 'in-progress',
    FINISH: 'finish'
};

function App() {

    const [quizState, setQuizState] = useState(PROGRESS_STATE.START);
    const [userAnswers, setUserAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);


    function startQuiz() {
        setQuizState(PROGRESS_STATE.IN_PROGRESS);
    }

    function finishQuiz() {
        setQuizState(PROGRESS_STATE.FINISH);
    }

    function saveUserAnswer(userAnswer) {

        setUserAnswers((x) => {
            const currentUserAnswers = [...x, userAnswer];
            
            if (currentUserAnswers.length == questions.length) {
                finishQuiz(currentUserAnswers);
            }

            return currentUserAnswers;
        });
    }

    useEffect(() => {
        fetch('./src/mockData.json')
            .then(request => request.json())
            .then(data => setQuestions(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {quizState == PROGRESS_STATE.START ? <StartButton startQuiz={startQuiz} /> : null}

            {quizState == PROGRESS_STATE.IN_PROGRESS
                ? <Question
                    currentQuestion={questions[userAnswers.length]}
                    saveUserAnswer={saveUserAnswer}
                    currentQuestionNumber={userAnswers.length + 1}
                    numbersOfQuestions={questions.length}
                />
                : null}

            {quizState == PROGRESS_STATE.FINISH ? <Result userAnswers={userAnswers} answers={questions.map(x => x.answer)} /> : null}
        </>
    );
}

export default App;
