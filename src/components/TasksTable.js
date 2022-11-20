import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Task from './Task'
import Paper from '@mui/material/Paper';

// function createData(title, description, deadline, priority, isComplete) {
//   return { title, description, deadline, priority, isComplete};
// }

// const tasks = [
//     createData('title01', 'description1', '02/23/22', 'low', 'false'),
//     createData('title02', 'description2', '02/25/22', 'high', 'false'),
//   ];

export default function TasksTable({ tasks, toggleEdit }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Deadline</TableCell>
            <TableCell align="center">Priority</TableCell>
            <TableCell align="center">Is Complete</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) =>(
                  <Task key={task.id} task={task} toggleEdit={toggleEdit} />//key={Math.floor(Math.random() * 10000 + 1)}  onDelete={onDelete} onToggle={onToggle} />
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}