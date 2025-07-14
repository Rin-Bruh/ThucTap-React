import React, { useEffect } from 'react';

function MountNotice() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return <h2>MountNotice Component Rendered</h2>;
}

export default MountNotice;
