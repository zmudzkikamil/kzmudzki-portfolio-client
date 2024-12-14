export const paths = {
  "about-me": {
    path: "/",
    getHref: () => "/",
  },
  "digital-cv": {
    path: "/cv",
    getHref: () => "/cv",
  },
  portfolio: {
    path: "/portfolio",
    getHref: () => "/portfolio",
  },
  project: {
    path: "/portfolio/:projectId",
    getHref: (id: string) => `/portfolio/${id}`,
  },
  contact: {
    path: "/contact",
    getHref: () => "/contact",
  },
} as const;
