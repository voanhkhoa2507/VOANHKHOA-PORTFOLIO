import type { ProjectContent } from "../../types";

export default {
  title: "Mein Erstes Projekt",
  theme: "dark", // or "light"
  tags: ["cisco", "routing", "security"],
  videoBorder: false,
  live: "https://your-project-link.com", // Optional link to live project
  description:
    "Dies ist ein Vorlagenprojekt.<br/><br/>Sie können Ihre Netzwerkarchitektur beschreiben, wie Sie die Router und Firewalls konfiguriert haben und welche Herausforderungen Sie bei der Implementierung gelöst haben.",
  components: [
    // Add images or videos here.
  ],
} as const satisfies ProjectContent;
