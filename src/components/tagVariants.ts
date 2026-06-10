export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "cisco"
  | "routing"
  | "security"
  | "firewall"
  | "aws"
  | "switching"
  | "infrastructure design"
  | "python"
  | "streamlit"
  | "netmiko"
  | "network automation";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  cisco: "Cisco",
  routing: "Routing",
  security: "Security",
  firewall: "Firewall",
  aws: "AWS",
  switching: "Switching",
  "infrastructure design": "Infrastructure Design",
  python: "Python",
  streamlit: "Streamlit",
  netmiko: "Netmiko",
  "network automation": "Network Automation",
} as const satisfies Record<TagVariant, string>;
