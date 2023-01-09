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
    background: 'rgb(36,36,113)',
      background: 'linear-gradient(243deg, rgba(36,36,113,1) 13%, rgba(0,0,0,1) 43%, rgba(5,0,83,1) 79%)',
      color:"#fff"
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

const questions = [  {    question: 'What is social engineering?',    choices: [      'The use of computers and technology to manipulate people',      'The use of psychological techniques to manipulate people',      'The use of physical force to manipulate people',      'All of the above',    ],
    correct: 1,
  },
  {
    question: 'What are some common tactics used in social engineering attacks?',
    choices: [
      'Impersonation',
      'Pretexting',
      'Scareware',
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
];

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
          <Typography variant="body1" className={classes.title}>
            {current.question}
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
  
  
