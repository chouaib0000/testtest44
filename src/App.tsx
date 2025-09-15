import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import InsuranceDetailPage from './pages/InsuranceDetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import Chatbot from './components/Chatbot';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (success: boolean) => {
    setIsAuthenticated(success);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Toaster position="top-center" />
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assurance/:type" element={<InsuranceDetailPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminPage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;