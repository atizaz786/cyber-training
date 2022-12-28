import React, { useState, useEffect } from 'react';
import './App.css';

function CybersecurityGame() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([
    {
      question: 'What is the best way to protect your password?',
      answers: [
        'Using the same password for all your accounts',
        'Sharing your password with a trusted friend',
        'Using a strong, unique password',
        'Writing your password down and keeping it in a public place',
      ],
      correctAnswer: 2,
      tip: 'Using a strong, unique password is the best way to protect your password. Avoid using the same password for all your accounts and never share your password with anyone.',
    },
    {
      question: 'Which of the following is not a good practice for staying safe online?',
      answers: [
        'Keeping your software and devices up to date',
        'Clicking links from unknown sources',
        'Using a reputable antivirus software',
        'Sharing your personal information with strangers',
      ],
      correctAnswer: 1,
      tip: 'Clicking links from unknown sources is not a good practice for staying safe online. It is important to be cautious and verify the authenticity of links before clicking on them.',
    },
    {
      question: 'What is phishing?',
      answers: [
        'A type of malware that infects computers',
        'A technique used by hackers to gain access to a computer system',
        'A scam that involves tricking people into revealing personal information',
        'A method of encrypting data to protect it from unauthorized access',
      ],
      correctAnswer: 2,
      tip: 'Phishing is a scam that involves tricking people into revealing personal information such as passwords, credit card numbers, or other sensitive data. Be suspicious of emails or messages that ask for personal information, and verify the authenticity of the sender before responding.',
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60); // Add a timer with a starting value of 60 seconds
  const [currentLevel, setCurrentLevel] = useState(1); // Add a current level with a starting value of 1
  const [badges, setBadges] = useState([]); // Add an array to store badges earned by the player
  const [tips, setTips] = useState([]); // Add an array to store tips displayed to the player

  useEffect(() => {
    // Decrement the time remaining every second
    const timerId = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);
    // Clear the interval when the component unmounts
    return () => clearInterval(timerId);
  }, [timeRemaining]);

  useEffect(() => {
    // End the game when time runs out
    if (timeRemaining === 0) {
      setGameOver(true);
    }
  }, [timeRemaining]);

 
