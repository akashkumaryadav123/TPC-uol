
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import Records from './pages/Records';
import Events from './pages/Events';
import Brochure from './pages/Brochure';
import { AuthState, UserRole, Coordinator, ApprovalStatus } from './types';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    role: UserRole.GUEST,
    isAuthenticated: false
  });

  // Load coordinators from localStorage or use defaults
  const [coordinators, setCoordinators] = useState<Coordinator[]>(() => {
    const saved = localStorage.getItem('uol_tpc_coordinators');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('uol_tpc_coordinators', JSON.stringify(coordinators));
  }, [coordinators]);

  const handleLogin = (user: any, role: UserRole) => {
    setAuth({ user, role, isAuthenticated: true });
  };

  const handleLogout = () => {
    setAuth({ user: null, role: UserRole.GUEST, isAuthenticated: false });
  };

  const addCoordinator = (coord: Omit<Coordinator, 'id' | 'status'>) => {
    const newCoord: Coordinator = {
      ...coord,
      id: Math.random().toString(36).substr(2, 9),
      status: ApprovalStatus.PENDING
    };
    setCoordinators(prev => [...prev, newCoord]);
    return true;
  };

  const updateCoordinatorStatus = (id: string, status: ApprovalStatus) => {
    setCoordinators(prev => prev.map(c => c.id === id ? { ...c, status } : c));
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar auth={auth} onLogout={handleLogout} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/records" element={<Records />} />
            <Route path="/events" element={<Events />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route 
              path="/login" 
              element={auth.isAuthenticated ? <Navigate to={auth.role === UserRole.ADMIN ? "/admin" : "/"} /> : <Login onLogin={handleLogin} coordinators={coordinators} />} 
            />
            <Route path="/register" element={<Register onRegister={addCoordinator} />} />
            <Route 
              path="/admin" 
              element={
                auth.isAuthenticated && auth.role === UserRole.ADMIN ? 
                <AdminDashboard coordinators={coordinators} onUpdateStatus={updateCoordinatorStatus} /> : 
                <Navigate to="/login" />
              } 
            />
          </Routes>
        </main>
        
        <footer className="bg-uol-blue text-white py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="font-semibold text-lg mb-2">University of Lucknow</p>
            <p className="text-slate-300 text-sm">Training & Placement Cell © {new Date().getFullYear()}</p>
            <p className="text-slate-400 text-xs mt-4">Legacy of Excellence Since 1921</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
