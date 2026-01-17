
import React from 'react';
import { TeamName } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '#/' },
  { label: 'About', path: '#/about' },
  { label: 'Placement Records', path: '#/records' },
  { label: 'Brochure', path: '#/brochure' },
  { label: 'Events', path: '#/events' },
];

export const TEAMS = Object.values(TeamName);

export const ORG_STRUCTURE = {
  head: { name: 'Dr. Vivek Kumar', role: 'TPC Head', team: 'Administration' },
  coHead: { name: 'Dr. Anita Singh', role: 'TPC Co-Head', team: 'Administration' },
  teams: [
    {
      name: TeamName.NETWORKING,
      lead: 'Rahul Sharma',
      coLead: 'Sneha Gupta',
      members: ['Aryan Dev', 'Isha Khan', 'Kabir Singh']
    },
    {
      name: TeamName.CONTENT,
      lead: 'Priya Verma',
      coLead: 'Aditya Raj',
      members: ['Sanya Mir', 'Rohan Das']
    },
    {
      name: TeamName.CORPORATE,
      lead: 'Vikram Sethi',
      coLead: 'Megha Jain',
      members: ['Tanmay Roy', 'Ishani Vyas', 'Arjun Malhotra']
    },
    {
      name: TeamName.EVENT,
      lead: 'Zaid Ahmed',
      coLead: 'Ria Kapoor',
      members: ['Siddharth Rao', 'Ananya Pal']
    },
    {
      name: TeamName.SKILL_DEV,
      lead: 'Karan Mehra',
      coLead: 'Divya Joshi',
      members: ['Samarth Goyal', 'Nikita Singh']
    }
  ]
};
