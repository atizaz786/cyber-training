import React,{useState} from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import {Introduction, PasswordSecurity, RecapAndNextSteps,MobileSecurity, SocialEngineering, EmailAndPhishingAttacks, SafeBrowsing, CrossSiteAwareness, DDOSAwareness, RansomwareAwareness, MIMAwareness, SQLAwareness} from './functions'
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PhishingQuiz from './phishinqQuiz';
import SocialEngineeringQuiz from './socialEngineering'

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
 
      color:"#fff"
  },
  appBar: {
    background: 'linear-gradient(to bottom, #0077be, #00c6ff)',
    color:"#fff",
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
    background: 'linear-gradient(to bottom, #0077be, #00c6ff)',
      color:"#fff"
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
  const navigate = useNavigate()
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
    setPage(page)
    if (page?.includes("-") || page === ""){
      navigate(`/${page}`)

    }
    
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
          <ListItem button onClick={() => handleMenuItemClick('')}>
            <ListItemText primary="Introduction" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('password-security')}>
            <ListItemText primary="Password Security" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('email-and-phishing-attacks')}>
            <ListItemText primary="Email and Phishing Attacks" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('safe-browsing')}>
            <ListItemText primary="Safe Browsing" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('social-engineering')}>
            <ListItemText primary="Social Engineering Awareness" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('mobile-security')}>
            <ListItemText primary="Mobile Security Awareness" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('cross-site-awareness')}>
            <ListItemText primary="Cross Site Awareness" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('ddos-awareness')}>
            <ListItemText primary="Denial of Service Awareness" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('ransomware-awareness')}>
            <ListItemText primary="Ransomware Awareness" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('mitm-awareness')}>
            <ListItemText primary="Man-in-Middle Awareness" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('sql-awareness')}>
            <ListItemText primary="SQL Injection Awareness" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ background: '#fff',}}  className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
        <div className={classes.drawerHeader} />
        <Routes>
        <Route exact path="/" element={<Introduction />} />
        <Route path="/password-security" element={<PasswordSecurity />} />
        <Route path="/email-and-phishing-attacks" element={<EmailAndPhishingAttacks />} />
        <Route path="/safe-browsing" element={<SafeBrowsing />} />
        <Route path="/social-engineering" element={<SocialEngineering />} />
        <Route path="/mobile-security" element={<MobileSecurity />} />
        <Route path="/phishing-quiz" element={<PhishingQuiz />} />
        <Route path="/cross-site-awareness" element={<CrossSiteAwareness />} />
        <Route path="/mitm-awareness" element={<MIMAwareness />} />
        <Route path="/ransomware-awareness" element={<RansomwareAwareness />} />
        <Route path="/ddos-awareness" element={<DDOSAwareness />} />
        <Route path="/social-engineering-quiz" element={<SocialEngineeringQuiz />} />
        <Route path="/sql-awareness" element={<SQLAwareness />} />
<Route path='*' element={""}/>
</Routes>
        {/* {page === 'Introduction' && <Introduction />}
      {page === 'Password Security' && <PasswordSecurity />}
      {page === 'Email and Phishing Attacks' && <EmailAndPhishingAttacks />}
      {page === 'Safe Browsing' && <SafeBrowsing />}
      {page === 'Social Engineering' && <SocialEngineering />}
      {page === 'Mobile Security' && <MobileSecurity />}
      {page === 'Recap and Next Steps' && <RecapAndNextSteps />} */}
     
        
      </main>
      
    </div>
  );
}

