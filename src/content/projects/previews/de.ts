import type { ProjectPreview } from "../../types";
import networkThumb from "../../../assets/images/projects/network-automation/Mô hình cơ bản để test.png";
import enterpriseThumb from "../../../assets/images/projects/enterprise-network/Mô hình mạng.png";

export default [
  {
    title: "Network Automation Web App",
    slug: "network-automation",
    thumbnail: networkThumb,
    description: "Eine Web-App zur Verwaltung und Automatisierung von Netzwerken mit Streamlit und Netmiko.",
  },
  {
    title: "Enterprise Network Infrastruktur",
    slug: "enterprise-network",
    thumbnail: enterpriseThumb,
    description: "Drei-Schichten-Unternehmensnetzwerk-Infrastruktur-Design und Konfigurations-Lab.",
  },
] as const satisfies ProjectPreview[];
