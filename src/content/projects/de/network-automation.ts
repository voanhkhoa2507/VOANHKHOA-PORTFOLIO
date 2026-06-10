import type { ProjectContent } from "../../types";
import img1 from "../../../assets/images/projects/network-automation/Giao diện tự web app automation.png";
import img2 from "../../../assets/images/projects/network-automation/Lưu giữ toàn bộ log thao tác.png";
import img3 from "../../../assets/images/projects/network-automation/Mô hình cơ bản để test.png";
import img4 from "../../../assets/images/projects/network-automation/Rollback cấu hình.png";
import img5 from "../../../assets/images/projects/network-automation/Thao tác trên nhiều thiết bị.png";
import img6 from "../../../assets/images/projects/network-automation/Thêm thiết bị để quản lý.png";
import img7 from "../../../assets/images/projects/network-automation/Tự động kiểm tra dây bị down và gửi mail.png";

export default {
  title: "Network Automation Management Web App",
  theme: "dark",
  tags: ["python", "streamlit", "netmiko", "network automation"],
  videoBorder: false,
  description:
    "Eine Web-App zur Verwaltung und Automatisierung von Netzwerken mit Streamlit und Netmiko.<br/><br/>" +
    "<ul>" +
    "<li>Entwicklung einer webbasierten Netzwerkmanagement-Anwendung mit Streamlit zur Verwaltung von Cisco-Netzwerkgeräten in physischen und GNS3-Laborumgebungen.</li>" +
    "<li>Verwendung von Python und Netmiko zur Verbindung mit Netzwerkgeräten über SSH und Automatisierung allgemeiner Verwaltungsaufgaben.</li>" +
    "<li>Implementierung von Funktionen zur Ausführung von Show-Befehlen, zur Sicherung von Gerätekonfigurationen und zur Bereitstellung von Konfigurationen auf mehreren Geräten.</li>" +
    "<li>Verbesserung der Laboreffizienz durch Reduzierung wiederholter manueller Konfigurationen und Unterstützung einer zentralen Geräteverwaltung.</li>" +
    "</ul>",
  components: [
    { type: "media", props: { type: "image", src: img1 } },
    { type: "media", props: { type: "image", src: img2 } },
    { type: "media", props: { type: "image", src: img3 } },
    { type: "media", props: { type: "image", src: img4 } },
    { type: "media", props: { type: "image", src: img5 } },
    { type: "media", props: { type: "image", src: img6 } },
    { type: "media", props: { type: "image", src: img7 } },
  ],
} as const satisfies ProjectContent;
