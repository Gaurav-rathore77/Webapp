import React, { useState } from 'react';
import { Menu, X, Home, FolderKanban, User, MessageSquare, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import LOGOfile from "../assets/LOGOfile.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Theme toggle state
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, path: '/' },
    { name: 'Projects', icon: <FolderKanban size={20} />, path: '/projects' },
    { name: 'About', icon: <User size={20} />, path: '/about' },
    { name: 'Contact Us', icon: <MessageSquare size={20} />, path: '/contact' },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={LOGOfile}
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-gray-500"
          />
        </div>

        {/* Menu and Theme Toggle Buttons */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-gray-800 dark:text-gray-200" />
            )}
          </button>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu size={24} className="text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay for Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform 
          duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-4 text-gray-700 dark:text-gray-200 
                hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors 
                ${location.pathname === item.path ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
              onClick={toggleMenu}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
