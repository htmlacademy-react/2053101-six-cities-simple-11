import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


const Setting = {
  RentCount: 553,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      rentCount={Setting.RentCount}
    />
  </React.StrictMode>,
);
