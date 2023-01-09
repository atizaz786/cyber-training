import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import {Introduction, PasswordSecurity, RecapAndNextSteps,MobileSecurity, SocialEngineering, EmailAndPhishingAttacks, SafeBrowsing} from './functions'
import CssBaseline from '@material-ui/core/CssBaseline';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    textAlign: 'center',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));



export default function Training() {
  const classes = useStyles();
  const [page, setPage] = useState('Introduction');

  function handleMenuItemClick(page) {
    setPage(page);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kale University Cybersecurity Awareness Training
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
         <div className={classes.toolbar} />
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
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

