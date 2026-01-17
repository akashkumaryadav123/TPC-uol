
import React from 'react';
import { ORG_STRUCTURE } from '../constants';

const MemberCard: React.FC<{ name: string; role: string; team?: string; isLead?: boolean }> = ({ name, role, team, isLead }) => (
  <div className={`bg-white rounded-xl p-4 shadow-sm border-l-4 transition-all hover:shadow-md ${isLead ? 'border-uol-gold scale-105' : 'border-slate-300'}`}>
    <h4 className="font-bold text-slate-800">{name}</h4>
    <p className="text-xs font-semibold text-uol-blue uppercase mt-1">{role}</p>
    {team && <p className="text-[10px] text-slate-500 mt-0.5">{team}</p>}
  </div>
);

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-uol-blue mb-4">Organizational Structure</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">The backbone of our placement success is our dedicated team of faculty and student coordinators.</p>
      </div>

      <div className="space-y-12">
        {/* Top Management */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm mb-8">
             <MemberCard name={ORG_STRUCTURE.head.name} role={ORG_STRUCTURE.head.role} team={ORG_STRUCTURE.head.team} isLead={true} />
          </div>
          <div className="w-px h-8 bg-slate-300"></div>
          <div className="w-full max-w-sm">
             <MemberCard name={ORG_STRUCTURE.coHead.name} role={ORG_STRUCTURE.coHead.role} team={ORG_STRUCTURE.coHead.team} />
          </div>
        </div>

        {/* Tree Connection Line */}
        <div className="flex justify-center">
           <div className="w-px h-12 bg-slate-300"></div>
        </div>

        {/* Teams Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-start relative">
          {/* Horizontal line simulation for desktop */}
          <div className="hidden xl:block absolute top-0 left-1/10 right-1/10 h-px bg-slate-300 -mt-6"></div>
          
          {ORG_STRUCTURE.teams.map((team, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-6">
              <div className="bg-uol-blue text-white py-2 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-center w-full shadow-lg">
                {team.name}
              </div>
              
              <div className="w-full space-y-4">
                <div className="relative">
                  <MemberCard name={team.lead} role="Team Lead" isLead={true} />
                  <div className="flex justify-center mt-2"><div className="w-px h-4 bg-slate-200"></div></div>
                  <MemberCard name={team.coLead} role="Team Co-Lead" />
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 text-center">Team Members</p>
                  <div className="grid gap-2">
                    {team.members.map((member, midx) => (
                      <div key={midx} className="bg-slate-50 rounded-lg p-2 text-center text-xs text-slate-700 border border-slate-100">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-uol-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-users text-uol-blue"></i>
          </div>
          <h3 className="font-bold text-xl mb-2">Collaboration</h3>
          <p className="text-slate-500 text-sm">We believe in cross-team synergy to achieve larger goals for the university.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-uol-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-rocket text-uol-blue"></i>
          </div>
          <h3 className="font-bold text-xl mb-2">Innovation</h3>
          <p className="text-slate-500 text-sm">Constant improvement in training methodologies and corporate engagement.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-uol-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-handshake text-uol-blue"></i>
          </div>
          <h3 className="font-bold text-xl mb-2">Trust</h3>
          <p className="text-slate-500 text-sm">A legacy of reliability for both students and industry partners.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
