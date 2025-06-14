import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header.jsx';

function App() {
  const [part, setPart] = useState('');
  const words = ['Welcome to my website'];
  let i = 0;
  let offset = 0;
  let forwards = true;
  let skip_count = 0;
  const skip_delay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          skip_count++;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          if (i >= words.length) i = 0;
        }
      }

      const updated = words[i].substring(0, offset);
      setPart(updated);

      if (skip_count === 0) {
        forwards ? offset++ : offset--;
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div className="word">{part}</div>
      <div className="titleName">

        <h1 id="name">Daniel Ortega</h1>

        <h2 id="speciality">Software Engineer</h2>
      </div>
    </>
  );
}

export default App;
