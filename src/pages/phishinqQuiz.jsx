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
    question: 'What is the goal of a phishing attack?',
    choices: [
      'To gain unauthorized access to a network',
      'To steal personal information',
      'To spread malware',
      'All of the above',
    ],
    correct: 1,
  },
  {
    question: 'What is pretexting?',
    choices: [
      'Creating a fake identity to gain trust',
      'Sending emails with malicious links',
      'Sending text messages with malicious links',
      'All of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is vishing?',
    choices: [
      'A phishing attack via email',
      'A phishing attack via phone call',
      'A phishing attack via text message',
      'All of the above',
    ],
    correct: 1,
  },
  {
    question: 'What is the best way to protect against social engineering attacks?',
    choices: [
      'Keeping your computer updated with the latest security patches',
      'Avoiding clicking on links or downloading attachments from unknown sources',
      'Verifying the identity of the person before providing personal information',
      'All of the above',
    ],
    correct: 3,
  },
  {
    question: 'What is a spear phishing attack?',
    choices: [
      'A phishing attack targeting a specific individual or organization',
      'A phishing attack targeting a large group of people',
      'A phishing attack targeting a specific type of person',
      'All of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is a whaling attack?',
    choices: [
      'A spear phishing attack targeting a high-level executive',
      'A phishing attack targeting a specific type of person',
      'A phishing attack targeting a specific individual or organization',
      'All of the above',
    ],
    correct: 0,
  },
  {
    question: 'What is a phishing attack?',
    choices: [
      'A type of computer virus',
      'A physical attack on a computer',
      'An attempt to trick individuals into revealing sensitive information or installing malware',
      'All of the above',
    ],
    correct: 2,
  },
  {
    question: 'What are some red flags to watch out for in emails that may indicate a phishing attack?',
    choices: [
      'Urgent or threatening language',
      'Suspicious attachments or links',
      'Misspelled words or unusual formatting',
      'All of the above',
    ],
    correct: 3,
  },
  {
    question: 'What should you do if you receive a suspicious email?',
    choices: [
      'Click on any links or download any attachments',
      'Verify the authenticity of the email by contacting the sender directly or through a trusted source',
      'Ignore the email',
      'All of the above',
    ],
    correct: 1,
  },
  {
    question: 'What is the difference between a phishing attack and a spoofing attack?',
    choices: [
      'A phishing attack tries to steal personal information, a spoofing attack tries to gain unauthorized access to a network',
      'A phishing attack uses email, a spoofing attack uses phone calls',
      'A phishing attack uses a fake website, a spoofing attack uses a fake email address',
      'None of the above'
    ],
    correct: 0,
  },
{
question: 'What is the name of the process of creating a fake identity to gain trust?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 2,
},
{
question: 'What is the name of the process of using scare tactics to trick someone into providing personal information?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 3,
},
{
question: 'What is the name of the process of tricking someone into providing personal information by pretending to be a trustworthy entity?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 0,
},
{
question: 'What is the name of the process of tricking someone into downloading malware or giving away personal information by using a fake software update?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 3,
},
{
question: 'What is the name of the process of tricking someone into providing personal information by using a fake sense of urgency?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 3,
},
{
question: 'What is the name of the process of tricking someone into providing personal information by using a fake sense of authority?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 3,
},
{
question: 'What is the name of the process of tricking someone into providing personal information by using a fake sense of scarcity?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 3,
},
{
question: 'What is the name of the process of tricking someone into providing personal information by using a fake sense of popularity?',
choices: [
  'Phishing',
  'Spear phishing',
  'Pretexting',
  'Scareware'
],
correct: 3,
},
];


  
  function PhishingQuiz() {
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
                Phishing Quiz
              </Typography>
              <Typography>
                There are total {questions?.length} questions
              </Typography>
              <br />
              <Typography variant="body1" className={classes.title}>
              Q.{currentQuestion+1}  {current.question}
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
      
      export default PhishingQuiz;
      
  
