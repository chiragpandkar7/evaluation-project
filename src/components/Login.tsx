import React from 'react';
import '../styles/Login.css';
import { threeLeggedOne } from '../apis/apsServices';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const handleLogin = () => {
    console.log('Login clicked');
    threeLeggedOne(); 
  };

  return (
    <div className="App">
      <Card>
        <button onClick={handleLogin}>Login</button>
      </Card>
    </div>
  );
};

export default App;
