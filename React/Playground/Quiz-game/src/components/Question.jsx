import { useState } from 'react';
import './Question.css';

export default function Question(params) {

    const [selected, setSelected] = useState(null);

    function selectHandler(abc) {
        setSelected(abc.target.value);
    }

    return (
        <>
            <p>
                <span>
                    {params.currentQuestion + '/' + params.questionNumber}
                </span>
            </p>
            <h2>{params.question.question}</h2>

            <form onSubmit={(event) => params.handler(event, selected)}>
                <div>
                    <input type="radio" id='a' name='userAnswer' value={params.question.a} onChange={selectHandler} />
                    <label htmlFor="a">{params.question.a}</label>
                </div>
                <div>
                    <input type="radio" id='b' name='userAnswer' value={params.question.b} onChange={selectHandler} />
                    <label htmlFor="b">{params.question.b}</label>
                </div>
                <div>
                    <input type="radio" id='c' name='userAnswer' value={params.question.c} onChange={selectHandler} />
                    <label htmlFor="c">{params.question.c}</label>
                </div>
                <div>
                    <input type="radio" id='d' name='userAnswer' value={params.question.d} onChange={selectHandler} />
                    <label htmlFor="d">{params.question.d}</label>
                </div>
                <input type="submit" value='Next' />
            </form>
        </>
    );
}