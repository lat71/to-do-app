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

export default function SimpleDialog(props) {
    const { title, titleIcon, allowTitle, onClose, open, task } = props;

    const handleClose = () => {
      onClose();
    };
  
    let newDate = ""
    let noTask = task === undefined;

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
                <TextField id="outlined-required" label="Title" placeholder="Enter a Title" />
                }
                <TextField
                id="outlined-required"
                label="Description"
                placeholder='Enter a Description'
                defaultValue={noTask ? "" : task.description}
                margin='normal'
                />
                <TextField
                    id="date"
                    label="Deadline"
                    type="date"
                    defaultValue={noTask ? "2022-11-21" : task.deadline}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(e) => {{
                        // console.log(e.target.value);
                        newDate = e.target.value;
                        // task === undefined ? console.log("No Task") : console.log(task)
                        // task === undefined ? console.log("") : task.deadline = newDate
                    }}}
                />
                <FormLabel id="radio-group-label" >Priority</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="row-radio-buttons-group-label"
                    name="row-radio-buttons"
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
                    onClick={onClose}>Cancel</Button>
        </Stack>
      </Dialog>
    );
  }
  