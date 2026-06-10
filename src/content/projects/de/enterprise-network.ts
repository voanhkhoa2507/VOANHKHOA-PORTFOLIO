import type { ProjectContent } from "../../types";
import img1 from "../../../assets/images/projects/enterprise-network/Mô hình mạng.png";

export default {
  title: "Three-layer Enterprise Network Infrastructure",
  theme: "dark",
  tags: ["cisco", "routing", "switching", "infrastructure design"],
  videoBorder: false,
  description:
    "Drei-Schichten-Unternehmensnetzwerk-Infrastruktur-Design und Konfigurations-Lab.<br/><br/>" +
    "<ul>" +
    "<li>Aufbau eines simulierten Unternehmensnetzwerkmodells in GNS3 mit Cisco-Routern, Core-Switches, Access-Switches, Servern und Endbenutzergeräten.</li>" +
    "<li>Integration realer Internetverbindungen zur Simulation einer ISP-Umgebung und zum Testen des End-to-End-Netzwerkzugriffs.</li>" +
    "<li>Konfiguration von VLAN, Trunking, Inter-VLAN-Routing, STP, EtherChannel, OSPF, DHCP, NAT, ACLs, HSRP.</li>" +
    "<li>Implementierung von Layer-2-Sicherheitsfunktionen wie Port Security und DHCP Snooping, um unbefugten Zugriff und häufige LAN-Angriffe zu verhindern.</li>" +
    "<li>Konfiguration von GRE über IPsec-VPN zur Simulation einer sicheren Kommunikation zwischen Zweigstellennetzwerken.</li>" +
    "<li>Fehlerbehebung bei Verbindungs- und Routing-Problemen mit Ping-, Traceroute- und Show-Befehlen.</li>" +
    "</ul>",
  components: [
    { type: "media", props: { type: "image", src: img1 } },
  ],
} as const satisfies ProjectContent;
