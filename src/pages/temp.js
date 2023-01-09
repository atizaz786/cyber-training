

function Introduction() {
  return (
    <div>
      <h1>Introduction to Cybersecurity</h1>
      <p>Welcome to the Kale University cybersecurity awareness training! In this training, we will discuss the importance of protecting yourself and your personal information online, and provide tips and resources for staying safe online.</p>
      <h2>Types of online threats</h2>
      <ul>
        <li>Viruses</li>
        <li>Phishing attacks</li>
        <li>Malware</li>
      </ul>
    </div>
  );
}

function PasswordSecurity() {
  return (
    <div>
      <h1>Password Security</h1>
      <p>Strong, unique passwords are an important part of protecting your accounts and personal information online. Here are some tips for creating and storing secure passwords:</p>
      <ul>
        <li>Use a mix of letters, numbers, and special characters</li>
        <li>Avoid using personal information such as your name or address</li>
        <li>Use a different password for each of your accounts</li>
        <li>Consider using a password manager to generate and store secure passwords</li>
        <li>Enable two-factor authentication for added security</li>
      </ul>
      <p>Try out the password strength tester below to see how strong your current password is:</p>
      <PasswordTester />
    </div>
  );
}

function EmailAndPhishingAttacks() {
  return (
    <div>
      <h1>Email and Phishing Attacks</h1>
      <p>Phishing attacks are a common tactic used by attackers to trick users into revealing their passwords or other sensitive information. Be on the lookout for these red flags:</p>
      <ul>
        <li>Unfamiliar sender or unexpected email</li>
        <li>Urgent or threatening language</li>
        <li>Links to unfamiliar or untrusted websites</li>
        <li>Requests for personal information</li>
      </ul>
      <p>Try your hand at identifying phishing attacks in the quiz below:</p>
      <PhishingQuiz />
    </div>
  );
}

function SafeBrowsing() {
  return (
    <div>
      <h1>Safe Browsing</h1>
      <p>To stay safe online, it's important to only visit trusted websites and avoid downloading content from untrusted sources. Here are some tips to follow:</p>
      <ul>
        <li>Verify the authenticity of websites before entering personal information or making purchases</li>
        <li>Be wary of links in emails or social media messages from unfamiliar sources</li>
        <li>Only download software or files from trusted sources</li>
      </ul>
    </div>
  );
}

function SocialEngineering() {
    return (
      <div>
        <h1>Social Engineering</h1>
        <p>Attackers can use social engineering tactics, such as impersonation and manipulation, to trick users into revealing sensitive information or performing actions that may compromise the security of the system. Be on the lookout for these tactics and remember to verify the identity of anyone requesting sensitive information or access to systems.</p>
        <p>Test your knowledge of social engineering in the quiz below:</p>
        <SocialEngineeringQuiz />
      </div>
    );
  }
  
  function MobileSecurity() {
    return (
      <div>
        <h1>Mobile Security</h1>
        <p>If you access the Kale University system from a mobile device, it's important to take steps to secure your device and protect your personal information. Follow these best practices:</p>
        <ul>
          <li>Use strong, unique passwords for your device and accounts</li>
          <li>Keep your software and apps up to date with the latest security patches</li>
          <li>Avoid connecting to public Wi-Fi networks when accessing sensitive information</li>
        </ul>
      </div>
    );
  }
  
  function RecapAndNextSteps() {
    return (
      <div>
        <h1>Recap and Next Steps</h1>
        <h2>Key Points</h2>
        <ul>
          <li>Use strong, unique passwords and enable two-factor authentication</li>
          <li>Be aware of phishing attacks and verify the identity of anyone requesting sensitive information</li>
          <li>Only visit trusted websites and download content from reputable sources</li>
          <li>Be aware of social engineering tactics and verify the identity of anyone requesting access to systems</li>
          <li>Secure your mobile devices with strong passwords and avoid public Wi-Fi networks</li>
        </ul>
        <h2>Resources</h2>
        <p>For more information and guidance on cybersecurity, check out the following resources:</p>
        <ul>
          <li>Kale University Cybersecurity Best Practices Guide</li>
          <li>Kale University Security Team: security@kale.edu</li>
        </ul>
      </div>
    );
  }
  

  

