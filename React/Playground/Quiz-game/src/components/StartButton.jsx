import './StartButton.css';

export default function StartButton(props) {
    return (
        // eslint-disable-next-line react/prop-types
        <button className='start-btn' onClick={props.handler}>START QUIZ</button>
    );
}