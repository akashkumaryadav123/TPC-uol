
import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-uol-blue mb-8">Upcoming Events</h2>
      <div className="space-y-6">
        {[
          { title: 'TCS Ninja Recruitment Drive', date: 'Oct 25, 2024', type: 'Recruitment' },
          { title: 'Resume Building Workshop', date: 'Nov 02, 2024', type: 'Training' },
          { title: 'Industry Connect: Google Cloud', date: 'Nov 15, 2024', type: 'Seminar' }
        ].map((ev, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-uol-gold flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-uol-blue uppercase tracking-widest px-2 py-0.5 bg-uol-blue/5 rounded mb-2 inline-block">
                {ev.type}
              </span>
              <h3 className="text-xl font-bold text-slate-800">{ev.title}</h3>
              <p className="text-slate-500 text-sm"><i className="far fa-calendar-alt mr-2"></i>{ev.date}</p>
            </div>
            <button className="px-6 py-2 bg-uol-blue text-white rounded-full font-bold text-sm">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
