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
    const [mockData, setMockData] = useState([]);


    function startQuiz() {
        setQuizState(PROGRESS_STATE.IN_PROGRESS);
    }

    function finishQuiz() {
        setQuizState(PROGRESS_STATE.FINISH);
    }

    function saveUserAnswer(userAnswer) {

        setUserAnswers((x) => {
            const currentUserAnswers = [...x, userAnswer];
            
            if (currentUserAnswers.length == mockData.length) {
                finishQuiz(currentUserAnswers);
            }

            return currentUserAnswers;
        });
    }

    useEffect(() => {
        fetch('./src/mockData.json')
            .then(request => request.json())
            .then(data => setMockData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {quizState == PROGRESS_STATE.START ? <StartButton handler={startQuiz} /> : null}

            {quizState == PROGRESS_STATE.IN_PROGRESS
                ? <Question
                    question={mockData[userAnswers.length]}
                    userAnswerHandler={saveUserAnswer}
                    currentQuestion={userAnswers.length + 1}
                    questionNumber={mockData.length}
                />
                : null}

            {quizState == PROGRESS_STATE.FINISH ? <Result userAnswers={userAnswers} answers={mockData.map(x => x.answer)} /> : null}
        </>
    );
}

export default App;
