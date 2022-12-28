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
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60); // Add a timer with a starting value of 60 seconds
  const [currentLevel, setCurrentLevel] = useState(1); // Add a current level with a starting value of 1
  const [badges, setBadges] = useState([]); // Add an array to store badges earned by the player

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

  function handleAnswer(answerIndex) {
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
      // Add badges and level up when the player answers a certain number of questions correctly
      if (score % 3 === 0 && currentLevel < 3) {
        setBadges([...badges, 'Bronze']);
        setCurrentLevel
        (currentLevel + 1);
    } else if (score % 5 === 0 && currentLevel < 5) {
      setBadges([...badges, 'Silver']);
      setCurrentLevel(currentLevel + 1);
    } else if (score % 10 === 0 && currentLevel < 10) {
      setBadges([...badges, 'Gold']);
      setCurrentLevel(currentLevel + 1);
    }
  }
  // Go to the next question
  setCurrentQuestionIndex(currentQuestionIndex + 1);
}

if (gameOver) {
  return (
    <div className="game-over" style={{ backgroundImage: 'url(./cybersecurity-bg.jpg)', color: 'white' }}>
      <h1>Game Over</h1>
      <p>Your final score is {score}</p>
      <p>You reached level {currentLevel} and earned the following badges: {badges.join(', ')}</p>
      <button onClick={() => window.location.reload()} style={{ backgroundColor: 'black', color: 'white' }}>Play again</button>
    </div>
  );
} else if (currentQuestionIndex === questions.length) {
  return (
    <div className="game-over" style={{ backgroundImage: 'url(./cybersecurity-bg.jpg)', color: 'white' }}>
      <h1>Congratulations, you won!</h1>
      <p>Your final score is {score}</p>
      <p>You reached level {currentLevel} and earned the following badges: {badges.join(', ')}</p>
      <button onClick={() => window.location.reload()} style={{ backgroundColor: 'black', color: 'white' }}>Play again</button>
    </div>
  );
} else {
  return (
    <div className="game" style={{ backgroundImage: 'url(./cybersecurity-bg.jpg)', color: 'white' }}>
      <p className="time-remaining">Time remaining: {timeRemaining}</p>
      <p className="question">{questions[currentQuestionIndex].question}</p>
      {questions[currentQuestionIndex].answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswer(index)} style={{ backgroundColor: 'black', color: 'white' }}>
          {answer
          }
          </button>
        ))}
      </div>
    );
  }
}

export default CybersecurityGame;
