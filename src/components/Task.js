import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export default function Task({ task }) {

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell align="center" scope="row">{task.title}</TableCell>
        <TableCell align="center">{task.description}</TableCell>
        <TableCell align="center">{task.deadline}</TableCell>
        <TableCell align="center">{task.priority}</TableCell>
        <TableCell align="center">{task.isComplete}</TableCell>
        <TableCell align="center">
            <div className="container">
                <Button variant="contained" color="primary">Update</Button>
                <Button variant="contained" color="error">Delete</Button>
            </div>
        </TableCell>
        </TableRow>
    );
}