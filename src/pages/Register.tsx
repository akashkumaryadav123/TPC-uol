
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TEAMS } from '../constants';
import { TeamName, Coordinator } from '../types';

interface RegisterProps {
  onRegister: (coord: Omit<Coordinator, 'id' | 'status'>) => boolean;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    rollNumber: '',
    branch: '',
    year: '1st',
    team: TEAMS[0] as TeamName
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onRegister(formData);
    if (success) {
      setSubmitted(true);
      setTimeout(() => navigate('/login'), 3000);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto mt-24 px-4 text-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-check text-4xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Registration Submitted!</h2>
          <p className="text-slate-600">Your account request has been sent to the TPC Head for approval. You will be able to log in once approved.</p>
          <p className="text-slate-400 text-xs mt-8">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-uol-blue p-8 text-white">
          <h2 className="text-2xl font-bold">Coordinator Registration</h2>
          <p className="text-slate-300 text-sm">Join the University of Lucknow TPC Team</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
            <input 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue outline-none"
              placeholder="Ex: Amit Trivedi"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">University Email ID</label>
            <input 
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue outline-none"
              placeholder="amit@uol.ac.in"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">University Roll Number</label>
            <input 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue outline-none"
              placeholder="210012010XXX"
              value={formData.rollNumber}
              onChange={(e) => setFormData({...formData, rollNumber: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Branch</label>
            <input 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue outline-none"
              placeholder="Computer Science"
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
            <select 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue outline-none bg-white"
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
            >
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-2">Team Selection</label>
            <select 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-uol-blue outline-none bg-white"
              value={formData.team}
              onChange={(e) => setFormData({...formData, team: e.target.value as TeamName})}
            >
              {TEAMS.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2 pt-6">
            <button 
              type="submit"
              className="w-full bg-uol-gold text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all"
            >
              Register & Request Approval
            </button>
            <p className="text-center text-sm text-slate-500 mt-4">
              Already have an account? {' '}
              <Link to="/login" className="text-uol-blue font-bold">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
