import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  result: {
    marginTop: theme.spacing(2),
  },
  weak: {
    color: 'red',
  },
  fair: {
    color: 'orange',
  },
  strong: {
    color: 'green',
  },
}));

function PasswordTester() {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const checkPasswordStrength = (password) => {
    if (password.length < 8) {
      return 'weak';
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
      return 'fair';
    }
    return 'strong';
  };

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(checkPasswordStrength(password));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handleChange}
        fullWidth
      />
      <Button type="submit" variant="outlined" color="primary" className={classes.button}>
        Check Strength
      </Button>
      {result && (
        <Typography variant="body1" className={`${classes.result} ${classes[result]}`}>
          Password strength: {result}
        </Typography>
      )}
    </form>
  );
}

export default PasswordTester;
