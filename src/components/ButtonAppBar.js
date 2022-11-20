import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SimpleDialog from './SimpleDialog';

export default function ButtonAppBar() {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
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
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        />
        </Box>
    );
}