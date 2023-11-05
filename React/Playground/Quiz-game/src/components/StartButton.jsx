import './StartButton.css';

// eslint-disable-next-line react/prop-types
export default function StartButton({ startQuiz }) {
    return (
        <button className='start-btn' onClick={startQuiz}>START QUIZ</button>
    );
}