import './App.css';
import Field from './components/Field';

function App() {

    return (
        <div className='container'>
            <h1>Score</h1>
            <p>0</p>
            <div className='board'>
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
                <Field />
            </div>
        </div>
    );
}

export default App;
