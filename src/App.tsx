import React from 'react';
import Router from '@/router/Router';
import Store from '@/store';

const App:React.FC = () => {
  return (
    <Store>
      <Router />
    </Store>
  );
};

export default App;
