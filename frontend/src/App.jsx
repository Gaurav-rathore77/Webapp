import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
          <ThemeToggle />
          <Navbar />
          <main className="">
            <AppRoutes />
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;