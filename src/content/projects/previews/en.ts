import type { ProjectPreview } from "../../types";

const dummyThumbnail = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export default [
  {
    title: "My First Project",
    slug: "my-project",
    thumbnail: dummyThumbnail,
    description: "This is a template project description.",
  },
] as const satisfies ProjectPreview[];
