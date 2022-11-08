export const appLinks = {
  home: {
    name: "Home",
    link: "/",
  },
  jobDetails: {
    name: "Job Details",
    link: "/job/:id",
    asLink: (id: string): string => `/job/${id}`,
  },
};
