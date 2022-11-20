import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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
        
        </TableCell>
        </TableRow>
    );
}