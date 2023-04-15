import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
}

export default App;
