const ROLE_PERMISSIONS = {
	admin: {
	  canCreateTask: false,
	  canCreateTeam: true,
	  canDeleteTask: false,
	  canDeleteTeam: true,
	  canRemoveParticipant: true,
	},
	user: {
	  canCreateTask: false,
	  canCreateTeam: false,
	  canDeleteTask: false,
	  canDeleteTeam: false,
	  canRemoveParticipant: false,
	},
	teamLead: {
	  canCreateTask: false,
	  canCreateTeam: false,
	  canDeleteTask: false,
	  canDeleteTeam: false,
	  canRemoveParticipant: true,
	},
	moderator: {
	  canCreateTask: true,
	  canCreateTeam: false,
	  canDeleteTask: true,
	  canDeleteTeam: false,
	  canRemoveParticipant: false,
	},
	participant: {
	  canCreateTask: false,
	  canCreateTeam: false,
	  canDeleteTask: false,
	  canDeleteTeam: false,
	  canRemoveParticipant: false,
	},
  };
  
  export const canCreateTask = (role) => ROLE_PERMISSIONS[role]?.canCreateTask;
  export const canCreateTeam = (role) => ROLE_PERMISSIONS[role]?.canCreateTeam;
  export const canDeleteTask = (role) => ROLE_PERMISSIONS[role]?.canDeleteTask;
  export const canDeleteTeam = (role) => ROLE_PERMISSIONS[role]?.canDeleteTeam;
  export const canRemoveParticipant = (role) => ROLE_PERMISSIONS[role]?.canRemoveParticipant;
  