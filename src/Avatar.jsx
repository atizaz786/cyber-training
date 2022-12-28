import React, { useState } from 'react';

const questions = [  {    text: 'What is the primary purpose of a firewall?',    choices: ['To protect against viruses and malware', 'To block unauthorized access to a network', 'To optimize network performance', 'To store data'],
    correctChoice: 1
  },
  {
    text: 'Which of the following is NOT a best practice for creating a strong password?',
    choices: ['Using a combination of letters, numbers, and special characters', 'Using a phrase or sentence as a password', 'Using the same password for multiple accounts', 'Changing your password regularly'],
    correctChoice: 2
  },
  // Add additional questions here
];

const characters = [  { name: 'Hacker', avatar: 'hacker.png' },  { name: 'Security Expert', avatar: 'expert.png' },  { name: 'AI', avatar: 'ai.png' },  // Add additional characters here];

export const Game = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [character, setCharacter] = useState(characters[0]);
  const [powerUp, setPowerUp] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(30);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleChoiceSelection = (choiceIndex) => {
    setAnswers([...answers, choiceIndex]);
  };

  const handleSubmit = () => {
    if (submitting) {
      return;
    }

    setError('');
    setSubmitting(true);

    if (answers[currentQuestionIndex] === currentQuestion.correctChoice) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setSubmitting(false);
      if (isLastQuestion) {
        resetGame();
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 1000);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setPowerUp(null);
    setTimeRemaining(30);
  };

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  return (
    <div>
      <p>{error}</p>
      <p>Time remaining: {timeRemaining} seconds</p>
      <p>Character: {character.name}</p>
     
      <img src={character.avatar} alt={character.name} />
      {powerUp && <p>Power-up: {powerUp}</p>}
      <p>Question {currentQuestionIndex + 1} of {questions.length}:</p>
      <p>{currentQuestion.text}</p>
      {currentQuestion.choices.map((choice, index) => (
        <button key={choice} onClick={() => handleChoiceSelection(index)} disabled={submitting}>
          {choice}
        </button>
      ))}
      <button onClick={handleSubmit} disabled={submitting || !answers[currentQuestionIndex]}>
        {isLastQuestion ? 'Finish' : 'Next'}
      </button>
      <p>Score: {score}</p>
      <button onClick={() => setPowerUp('Shield')} disabled={powerUp || submitting}>
        Activate Shield
      </button>
      <button onClick={() => setCharacter(characters[1])} disabled={submitting}>
        Change Character
      </button>
      <button onClick={resetGame} disabled={submitting}>
        Reset Game
      </button>
    </div>
  );
};
