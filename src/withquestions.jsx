import React, { useState } from 'react';

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
    {
      question: 'Which of the following is a type of cybersecurity threat?',
      answers: [
        'Phishing',
        'Water damage',
        'Vandalism',
        'Heat stroke',
      ],
      correctAnswer: 0,
    },
    // Add more questions here
    {
      question: 'Which of the following is a type of malware?',
      answers: [
        'Virus',
        'Trojan',
        'Worm',
        'All of the above',
      ],
      correctAnswer: 3,
    },
    {
      question: 'What is two-factor authentication?',
      answers: [
        'A security measure that requires you to enter a code sent to your phone to access your account',
        'A security measure that requires you to enter a code sent to your email to access your account',
        'A security measure that requires you to enter a code sent to your home phone to access your account',
        'A security measure that requires you to enter a code sent to your work phone to access your account',
      ],
      correctAnswer: 0,
    },
    {
      question: 'What is a firewall?',
      answers: [
        'A software program that protects a computer or network from unauthorized access',
        'A device that connects a computer or network to the internet',
        'A software program that blocks pop-up advertisements',
        'A device that amplifies the signal strength of a wireless network',
      ],
      correctAnswer: 0,
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function handleAnswer(answerIndex) {
    if (answerIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      setGameOver(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  return (
    <div>
      {gameOver ? (
        <div>
          <div>Game Over!</div>
          <div>Your score: {score}</div>
        </div>
      ) : (
        <div>
          <div>Question {currentQuestionIndex + 1} of {questions.length}</div>
          <div>{questions[currentQuestionIndex].question}</div>
          {questions[currentQuestionIndex].answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswer(index)}>
              {answer}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CybersecurityGame;
