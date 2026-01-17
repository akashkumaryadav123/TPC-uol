
import React from 'react';
import { Coordinator, ApprovalStatus } from '../types';

interface AdminDashboardProps {
  coordinators: Coordinator[];
  onUpdateStatus: (id: string, status: ApprovalStatus) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ coordinators, onUpdateStatus }) => {
  const pending = coordinators.filter(c => c.status === ApprovalStatus.PENDING);
  const others = coordinators.filter(c => c.status !== ApprovalStatus.PENDING);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h2 className="text-3xl font-bold text-uol-blue">TPC Head Dashboard</h2>
          <p className="text-slate-600">Review and manage student coordinator applications.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100 text-center">
            <p className="text-2xl font-bold text-uol-blue">{pending.length}</p>
            <p className="text-xs text-slate-400 uppercase font-bold">Pending</p>
          </div>
          <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-100 text-center">
            <p className="text-2xl font-bold text-green-600">{coordinators.filter(c => c.status === ApprovalStatus.APPROVED).length}</p>
            <p className="text-xs text-slate-400 uppercase font-bold">Approved</p>
          </div>
        </div>
      </header>

      {/* Pending Requests Table */}
      <section className="mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-3 h-3 bg-uol-gold rounded-full mr-3"></span>
          Pending Approvals
        </h3>
        
        {pending.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-400">No pending coordinator requests at this moment.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Coordinator</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Roll No & Branch</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Team Selection</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pending.map(c => (
                    <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-bold text-slate-800">{c.fullName}</p>
                        <p className="text-xs text-slate-500">{c.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-700">{c.rollNumber}</p>
                        <p className="text-xs text-slate-500">{c.branch} ({c.year} Year)</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-uol-blue/10 text-uol-blue text-[10px] font-bold rounded-full uppercase">
                          {c.team}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button 
                          onClick={() => onUpdateStatus(c.id, ApprovalStatus.APPROVED)}
                          className="px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-lg hover:bg-green-600 transition-colors"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => onUpdateStatus(c.id, ApprovalStatus.REJECTED)}
                          className="px-4 py-2 border border-red-500 text-red-500 text-xs font-bold rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* History Table */}
      <section>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
          <span className="w-3 h-3 bg-slate-300 rounded-full mr-3"></span>
          Recent History
        </h3>
        
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Roll No</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {others.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-slate-400 text-sm">No history available yet.</td>
                  </tr>
                ) : (
                  others.map(c => (
                    <tr key={c.id}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">{c.fullName}</td>
                      <td className="px-6 py-4 text-sm text-slate-500">{c.rollNumber}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                          c.status === ApprovalStatus.APPROVED ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {c.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-500">{c.team}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
