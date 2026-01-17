
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserRole, Coordinator, ApprovalStatus } from '../types';

interface LoginProps {
  onLogin: (user: any, role: UserRole) => void;
  coordinators: Coordinator[];
}

const Login: React.FC<LoginProps> = ({ onLogin, coordinators }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.COORDINATOR);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (role === UserRole.ADMIN) {
      // Mock Admin Auth
      if (email === 'admin@uol.ac.in' && password === 'admin123') {
        onLogin({ email: 'admin@uol.ac.in', role: UserRole.ADMIN }, UserRole.ADMIN);
        navigate('/admin');
      } else {
        setError('Invalid Admin credentials.');
      }
    } else {
      // Coordinator Auth
      const user = coordinators.find(c => c.email === email);
      if (user) {
        if (user.status === ApprovalStatus.APPROVED) {
          // In a real app we'd check password too
          onLogin(user, UserRole.COORDINATOR);
          navigate('/');
        } else if (user.status === ApprovalStatus.PENDING) {
          setError('Your account is pending approval by the TPC Head.');
        } else {
          setError('Your registration request was rejected.');
        }
      } else {
        setError('No coordinator found with this email.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-uol-blue p-8 text-center text-white">
          <i className="fas fa-lock text-3xl mb-4 text-uol-gold"></i>
          <h2 className="text-2xl font-bold">Portal Login</h2>
          <p className="text-slate-300 text-sm mt-2">Access the TPC Dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 flex items-center">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Login Role</label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
              <button 
                type="button"
                onClick={() => setRole(UserRole.COORDINATOR)}
                className={`py-2 text-xs font-bold rounded-md transition-all ${role === UserRole.COORDINATOR ? 'bg-white shadow text-uol-blue' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Coordinator
              </button>
              <button 
                type="button"
                onClick={() => setRole(UserRole.ADMIN)}
                className={`py-2 text-xs font-bold rounded-md transition-all ${role === UserRole.ADMIN ? 'bg-white shadow text-uol-blue' : 'text-slate-500 hover:text-slate-700'}`}
              >
                TPC Head (Admin)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <div className="relative">
              <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="email" 
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue focus:ring-1 focus:ring-uol-blue outline-none transition-all"
                placeholder="university@uol.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <div className="relative">
              <i className="fas fa-key absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="password" 
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue focus:ring-1 focus:ring-uol-blue outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {role === UserRole.ADMIN && (
               <p className="mt-2 text-[10px] text-slate-400">Hint: admin@uol.ac.in / admin123</p>
            )}
          </div>

          <button 
            type="submit"
            className="w-full bg-uol-blue text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-uol-blue/20"
          >
            Sign In
          </button>

          <div className="text-center pt-4">
            <p className="text-sm text-slate-500">
              New Coordinator? {' '}
              <Link to="/register" className="text-uol-blue font-bold hover:underline">Register Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
