
import React from 'react';

const Brochure: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 animate-fadeIn text-center">
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100">
        <div className="w-24 h-24 bg-uol-gold/10 text-uol-gold rounded-full flex items-center justify-center mx-auto mb-8">
          <i className="fas fa-file-pdf text-4xl"></i>
        </div>
        <h2 className="text-3xl font-bold text-uol-blue mb-4">Placement Brochure 2024-25</h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Get detailed insights into our university's academic curriculum, department-wise talent pool, and our commitment to industry readiness.
        </p>
        <button className="w-full py-4 bg-uol-blue text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center">
          <i className="fas fa-download mr-3"></i>
          Download PDF (12.4 MB)
        </button>
        <p className="mt-6 text-xs text-slate-400 italic">Last updated: Sept 2024</p>
      </div>
    </div>
  );
};

export default Brochure;
