import React, { useEffect } from 'react';

function WelcomeMessage() {
  useEffect(() => {
    alert('Welcome to the app!');
  }, []);

  return <h2>Welcome Component Rendered</h2>;
}

export default WelcomeMessage;
