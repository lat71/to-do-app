import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

export default function Task({ task, onDelete }) {
    const [isComplete, setComplete] = useState(false)

    // const handleChange = (id) => { 

    //     toggleEdit(id);
    //     console.log('The checkbox was toggled and val is', task.isComplete); 
    // }; 

    // const showUpdate = task.isComplete;

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell align="center" scope="row">{task.title}</TableCell>
        <TableCell align="center">{task.description}</TableCell>
        <TableCell align="center">{task.deadline}</TableCell>
        <TableCell align="center">{task.priority}</TableCell>
        <TableCell align="center">{task.isComplete}
            <div className='form-control form-control-check'>
                <input type='checkbox'  onChange={(e) =>
                setComplete(e.currentTarget.checked) 
                //toggleEdit(task.id)}/>
                //toggleEdit(e.currentTarget.checked, task.id)} />
                } /> 
            </div>
        </TableCell>
        <TableCell align="center">
            <div className="container">
                {!isComplete ? ( 
                    <Button variant="contained" color="primary" startIcon={<Icon className={"fa fa-edit"} />}>Update</Button>
                    ) : (" ")
                }
                <Button variant="contained" color="error" 
                startIcon={<Icon className={"fa fa-times-circle"}/>} 
                onClick={() => onDelete(task.id)}>Delete</Button>
            </div>
        </TableCell>
        </TableRow>
    );
}