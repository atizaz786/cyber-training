import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    background: 'linear-gradient(to bottom, #0077be, #00c6ff)',
      color:"#fff",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3, 0),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  correct: {
    color: 'green',
  },
  incorrect: {
    color: 'red',
  },
}));

const questions = [
  {
    question: 'What is social engineering?',
    choices: [
      'The use of technology to manipulate people',
      'The use of psychological tactics to manipulate people',
      'The use of physical force to manipulate people',
      'All of the above',
    ],
    correct: 1,
  },
  {
    question: 'What are some common tactics used in social engineering attacks?',
    choices: [
      'Impersonation',
      'Pretexting',
      'Phishing',
      'All of the above',
    ],
    correct: 3,
  },
  {
    question: 'What should you do if you receive a suspicious email or phone call requesting personal information?',
    choices: [
      'Ignore the request',
      'Immediately provide the requested information',
      'Verify the identity of the individual before sharing any personal information',
      'All of the above',
    ],
    correct: 2,
  },
  {
    question: 'What is the best way to protect yourself against social engineering attacks?',
    choices: [
      'Keeping your computer updated with the latest security patches',
      'Avoiding clicking on links or downloading attachments from unknown sources',
      'Being suspicious of unsolicited requests for personal information',
      'All of the above',
    ],
    correct: 3,
  },
  {
    question: 'What is phishing?',
    choices: [
      'A type of social engineering attack that uses email or text messages to trick people into providing personal information',
      'A type of social engineering attack that uses phone calls to trick people into providing personal information',
      'A type of social engineering attack that uses physical force to trick people into providing personal information',
      'All of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is vishing?',
    choices: [
      'A type of social engineering attack that uses email or text messages to trick people into providing personal information',
      'A type of social engineering attack that uses phone calls to trick people into providing personal information',
      'A type of social engineering attack that uses physical force to trick people into providing personal information',
      'All of the above',
    ],
    correct: 1,
  },
  {
    question: 'What is smishing?',
    choices: [
      'A type of social engineering attack that uses email or text messages to trick people into providing personal information',
      'A type of social engineering attack that uses phone calls to trick people into providing personal information',
      'A type of social engineering attack that uses physical force to trick people into providing personal information',
      'All of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is pre-texting?',
    choices: [
      'A type of social engineering attack that uses a fake identity to gain trust',
      'A type of social engineering attack that uses a fake sense of urgency to trick people into providing personal information',
      'A type of social engineering attack that uses physical force to trick people into providing personal information',
      'All of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is baiting?',
    choices: [
      'A type of social engineering attack that uses a fake sense of scarcity to trick people into providing personal information',
      'A type of social engineering attack that uses a fake sense of popularity to trick people into providing personal information',
      'A type of social engineering attack that uses a fake software update to trick people into downloading malware or giving away personal information',
      'All of the above',
    ],
    correct: 2,
  },
  {
    question: 'What is scareware?',
    choices: [
      'A type of social engineering attack that uses a fake sense of urgency to trick people into providing personal information',
      'A type of social engineering attack that uses a fake software update to trick people into downloading malware or giving away personal information',
      'A type of social engineering attack that uses scare tactics to trick people into providing personal information',
      'All of the above',
    ],
    correct: 2,
  },
  {
    question: 'What is whaling?',
    choices: [
      'A type of social engineering attack that targets high-level executives',
      'A type of social engineering attack that targets a specific type of person',
      'A type of social engineering attack that targets a specific individual or organization',
      'All of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is the difference between phishing and spoofing?',
    choices: [
      'Phishing tries to steal personal information, spoofing tries to gain unauthorized access to a network',
      'Phishing uses email, spoofing uses phone calls',
      'Phishing uses a fake website, spoofing uses a fake email address',
      'None of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is the difference between spear phishing and whaling?',
    choices: [
      'Spear phishing targets a specific individual or organization, whaling targets high-level executives',
      'Spear phishing targets a specific type of person, whaling targets a specific individual or organization',
      'Spear phishing and whaling are the same thing',
      'None of the above',
    ],
    correct: 0,
  },

  {
    question: 'What is the name of the process of tricking someone into providing personal information by using a fake sense of scarcity?',
    choices: [
      'Phishing',
      'Spear phishing',
      'Pretexting',
      'Baiting'
    ],
    correct: 3,
  },
 
]


// const questions = [  {    question: 'What is social engineering?',    choices: [      'The use of computers and technology to manipulate people',      'The use of psychological techniques to manipulate people',      'The use of physical force to manipulate people',      'All of the above',    ],
//     correct: 1,
//   },
//   {
//     question: 'What are some common tactics used in social engineering attacks?',
//     choices: [
//       'Impersonation',
//       'Pretexting',
//       'Scareware',
//       'All of the above',
//     ],
//     correct: 3,
//   },
//   {
//     question: 'What should you do if you receive a suspicious email or phone call requesting personal information?',
//     choices: [
//       'Ignore the request',
//       'Immediately provide the requested information',
//       'Verify the identity of the individual before sharing any personal information',
//       'All of the above',
//     ],
//     correct: 2,
//   },
// ];

function SocialEngineeringQuiz() {
    const classes = useStyles();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const current = questions[currentQuestion];

    const handleChange = (event) => {
      setError('');
      setAnswers((prevAnswers) => {
        return {
          ...prevAnswers,
          [currentQuestion]: event.target.value,
        };
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!answers[currentQuestion]) {
        setError('Please select an answer');
        return;
      }
      setScore((prevScore) => {
        return prevScore + (parseInt(answers[currentQuestion]) === current.correct ? 1 : 0);
      });
      setCurrentQuestion((prevCurrentQuestion) => {
        return prevCurrentQuestion + 1;
      });
    };
  
    const handleFinish = (event) => {
      event.preventDefault();
      setSubmitted(true);
    };
  
    if (submitted) {
      return (
        <Paper className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            Quiz Results
          </Typography>
          <Typography>
            You scored {score} out of {questions.length}
          </Typography>
        </Paper>
      );
    } else {
      return (
        <Paper className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            Social Engineering Quiz
          </Typography>
          <Typography>
            There are total {questions?.length} questions
          </Typography>
          <br />
          <Typography variant="body1" className={classes.title}>
           Q.{currentQuestion+1} {current.question}
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" error={error}>
                Please choose one:
              </FormLabel>
              <RadioGroup name="answer" value={answers[currentQuestion]} onChange={handleChange}>
                {current.choices.map((choice, index) => (
                  <FormControlLabel
                    key={index}
                    value={index.toString()}
                    control={<Radio />}
                    label={choice}
                  />
                ))}
              </RadioGroup>
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
            </FormControl>
            <Grid container justify="flex-end">
              {currentQuestion < questions.length - 1 ? (
                <Button type="submit" variant="contained" color="primary" className={classes.button}>
                  Next
                </Button>
              ) : (
                <Button type="submit" variant="contained" color="primary" className={classes.button} onClick={handleFinish}>
                  Finish
                </Button>
              )}
            </Grid>
          </form>
        </Paper>
      );
    }
  }
  
  export default SocialEngineeringQuiz;
  
  
