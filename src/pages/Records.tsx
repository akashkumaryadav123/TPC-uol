
import React from 'react';

const Records: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-uol-blue mb-8">Placement Records (2023-24)</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1,2,3,4].map(i => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="w-16 h-16 bg-slate-100 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold text-uol-blue">
               LOGO
            </div>
            <h3 className="font-bold text-lg mb-1">Fortune {i}00 Co.</h3>
            <p className="text-slate-500 text-sm mb-4">Software Developer Role</p>
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-uol-blue">
              <span>Selected: {i * 12}</span>
              <span className="text-uol-gold">CTC: {i + 5} LPA</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-uol-blue text-white p-12 rounded-3xl text-center">
        <h3 className="text-2xl font-bold mb-4">Detailed Analytics Coming Soon</h3>
        <p className="text-slate-300 max-w-xl mx-auto">We are compiling the latest data to provide a comprehensive view of this year's placement success stories.</p>
      </div>
    </div>
  );
};

export default Records;
