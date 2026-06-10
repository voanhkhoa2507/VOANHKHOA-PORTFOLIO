import type { ProjectPreview } from "../../types";
import networkThumb from "../../../assets/images/projects/network-automation/Mô hình cơ bản để test.png";
import enterpriseThumb from "../../../assets/images/projects/enterprise-network/Mô hình mạng.png";

export default [
  {
    title: "Network Automation Web App",
    slug: "network-automation",
    thumbnail: networkThumb,
    description: "A Network Automation Management Web App built using Streamlit and Netmiko.",
  },
  {
    title: "Enterprise Network Infrastructure",
    slug: "enterprise-network",
    thumbnail: enterpriseThumb,
    description: "Three-layer Enterprise Network Infrastructure Design and Configuration Lab.",
  },
] as const satisfies ProjectPreview[];
