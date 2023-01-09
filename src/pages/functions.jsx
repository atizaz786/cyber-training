import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, Typography, Paper, Grid } from '@material-ui/core';
import PasswordTester from './passwordTester';
import PhishingQuiz from './phishinqQuiz';
import SocialEngineeringQuiz from './socialEngineering';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  title: {
    marginBottom: theme.spacing(2),
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

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Introduction to Cybersecurity
      </Typography>
      <Typography>
        Welcome to the Kale University cybersecurity awareness training! In this training, we will discuss the importance of protecting yourself and your personal information online, and provide tips and resources for staying safe online.
      </Typography>
      <Typography variant="h5" className={classes.title}>
        Types of online threats
      </Typography>
          <ul className={classes.list}>
        <li className={classes.listItem}>Viruses</li>
        <li className={classes.listItem}>Phishing attacks</li>
        <li className={classes.listItem}>Malware</li>
      </ul>
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
      <Typography variant="h5" className={classes.title}>
        Protecting your email account
      </Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>Use a strong, unique password for your email account</li>
        <li className={classes.listItem}>Enable two-factor authentication for your email account</li>
        <li className={classes.listItem}>Be cautious when sharing personal information through email</li>
      </ul>
      <PhishingQuiz />
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

export function SocialEngineering() {
  const classes = useStyles();

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
      <SocialEngineeringQuiz/>
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




