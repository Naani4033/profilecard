import React from 'react';
import { createRoot } from 'react-dom/client';
import { UserCard } from './UserCard';
import './User.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<UserCard />);
} else {
  console.error('Root element not found');
}
