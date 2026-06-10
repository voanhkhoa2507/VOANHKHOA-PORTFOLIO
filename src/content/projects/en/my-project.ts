import type { ProjectContent } from "../../types";

export default {
  title: "My First Project",
  theme: "dark", // or "light"
  tags: ["cisco", "routing", "security"],
  videoBorder: false,
  live: "https://your-project-link.com", // Optional link to live project
  description:
    "This is a template project.<br/><br/>You can describe your network architecture, how you configured the routers, firewalls, and what challenges you solved during the implementation.",
  components: [
    // Add images or videos here.
    // Make sure to import the files at the top of the script using 'import image1 from "..."'
  ],
} as const satisfies ProjectContent;
