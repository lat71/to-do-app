import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SimpleDialog from './SimpleDialog';

export default function ButtonAppBar({ tasks, onAdd }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    // Return false if is already a title for a different item 
    const checkTitles = (titleToCheck) => {
        let currTitle = true;
        tasks.map((task) => 
            task.title === titleToCheck ? (currTitle = false) : (currTitle = currTitle)        
        );
        return currTitle;
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 60, mr: -1 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    FRAMEWORKS
                </Typography>
                <Button variant="contained" color="primary" 
                        startIcon={<Icon className={"fa fa-plus-circle"} />}
                        onClick={handleClickOpen}>Add</Button>
            </Toolbar>
        </AppBar>
        <SimpleDialog
        title="Add"
        titleIcon= "fa fa-plus-circle"
        allowTitle= {true}
        checkTitles= {checkTitles}
        open={open}
        onClose={handleClose}
        onAdd={onAdd}
        />
        </Box>
    );
}