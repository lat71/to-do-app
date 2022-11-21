import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import toastr from 'toastr';
import 'reactjs-toastr/lib/toast.css';
import * as React from 'react';

export default function SimpleDialog(props) {
    const { title, titleIcon, allowTitle, checkTitles, onClose, open, task, onAdd } = props;

    const [newTitle, setTitles] = React.useState({
        name: ""
    });

    const [desc, setDesc] = React.useState({
        setDesc: (task === undefined ? "" : task.description)
    });
    
    const handleDescChange = setTo => event => {
        // console.log(desc.setDesc)
        setDesc({...desc, [setTo]: event.target.value });
        // newDesc = desc.setDesc.toString();
        // console.log(desc.setDesc)
    };

    const handleTitleChange = setTo => event => {
        setTitles({ ...newTitle, [setTo]: event.target.value });
        // setTitle = newTitle.name;
        // console.log(newTitle)
    };

    let noTask = task === undefined;
    let setTitle= ""
    let newDesc = ""
    let newDate = noTask ? "" : task.deadline
    let priority = noTask ? "" : task.priority

    const handleClose = () => {
        let isValid = validateForm()
        console.log(validateForm() === false ? "FALSE! Form vlaidation FAILED" : "TRUE! VALIDATION PASSED")
        if (!isValid) { 
            return; }
        if (noTask) {
            let title = newTitle.name;
            let description = desc.setDesc;
            let deadline = newDate.toString()
            onAdd({title, description, deadline, priority})
            toastr["success"]("Task succesfully added", "");
        }
        else {
            task.deadline = newDate
            task.priority = priority;
            task.description = (desc.setDesc.toString() === "" ? task.description : desc.setDesc.toString());
            toastr["success"]("Task succesfully updated", "");
        }
        onClose();
    };

    const validateForm = () => {
        let titleValid = noTask ? false : true;

        if (noTask) {
            setTitle = newTitle.name.toString();
            titleValid = (setTitle === "" ? false : checkTitles(setTitle));
        }
        return (titleValid && (desc.setDesc.toString() !== "") && (newDate !== "") && (priority !== ""))
    }

    const titleError = newTitle.name === "";
    const descError = desc.setDesc === "";

    return (
      <Dialog onClose={onClose} open={open}>
        <AppBar sx={{ maxHeight: 50, minWidth: 250,  position: 'relative' }}>
            <Toolbar>
                <Icon className={titleIcon} sx={{ mr: 1 }}/>
                <Typography sx={{ ml: 0,}} >
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <Stack justifyContent="center" alignItems="center">
                {allowTitle && 
                <TextField id="outlined-required" label="Title" placeholder="Enter a Title"
                    onChange={handleTitleChange("name")}    
                // onChange={(e) => {
                    //     handleChange("name");
                    //     setTitle = e.target.value;
                    // }}
                    helperText={titleError ? "Title is Required and must be unique!" : ""}
                    error={titleError}/>
                }
                <TextField
                id="outlined-required"
                label="Description"
                placeholder='Enter a Description'
                defaultValue={noTask ? "" : task.description}
                margin='normal'
                onChange={handleDescChange("setDesc")}
                // onChange={(e) => {
                //     newDesc = e.target.value;
                // }}
                helperText={descError ? "Description is required" : ""}
                error={descError}
                />
                <TextField
                    id="date"
                    label="Deadline"
                    type="date"
                    defaultValue={noTask ? "" : task.deadline}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(e) => {
                        newDate = e.target.value;
                    }}
                />
                <FormLabel id="radio-group-label" >Priority</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="row-radio-buttons"
                    onChange={(e) => {
                        priority = e.target.value;
                    }}
                >
                    <FormControlLabel value="Low" control={<Radio />} label="Low" />
                    <FormControlLabel value="Med" control={<Radio />} label="Med" />
                    <FormControlLabel value="High" control={<Radio />} label="High" />
                </RadioGroup>
            </Stack>
        </Box>
        <Stack direction="row" spacing={1} className='dialogBtnsContainer'>
            <Button variant="contained" color="primary" 
                    startIcon={<Icon className={titleIcon} />}
                    onClick={handleClose}>{title}</Button>
            <Button variant="contained" color="error" 
                    startIcon={<Icon className={"fa fa-ban"} />}
                    onClick={() => {
                        desc.setDesc = "";
                        newTitle.name = "";
                        onClose()}}>Cancel</Button>
        </Stack>
      </Dialog>
    );
  }
  