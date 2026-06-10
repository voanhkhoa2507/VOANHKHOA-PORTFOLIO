import type { ProjectContent } from "../../types";
import img1 from "../../../assets/images/projects/enterprise-network/Mô hình mạng.png";

export default {
  title: "Three-layer Enterprise Network Infrastructure",
  theme: "dark",
  tags: ["cisco", "routing", "switching", "infrastructure design"],
  videoBorder: false,
  description:
    "Three-layer Enterprise Network Infrastructure Design and Configuration Lab.<br/><br/>" +
    "<ul>" +
    "<li>Built a simulated enterprise network model in GNS3 using Cisco routers, core switches, access switches, servers, and end-user devices.</li>" +
    "<li>Integrated real Internet connectivity to simulate an ISP environment and test end-to-end network access.</li>" +
    "<li>Configured VLAN, trunking, inter-VLAN routing, STP, EtherChannel, OSPF, DHCP, NAT, ACLs, HSRP.</li>" +
    "<li>Implemented Layer 2 security features such as Port Security and DHCP Snooping to prevent unauthorized access and common LAN attacks.</li>" +
    "<li>Configured GRE over IPsec VPN to simulate secure communication between branch networks.</li>" +
    "<li>Troubleshot connectivity and routing issues using ping, traceroute, and show commands.</li>" +
    "</ul>",
  components: [
    { type: "media", props: { type: "image", src: img1 } },
  ],
} as const satisfies ProjectContent;
