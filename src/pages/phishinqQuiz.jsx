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
      
      export default PhishingQuiz;
      
  
