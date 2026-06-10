export const social = [
  { url: "mailto:anhkhoa250725@gmail.com", name: "mail" },
  { url: "https://github.com/anhkhoa2507", name: "github" },
  { url: "https://www.linkedin.com/in/anh-khoa-vo-807296336/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "linkedin" }[];
