import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
            <div>
                <TextField
                id="outlined-required"
                label="Description"
                // defaultValue="Enter a Description"
                placeholder='Enter a Description'
                margin='normal'
                />
                <br/>
                <TextField
                id="outlined-required"
                label="Deadline"
                placeholder="Fix this w calendar"
                />
                <br/>
            </div>
        </Box>
        <div className='dialogBtnsContainer'>
            <Button variant="contained" color="primary" 
                    startIcon={<Icon className={titleIcon} />}
                    onClick={handleClose}>{title}</Button>
            <Button variant="contained" color="error" 
                    startIcon={<Icon className={"fa fa-ban"} />}
                    onClick={onClose}>Cancel</Button>
        </div>
      </Dialog>
    );
  }
  