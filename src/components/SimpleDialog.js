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
import * as React from 'react'

export default function SimpleDialog(props) {
    const { title, titleIcon, allowTitle, onClose, open } = props;

    const handleClose = () => {
      onClose();
    };
  
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
                margin='normal'
                />
                <TextField
                    id="date"
                    label="Deadline"
                    type="date"
                    defaultValue="2022-11-21"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(e) => {{
                        console.log(e.target.value);
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
  