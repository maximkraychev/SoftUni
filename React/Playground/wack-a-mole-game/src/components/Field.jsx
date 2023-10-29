import './Field.css';
import hole from '../assets/hole.png';
import mole from '../assets/mole.png';

function Field(params) {
    return (
        <div>
            <img src={params.state ? mole : hole} onClick={() => params.handler(params.state)} alt="field" />
        </div>
    );
}

export default Field;