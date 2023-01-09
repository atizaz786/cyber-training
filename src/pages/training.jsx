import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import {Introduction, PasswordSecurity, RecapAndNextSteps,MobileSecurity, SocialEngineering, EmailAndPhishingAttacks, SafeBrowsing} from './functions'
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'rgb(7,40,63)',
    background: 'linear-gradient(332deg, rgba(7,40,63,1) 5%, rgba(5,81,131,1) 58%, rgba(5,36,57,1) 98%)',
      color:"#00abff"
  },
  appBar: {
    background: 'rgb(7,40,63)',
background: 'linear-gradient(332deg, rgba(7,40,63,1) 5%, rgba(5,81,131,1) 58%, rgba(5,36,57,1) 98%)',
color:"#00abff",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'rgb(7,40,63)',
background: 'linear-gradient(332deg, rgba(7,40,63,1) 5%, rgba(5,81,131,1) 58%, rgba(5,36,57,1) 98%)',
      color:"#00abff"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    background: 'rgb(7,40,63)',
    background: 'linear-gradient(332deg, rgba(7,40,63,1) 5%, rgba(5,81,131,1) 58%, rgba(5,36,57,1) 98%)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



export default function Training() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [page, setPage] = useState('Introduction');

  function handleMenuItemClick(page) {
    setPage(page);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={0} position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cyber Awareness Training
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
         <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          <ListItem button onClick={() => handleMenuItemClick('Introduction')}>
            <ListItemText primary="Introduction" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Password Security')}>
            <ListItemText primary="Password Security" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Email and Phishing Attacks')}>
            <ListItemText primary="Email and Phishing Attacks" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Safe Browsing')}>
            <ListItemText primary="Safe Browsing" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Social Engineering')}>
            <ListItemText primary="Social Engineering" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Mobile Security')}>
            <ListItemText primary="Mobile Security" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('Recap and Next Steps')}>
            <ListItemText primary="Recap and Next Steps" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ background: 'rgb(7,40,63)',
background: 'linear-gradient(332deg, rgba(7,40,63,1) 5%, rgba(5,81,131,1) 58%, rgba(5,36,57,1) 98%)',}}  className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        {page === 'Introduction' && <Introduction />}
      {page === 'Password Security' && <PasswordSecurity />}
      {page === 'Email and Phishing Attacks' && <EmailAndPhishingAttacks />}
      {page === 'Safe Browsing' && <SafeBrowsing />}
      {page === 'Social Engineering' && <SocialEngineering />}
      {page === 'Mobile Security' && <MobileSecurity />}
      {page === 'Recap and Next Steps' && <RecapAndNextSteps />}
     
        
      </main>
      
    </div>
  );
}

