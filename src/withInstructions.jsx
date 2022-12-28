import React, { useState, useEffect } from 'react';

const questions = [    {
    text: 'What is the primary purpose of a firewall?',
    choices: ['To protect against viruses and malware', 'To block unauthorized access to a network', 'To optimize network performance', 'To store data'],
    correctChoice: 1,
    tip: 'A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.'
  },
  {
    text: 'Which of the following is NOT a best practice for creating a strong password?',
    choices: ['Using a combination of letters, numbers, and special characters', 'Using a phrase or sentence as a password', 'Using the same password for multiple accounts', 'Changing your password regularly'],
    correctChoice: 2,
    tip: 'It is not a good idea to use the same password for multiple accounts, as this increases the risk of your accounts being compromised.'
  },
  {
    text: 'What is phishing?',
    choices: ['A type of malware that infects a computer through a USB drive', 'A technique used by hackers to obtain sensitive information by disguising themselves as a trustworthy entity', 'A technique used to improve the performance of a computer', 'A type of virus that is transmitted through email attachments'],
    correctChoice: 1,
    tip: 'Phishing is a common cyber attack in which hackers send fake emails or texts pretending to be from a legitimate company or organization, in an attempt to trick the recipient into revealing sensitive information such as passwords or credit card numbers.'
  },  {
    text: 'What is a man-in-the-middle (MITM) attack?',
    choices: ['A cyber attack in which a hacker intercepts communications between two parties in order to gain access to sensitive information', 'A type of malware that infects a computer through a USB drive', 'A technique used to secure a network by using two different encryption algorithms', 'A method of verifying a user\'s identity by requiring two pieces of information'],
    correctChoice: 0,
    tip: 'A man-in-the-middle (MITM) attack is a type of cyber attack in which a hacker intercepts and manipulates the communication between two parties in order to gain access to sensitive information. This can be done by compromising a network, device, or communication channel.'
  },
  {
    text: 'Which of the following is NOT a common type of malware?',
    choices: ['Virus', 'Worm', 'Trojan', 'Cookie'],
    correctChoice: 3,
    tip: 'Malware is a term used to describe software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system. A cookie is not a type of malware.'
  },
  {
    text: 'What is a virtual private network (VPN)?',
    choices: ['A network that uses encryption to secure online communication', 'A network of computers that share resources and information', 'A type of malware that infects a computer through a USB drive', 'A technique used to improve the performance of a computer'],
    correctChoice: 0,
    tip: 'A virtual private network (VPN) is a secure network that uses encryption to protect online communication. VPNs are often used to secure internet connections, protect privacy, and access restricted content.'
  },
  {
    text: 'What is a zero-day vulnerability?',
    choices: ['A security vulnerability that is unknown to the software manufacturer or vendor', 'A technique used by hackers to obtain sensitive information by disguising themselves as a trustworthy entity', 'A type of malware that infects a computer through a USB drive', 'A method of verifying a user\'s identity by requiring two pieces of information'],
    correctChoice: 0,
    tip: 'A zero-day vulnerability is a security vulnerability that is unknown to the software manufacturer or vendor, and has not yet been patched or fixed. Zero-day vulnerabilities can be exploited by hackers to gain unauthorized access to systems or data.'
  },
  {
    text: 'What is ransomware?',
    choices: ['A type of malware that encrypts a victim\'s files, making them inaccessible until a ransom is paid', 'A technique used by hackers to obtain sensitive information by disguising themselves as a trustworthy entity', 'A method of verifying a user\'s identity by requiring two pieces of information', 'A technique used to secure a network by using two different encryption algorithms'],
    correctChoice: 0,
    tip: 'Ransomware is a type of malware that encrypts a victim\'s files, making them inaccessible until a ransom is paid. Ransomware attacks can be particularly damaging for businesses, as they can disrupt operations and result in the loss of important data.'
  }, {
    text: 'What is a honeypot?',
    choices: ['A trap set up to detect and deflect cyber attacks', 'A technique used by hackers to obtain sensitive information by disguising themselves as a trustworthy entity', 'A type of malware that infects a computer through a USB drive', 'A method of verifying a user\'s identity by requiring two pieces of information'],
    correctChoice: 0,
    tip: 'A honeypot is a trap set up to detect and deflect cyber attacks. Honeypots can be used to attract and mislead hackers, allowing organizations to monitor and track their activities.'
  },
  {
    text: 'What is social engineering?',
    choices: ['The use of psychological manipulation to influence individuals or groups', 'A technique used to secure a network by using two different encryption algorithms', 'A type of malware that infects a computer through a USB drive', 'A method of verifying a user\'s identity by requiring two pieces of information'],
    correctChoice: 0,
    tip: 'Social engineering is the use of psychological manipulation to influence individuals or groups, often for the purpose of obtaining sensitive information or access to systems or data. Common techniques include phishing, pretexting, and baiting.'
  },
  {
    text: 'What is a security incident?',
    choices: ['A breach of security protocols or policies', 'A technique used to secure a network by using two different encryption algorithms', 'A type of malware that infects a computer through a USB drive', 'A method of verifying a user\'s identity by requiring two pieces of information'],
    correctChoice: 0,
    tip: 'A security incident is a breach of security protocols or policies, such as a cyber attack or data breach. It is important for organizations to have procedures in place for responding to security incidents in order to prevent cyber attacks'   } // Add additional questions here
];

const characters = [  { name: 'Hacker', avatar: 'hacker.png' },  { name: 'Security Expert', avatar: 'expert.png' },  { name: 'AI', avatar: 'ai.png' },]  // Add additional characters here];

export const Game = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [character, setCharacter] = useState(characters[0]);
  const [powerUp, setPowerUp] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(200);
  const [showInstructions, setShowInstructions] = useState(true);
  const [showHelp, setShowHelp] = useState(false);

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
      setError('Correct! +1 point');
    } else {
      if (powerUp === 'Shield') {
        setError('Incorrect, but your shield protected you');
        setPowerUp(null);
      } else {
        setError('Incorrect');
      }
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
    setShowInstructions(true);
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
      {showInstructions && (
        <div>
          <h2>Welcome to the Cyber Security Game!</h2>
          <p>In this game, you will be asked a series of questions about cyber security. Choose the correct answer for each question to earn points.</p>
          <p>You can also use power-ups to give you an advantage, and change characters to unlock special abilities.</p>
          <p>Are you ready to start?</p>
          <button onClick={() => setShowInstructions(false)}>Start Game</button>
        </div>
      )}
      {!showInstructions && (
        <div>
          <p>Time remaining: {timeRemaining} seconds</p>
          <p>Character: {character.name}</p>
          <img src={character.avatar} alt={character.name} />
          <button onClick={() => setShowHelp(!showHelp)}>
            {showHelp ? 'Hide Help' : 'Show Help'}
          </button>
          {showHelp && (
            <div>
              <h2>Help</h2>
              <p>Use the Activate Shield button to protect yourself from one incorrect answer. You can only use the shield once per game.</p>
              <p>Use the Change Character button to unlock special abilities. Each character has a unique ability that can help you during the game.</p>
              <p>Use the Reset Game button to start a new game at any time.</p>
            </div>
          )}
          <p>Question {currentQuestionIndex + 1}: {currentQuestion.text}</p>
          <ul>
            {currentQuestion.choices.map((choice, index) => (
              <li key={choice}>
                <button
                  disabled={submitting}
                  onClick={() => handleChoiceSelection(index)}
                >
                  {choice}
                </button>
                {answers[currentQuestionIndex] === index && (
                  <span>{currentQuestion.correctChoice === index ? '✅' : '❌'}</span>
                )}
              </li>
            ))}
          </ul>
          {currentQuestion.tip && (
            <p>
              <em>Tip: {currentQuestion.tip}</em>
            </p>
          )}
          <button disabled={submitting || answers[currentQuestionIndex] === undefined} onClick={handleSubmit}>
            {isLastQuestion ? 'Finish' : 'Next'}
          </button>
          {!isLastQuestion && (
            <button disabled={submitting || powerUp === 'Shield'} onClick={() => setPowerUp('Shield')}>
              Activate Shield
            </button>
          )}
          <button disabled={submitting} onClick={() => setCharacter(characters[Math.floor(Math.random() * characters.length)])}>
            Change Character
          </button>
          <button disabled={submitting} onClick={resetGame}>
            Reset Game
          </button>
        </div>
      )}
      {timeRemaining === 0 && (
        <div>
          <h2>Time's up!</h2>
          <p>Your final score is {score} points.</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};


