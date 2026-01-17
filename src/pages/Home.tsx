
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-uol-blue">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/122/1600/900" 
            alt="University Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Empowering Careers, <br/>Building Futures
          </h2>
          <p className="text-lg md:text-xl mb-10 text-slate-200 leading-relaxed">
            Welcome to the Training and Placement Cell of University of Lucknow. We bridge the gap between academic brilliance and professional excellence.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link to="/records" className="w-full md:w-auto px-8 py-4 bg-uol-gold text-white rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
              View Placement Records
            </Link>
            <Link to="/about" className="w-full md:w-auto px-8 py-4 bg-white text-uol-blue rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
              Our Organizational Team
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-uol-blue mb-2">500+</h3>
            <p className="text-slate-600 uppercase tracking-wider text-sm">Recruiters</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-uol-blue mb-2">95%</h3>
            <p className="text-slate-600 uppercase tracking-wider text-sm">Placement Rate</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-uol-blue mb-2">25 LPA</h3>
            <p className="text-slate-600 uppercase tracking-wider text-sm">Highest Package</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-uol-blue mb-2">12k+</h3>
            <p className="text-slate-600 uppercase tracking-wider text-sm">Alumni Network</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-uol-blue flex items-center">
              <span className="w-12 h-1 bg-uol-gold mr-4"></span>
              Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              To provide a platform for our students to explore career opportunities and equip them with the necessary skills through rigorous training programs, workshops, and corporate exposure.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-check-circle text-uol-gold mt-1"></i>
                <span>Facilitate campus recruitment drives with top-tier MNCs.</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-check-circle text-uol-gold mt-1"></i>
                <span>Provide soft skill training and mock interview sessions.</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fas fa-check-circle text-uol-gold mt-1"></i>
                <span>Foster long-term relationships with industry leaders.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl rotate-1">
            <img src="https://picsum.photos/id/20/800/600" alt="Students" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
