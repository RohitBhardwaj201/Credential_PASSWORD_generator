import { useState, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789';
    }

    if (charAllowed) {
      str += '@#$%&*';
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(charIndex);
    }

    setPassword(newPassword);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className='custom-div'>
        <div className='custom-div1'>
          <input type="text" value={password} placeholder='password' readOnly />
          <button className='button' onClick={passwordGenerator}>Generate</button>
        </div>
        <div>
          <label>
            Password Length:
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
          </label>
        </div>
        <div className='label'>
          <label>
            Include Numbers:
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
          </label>
        </div>
        <div className='label'>
          <label>
            Include Special Characters:
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
