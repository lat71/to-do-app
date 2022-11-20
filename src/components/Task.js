import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

export default function Task({ task, toggleEdit }) {
    const [isComplete, setComplete] = useState(false)

    const handleChange = () => { 

        toggleEdit(task.id);
        console.log('The checkbox was toggled and val is', task.isComplete); 
    }; 

    const showUpdate = task.isComplete;

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
                //setComplete(e.currentTarget.checked)
                //toggleEdit(task.id)}/>
                handleChange()} />
            </div>
        </TableCell>
        <TableCell align="center">
            <div className="container">
                {!showUpdate ? ( 
                    <Button variant="contained" color="primary" startIcon={<Icon className={"fa fa-edit"} />}>Update</Button>
                    ) : (" ")
                }
                <Button variant="contained" color="error" startIcon={<Icon className={"fa fa-times-circle"} />}>Delete</Button>
            </div>
        </TableCell>
        </TableRow>
    );
}