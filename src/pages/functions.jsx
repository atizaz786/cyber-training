import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, Typography, Paper, Grid, Button, List, ListItem, ListItemText } from '@material-ui/core';
import PasswordTester from './passwordTester';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    background: 'linear-gradient(to bottom, #0077be, #00c6ff)',
      color:"#fff",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  pos: {
    marginBottom: 12,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
}));

export function Introduction() {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Introduction to Cybersecurity
      </Typography>
      <Typography>
        Welcome to the Kale University cybersecurity awareness training! In this training, we will discuss the importance of protecting yourself and your personal information online, and provide tips and resources for staying safe online.
      </Typography>
      <Typography variant="h5" className={classes.title}>
        Types of online threats
      </Typography>
      <List component="nav" className={classes.list} aria-label="DDOS tactics">
          <ListItem>
            <ListItemText primary="Viruses" secondary="Attackers may flood the target website or network with a high volume of traffic from a large number of compromised devices" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Ransomware Attacks" secondary="Attackers may use amplification techniques to increase the volume of traffic directed at the target" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phishing Attacks" secondary="Attackers may target specific vulnerabilities in the target's web application" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Cross-site Scripting Attacks" secondary="Attackers may target specific vulnerabilities in the target's web application" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Denial of Service Attacks" secondary="Attackers may target specific vulnerabilities in the target's web application" />
          </ListItem>
        </List>
    </Paper>
  );
}

export function CrossSiteAwareness() {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="h4" className={classes.title}>
      Cross-Site Scripting (XSS) Attack Awareness
      </Typography>
      <Typography>
      Cross-Site Scripting (XSS) attacks are a type of cyber attack that allows an attacker to inject malicious script into a web page viewed by other users. The script can steal users' sensitive information, such as cookies and session tokens, or perform malicious actions on behalf of the user. Here are some common tactics used in XSS attacks:
      </Typography>
      <List component="nav" className={classes.list} aria-label="XSS attack tactics">
          <ListItem>
            <ListItemText primary="Stored XSS" secondary="Attackers may inject a script into a website's database, which is then executed every time the affected page is loaded" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Reflected XSS" secondary="Attackers may inject a script into a website's search or form input, which is then executed when the user views the results of the search or form submission" />
          </ListItem>
          <ListItem>
            <ListItemText primary="DOM-based XSS" secondary="Attackers may manipulate the Document Object Model (DOM) of a website to execute a script, rather than injecting a script into the website's source code" />
          </ListItem>
        </List>
        <Typography variant="body1" className={classes.pos}>
          To protect yourself from XSS attacks, it's important to sanitize user input, validate and encode data output, and use a Content Security Policy (CSP) to restrict the sources of script execution.
        </Typography>
    </Paper>
  );
}

export function PasswordSecurity() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Password Security
      </Typography>
      <Typography>
        Strong, unique passwords are an important part of protecting your accounts and personal information online. Here are some tips for creating and storing secure passwords:
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>Use a mix of letters, numbers, and special characters</li>
        <li className={classes.listItem}>Avoid using personal information such as your name or address</li>
        <li className={classes.listItem}>Use a different password for each of your accounts</li>
      </ul>
      <Typography>
        It can be difficult to remember unique passwords for all of your accounts. One way to manage your passwords is to use a password manager, which is a tool that stores and encrypts your passwords and generates strong, unique passwords for you.
      </Typography>
      <Typography variant="h5" className={classes.title}>
        Two-factor authentication
      </Typography>
      <Typography>
        Two-factor authentication (2FA) is an additional layer of security that requires you to provide a second form of verification when logging into your accounts. This can be a code sent to your phone, a fingerprint scan, or a security token. Enabling 2FA can help protect your accounts even if your password is compromised.
      </Typography>
      <Typography variant="h5" >
        Check Strength of your Password
      </Typography>
      <PasswordTester/>
    </Paper>
  );
}

// Render the other pages using Material-UI here
export function EmailAndPhishingAttacks() {
    const classes = useStyles();
    const navigate = useNavigate()
  
    return (
      <Paper className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Email and Phishing Attacks
        </Typography>
        <Typography>
          Phishing attacks are a common way for attackers to trick users into revealing sensitive information or installing malware. Be on the lookout for these red flags in emails:
        </Typography>
        <ul className={classes.list}>
        <li className={classes.listItem}>Urgent or threatening language</li>
        <li className={classes.listItem}>Suspicious attachments or links</li>
        <li className={classes.listItem}>Misspelled words or unusual formatting</li>
      </ul>
      <Typography>
        If you receive an email that seems suspicious, do not click on any links or download any attachments. Instead, verify the authenticity of the email by contacting the sender directly or through a trusted source.
      </Typography>
      <br />
      <Typography variant="h5" className={classes.title}>
        Protecting your email account
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>Use a strong, unique password for your email account</li>
        <li className={classes.listItem}>Enable two-factor authentication for your email account</li>
        <li className={classes.listItem}>Be cautious when sharing personal information through email</li>
      </ul>
      <br />
      <br />
      <Typography >
       Check your Knowledge on Phishing
      </Typography>
      <br />
      <Button variant='outlined' color='primary' onClick={()=> navigate('/phishing-quiz')}>
        <Typography color='primary'>
        Start Quiz
        </Typography>
        
      </Button>

    </Paper>
  );
}

export function SafeBrowsing() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Safe Browsing
      </Typography>
      <Typography>
        When browsing the web, it is important to be aware of potential threats such as malicious websites and online scams. Here are some tips for staying safe online:
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>Use a reputable antivirus software and keep it up to date</li>
        <li className={classes.listItem}>Only visit websites that you trust</li>
        <li className={classes.listItem}>Be cautious when clicking on links, especially in emails or on social media</li>
      </ul>
      <Typography>
        To protect your personal information while browsing, you can use a virtual private network (VPN) or a browser extension that blocks tracking cookies.
      </Typography>
    </Paper>
  );
}

export function DDOSAwareness() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
      Distributed Denial of Service (DDOS) Awareness
      </Typography>
      <Typography>
      A Distributed Denial of Service (DDOS) attack is a type of cyber attack where a large number of compromised devices, often referred to as "bots," are used to flood a target website or network with a large amount of traffic, making it difficult or impossible for legitimate users to access the targeted resource. Here are some common tactics used in DDOS attacks:
      </Typography>
      <List component="nav" className={classes.list} aria-label="DDOS tactics">
          <ListItem>
            <ListItemText primary="Flooding" secondary="Attackers may flood the target website or network with a high volume of traffic from a large number of compromised devices" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Amplification" secondary="Attackers may use amplification techniques to increase the volume of traffic directed at the target" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Application-layer attacks" secondary="Attackers may target specific vulnerabilities in the target's web application" />
          </ListItem>
        </List>
        <Typography variant="body1" className={classes.pos}>
            To protect yourself from DDOS attacks, it's important to keep your devices and software up to date, and be cautious of suspicious emails and links. Additionally, having a website or network infrastructure that is able to withstand a high volume of traffic and that is distributed across multiple locations can help mitigate the effects of a DDOS attack. It is also important to have a incident response plan in place in case of a DDOS attack occur.
          </Typography>
    </Paper>
  );
}

export function SQLAwareness() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
      SQL Injection Attack Awareness
      </Typography>
      <Typography>
      SQL Injection attacks are a type of cyber attack that exploits vulnerabilities in the way a website interacts with its database. Attackers can use these vulnerabilities to execute arbitrary SQL code on a target database and steal or manipulate data. Here are some common tactics used in SQL Injection attacks:
      </Typography>
      <List component="nav" className={classes.list} aria-label="SQL Injection attack tactics">
          <ListItem>
            <ListItemText primary="Union-based SQL Injection" secondary="Attackers may use the UNION keyword to combine the results of two or more SELECT statements in one query" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Error-based SQL Injection" secondary="Attackers may use malformed SQL syntax to force the database to reveal error messages containing information about the structure of the database" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Blind SQL Injection" secondary="Attackers may use logical statements to infer the value of a given piece of data by systematically sending different inputs and observing the resulting output" />
          </ListItem>
        </List>
        <Typography variant="body1" className={classes.pos}>
          To protect yourself from SQL Injection attacks, it's important to use prepared statements and parameterized queries, validate all user input, and limit user privileges on the database.
        </Typography>
    </Paper>
  );
}

export function MIMAwareness() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
      Man-in-the-Middle (MitM) Attack Awareness
      </Typography>
      <Typography>
      Man-in-the-Middle (MitM) attacks are a type of cyber attack where an attacker intercepts communication between two parties, usually without the knowledge of either party, and can read, modify, or inject new information into the intercepted communication. Here are some common tactics used in MitM attacks:
      </Typography>
      <List component="nav" className={classes.list} aria-label="MitM attack tactics">
          <ListItem>
            <ListItemText primary="ARP Spoofing" secondary="Attackers may use Address Resolution Protocol (ARP) Spoofing to intercept communication on a local network" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Wi-Fi Eavesdropping" secondary="Attackers may use tools to listen in on wireless network communication" />
          </ListItem>
          <ListItem>
            <ListItemText primary="SSL Stripping" secondary="Attackers may strip away the secure layer of communication, such as HTTPS, and intercept the communication in plaintext" />
          </ListItem>
        </List>
        <Typography variant="body1" className={classes.pos}>
          To protect yourself from MitM attacks, it's important to use a Virtual Private Network (VPN) whenever possible, verify the identity of the parties you are communicating with, look for warning signs of SSL stripping, such as a missing padlock icon in your browser, and use secure communication methods.
        </Typography>
      
    </Paper>
  );
}

export function RansomwareAwareness() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
      Ransomware Awareness
      </Typography>
      <Typography>
      Ransomware is a type of malware that encrypts the victim's files, making them inaccessible. The attackers then demand a ransom payment in exchange for the decryption key. Here are some common tactics used in Ransomware attacks:
      </Typography>
      <List component="nav" className={classes.list} aria-label="ransomware tactics">
          <ListItem>
            <ListItemText primary="Phishing" secondary="Attackers may use phishing tactics to trick victims into downloading and installing the ransomware" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Exploits" secondary="Attackers may use known vulnerabilities in software to install the ransomware" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Drive-by downloads" secondary="Attackers may use malicious websites or ads to automatically download and install the ransomware on the victim's device" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Brute-force attacks" secondary="Attackers may attempt to guess login credentials for remote access to the victim's device and install the ransomware" />
          </ListItem>
        </List>
        <Typography variant="body1" className={classes.pos}>
          To protect yourself from Ransomware attacks, it's important to keep your software up to date, be cautious of suspicious emails and links, and avoid downloading software from untrusted sources. It's also a good idea to regularly backup your important files to an external drive or cloud service, in case you become a victim of a ransomware attack and need to restore your files.
        </Typography>
    </Paper>
  );
}

export function SocialEngineering() {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Social Engineering
      </Typography>
      <Typography>
        Social engineering is a type of attack that exploits human psychology rather than technical vulnerabilities. Attackers may use social engineering techniques to gain access to sensitive information or persuade you to take actions that may not be in your best interest. Here are some ways to protect yourself from social engineering attacks:
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>Be wary of unsolicited requests for personal information, such as through email or phone</li>
        <li className={classes.listItem}>Be cautious when clicking on links or downloading attachments from unknown sources</li>
        <li className={classes.listItem}>Verify the identity of individuals before sharing sensitive information</li>
      </ul>
      <Typography>
        Remember that legitimate organizations will not ask for sensitive information through unsecured channels such as email or phone. If you receive a suspicious request, take the time to verify the identity of the individual before sharing any personal information.
      </Typography>
      <br />
      <br />
      <Typography>
       Check your knowledge on Social Engineering
      </Typography>
      <br />
      <Button color='primary' variant='outlined' onClick={()=> navigate('/social-engineering-quiz')}>
        Start Quiz
      </Button>
    </Paper>
  );
}

export function MobileSecurity() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Mobile Security
      </Typography>
      <Typography>
        Mobile devices such as smartphones and tablets are vulnerable to online threats just like computers. Here are some tips for protecting your mobile device:
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>Keep your operating system and apps up to date</li>
        <li className={classes.listItem}>Use a strong, unique password to unlock your device</li>
        <li className={classes.listItem}>Use a reputable antivirus software</li>
        <li className={classes.listItem}>Be cautious when downloading apps or clicking on links</li>
      </ul>
      <Typography>
        To protect your personal information on your mobile device, consider enabling remote wipe and location tracking features in case your device is lost or stolen.
      </Typography>
    </Paper>
  );
}

export function RecapAndNextSteps() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Recap and Next Steps
      </Typography>
      <Typography>
        In this training, we have discussed the importance of protecting yourself and your personal information online. Here are some key takeaways to remember:
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>Use strong, unique passwords and enable two-factor authentication</li>
        <li className={classes.listItem}>Be cautious when receiving emails or clicking on links</li>
        <li className={classes.listItem}>Use reputable antivirus software and a VPN</li>
        <li className={classes.listItem}>Verify the identity of individuals before sharing personal information</li>
      </ul>
      <Typography>
        To continue learning about cybersecurity, check out these resources:
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <Link href="https://staysafeonline.org/">Stay Safe Online</Link>
        </li>
        <li className={classes.listItem}>
          <Link href="https://www.cyber.gov/resources">US Cybersecurity and Infrastructure Security Agency</Link>
        </li>
        <li className={classes.listItem}>
          <Link href="https://www.consumer.ftc.gov/topics/online-security">Federal Trade Commission's Online Security Tips</Link>
        </li>
      </ul>
    </Paper>
  );
}




