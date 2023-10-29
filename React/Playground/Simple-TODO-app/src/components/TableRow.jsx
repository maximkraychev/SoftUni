import './TableRow.css';

function TableRow(params) {
    console.log(params);
    return (
        <tr>
            <td>{params.task.value}</td>
            <td onClick={ () => params.deleteHandler(params.task.taskId)} className="button">Delete</td>
        </tr>
    );
}

export default TableRow;