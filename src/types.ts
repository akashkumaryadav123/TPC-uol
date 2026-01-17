
export enum UserRole {
  ADMIN = 'ADMIN',
  COORDINATOR = 'COORDINATOR',
  GUEST = 'GUEST'
}

export enum ApprovalStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum TeamName {
  NETWORKING = 'Networking & Outreach Team',
  CONTENT = 'Content & Media Team',
  EVENT = 'Event & Hospitality Team',
  CORPORATE = 'Corporate Connect Team',
  SKILL_DEV = 'Skill Development Team'
}

export interface Coordinator {
  id: string;
  fullName: string;
  email: string;
  rollNumber: string;
  branch: string;
  year: string;
  team: TeamName;
  status: ApprovalStatus;
  password?: string;
}

export interface AuthState {
  user: Coordinator | { email: string; role: UserRole.ADMIN } | null;
  role: UserRole;
  isAuthenticated: boolean;
}
