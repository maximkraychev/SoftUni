import { useEffect, useState } from 'react';
import './App.css';
import StartButton from './components/StartButton';
import Question from './components/Question';

const mockData = [
    {
        id: 1,
        question: 'What does the "DOM" stand for in JavaScript?',
        a: 'Document Object Model',
        b: 'Data Output Module',
        c: 'Digital Object Manipulation',
        d: 'Document Orientation Model',
        answer: 'Document Object Model',
    },
    {
        id: 2,
        question: 'What is the purpose of the addEventListener method in JavaScript?',
        a: 'To subtract two numbers',
        b: 'To handle mouse clicks and other events',
        c: 'To create a new element in the DOM',
        d: 'To define a function',
        answer: 'To handle mouse clicks and other events',
    },
    {
        id: 3,
        question: 'How do you comment out multiple lines in JavaScript?',
        a: '// Comment //',
        b: '/* Comment */',
        c: '# Comment #',
        d: '-- Comment --',
        correctAnswer: '/* Comment */',
    },
    {
        id: 4,
        question: 'What is the result of 3 + \'3\' in JavaScript?',
        a: '6',
        b: '\'33\'',
        c: '33',
        d: '\'6\'',
        answer: '\'33\'',
    },
    {
        id: 5,
        question: 'In JavaScript, what does the === operator check for?',
        a: 'Equality with type coercion',
        b: 'Equality without type coercion',
        c: 'Assignment',
        d: 'Greater than or equal to',
        answer: 'Equality without type coercion',
    },
];

const PROGRESS_STATE = {
    START: 'start',
    IN_PROGRESS: 'in-progress',
    FINISH: 'finish'
};

function App() {

    const [quizState, setQuizState] = useState(PROGRESS_STATE.START);
    const [userAnswers, setUserAnswers] = useState([]);


    function startQuiz() {
        setQuizState(PROGRESS_STATE.IN_PROGRESS);
    }

    // function finishQuiz() {
    //     setState(PROGRESS_STATE.FINISH);
    // }

    function formHandler(event, selectedValue) {
        event.preventDefault();

        if (selectedValue == null) {
            return;
        }

        setUserAnswers((x) => [...x, selectedValue]);
    }

    useEffect(() => {

    }, [userAnswers]);

    return (
        <>
            {quizState == PROGRESS_STATE.START ? <StartButton handler={startQuiz} /> : null}

            {quizState == PROGRESS_STATE.IN_PROGRESS
                ? <Question
                    question={mockData[userAnswers.length]}
                    handler={formHandler}
                    currentQuestion={userAnswers.length + 1}
                    questionNumber={mockData.length}
                />
                : null}
        </>
    );
}

export default App;
