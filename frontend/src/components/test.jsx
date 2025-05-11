import { useEffect, useState } from 'react';

function TestComponent() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test') // no need to include http://localhost:6500
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching:', err));
  }, []);

  return <div>Backend says: {message}</div>;
}

export default TestComponent;
