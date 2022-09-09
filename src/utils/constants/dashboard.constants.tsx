export const navLinks = Object.freeze([
  {
    header: {
      iconClassName: 'bi bi-person-circle',
      lbl: 'User',
    },
    body: {
      links: [
        {
          to: '/dashboard/users',
          lbl: 'List',
          iconClassName: 'bi bi-people-fill',
        },
        {
          to: '/dashboard/user',
          lbl: 'Create New User',
          iconClassName: 'bi bi-person-plus-fill',
        },
      ],
    },
  },
  {
    header: {
      iconClassName: 'bi bi-list-nested',
      lbl: 'Resources',
    },
    body: {
      links: [
        {
          to: '/dashboard/resources',
          lbl: 'List',
          iconClassName: 'bi bi-card-list',
        },
      ],
    },
  },
]);

export const config = Object.freeze({
  loggedInMsgRemovalDelay: 4000,
});
