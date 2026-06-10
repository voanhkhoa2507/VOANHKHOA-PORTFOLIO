import type { ProjectPreview } from "../../types";

const dummyThumbnail = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export default [
  {
    title: "Mein Erstes Projekt",
    slug: "my-project",
    thumbnail: dummyThumbnail,
    description: "Dies ist eine Vorlagenprojektbeschreibung.",
  },
] as const satisfies ProjectPreview[];
