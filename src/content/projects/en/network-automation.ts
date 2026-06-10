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
    "A Network Automation Management Web App built using Streamlit and Netmiko.<br/><br/>" +
    "<ul>" +
    "<li>Developed a web-based network management application using Streamlit to manage Cisco network devices in both physical and GNS3 lab environments.</li>" +
    "<li>Used Python and Netmiko to connect to network devices via SSH and automate common administration tasks.</li>" +
    "<li>Implemented functions to run show commands, back up device configurations, and push configurations to multiple devices.</li>" +
    "<li>Improved lab operation efficiency by reducing repetitive manual configuration and supporting centralized device management.</li>" +
    "</ul>",
  components: [
    { type: "media", props: { type: "image", src: img1, index: 0 } },
    { type: "media", props: { type: "image", src: img2, index: 1 } },
    { type: "media", props: { type: "image", src: img3, index: 2 } },
    { type: "media", props: { type: "image", src: img4, index: 3 } },
    { type: "media", props: { type: "image", src: img5, index: 4 } },
    { type: "media", props: { type: "image", src: img6, index: 5 } },
    { type: "media", props: { type: "image", src: img7, index: 6 } },
  ],
} as const satisfies ProjectContent;
