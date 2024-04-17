import React, { useState } from 'react';
import '../Styles/login.css'; // Importing the CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic for handling the login data
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login"><h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;