"use client";

import TopicBasedBanner from "@/components/pages/Services/common/topicBasedBanner";
import TopicBasedServices from "@/components/pages/Services/common/topicBasedServices";
import TopicBasedChooseUs from "@/components/pages/Services/common/TopicBasedChooseUs";
import {
  FiBarChart,
  FiCpu,
  FiGitBranch,
  FiGrid,
  FiHardDrive,
  FiLayers,
  FiMonitor,
  FiSettings,
  FiSmartphone,
} from "react-icons/fi";
import {
  FaList,
  FaShareAlt,
  FaShoppingCart,
  FaPalette,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaTablet,
  FaTabletAlt,
  FaMobileAlt,
  FaBolt,
  FaCloud,
  FaChartBar,
  FaLock,
  FaNetworkWired,
  FaHdd,
  FaCogs,
  FaDesktop,
  FaTools,
  FaBrain,
  FaRobot,
  FaMicrochip,
  FaProjectDiagram,
  FaCog,
  FaChartLine,
  FaBriefcase,
  FaUsersCog,
  FaTachometerAlt,
  FaUsers,
  FaClock,
} from "react-icons/fa";
import {
  PiTabs,
  PiPipeWrenchFill,
  PiGaugeFill,
  PiNetwork,
} from "react-icons/pi";
import { IoApps } from "react-icons/io5";
import { MdQrCode2 } from "react-icons/md";
import { TbLayoutDashboard, TbLayoutDashboardFilled } from "react-icons/tb";
import { GoWorkflow, GoZap } from "react-icons/go";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState();
  const { topic } = useParams();

  const webApplicationData = {
    topic: "Website Development",
    bannerText: {
      title: "All-in-One Addons for Web Application",
      description: [
        "You don't need to waste your time and money anymore on searching for the right Elementor Page Builder Plugins.",
        "Here's the Best Elementor addon with 1 million+ users to help you build anything you want!",
      ],
      buttonText: "Request a Demo",
    },
    stats: [
      { value: "100+", label: "Projects Completion" },
      { value: "10+", label: "Running Projects" },
      { value: "20+", label: "Team Members" },
      { value: "7+", label: "Countries Served" },
    ],
    features: [
      {
        icon: <FiGrid size={24} />,
        title: "Header & Footer Builder",
        color: "#4B9EFF",
      },
      {
        icon: <FaList size={24} />,
        title: "Megamenu Builder",
        color: "#FF4B93",
      },
      {
        icon: <PiTabs size={24} />,
        title: "Advanced Tab",
        color: "#4CAF50",
      },
      {
        icon: <FiLayers size={24} />,
        title: "Parallax Effect",
        color: "#6C5CE7",
      },
      {
        icon: <FaShareAlt size={24} />,
        title: "Social Feeds",
        color: "#A45EFF",
      },
      {
        icon: <IoApps size={24} />,
        title: "More Addons & Modules",
        subtitle: "90+",
        color: "#FF8A3D",
      },
    ],
    services: [
      "Multivendor Ecommerce eco systems Development",
      "Single Vendor Ecommerce Development",
      "B2C or B2B Website Development",
      "Business Management Software",
      "Cloud service",
      "UI/UX Design",
      "API Integrations & Web consultancy",
    ],
    cards: [
      {
        title: "Custom Website Development",
        description:
          "We create custom websites that are designed to reflect your brand and appeal to your target audience.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
        icon: MdQrCode2,
      },
      {
        title: "E-commerce Website Development",
        description:
          "We develop e-commerce websites that are easy to use, secure, and optimized for conversion.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=600",
        icon: FaShoppingCart,
      },
      {
        title: "Content Management Systems",
        description:
          "We build websites that are powered by a CMS, making it easy for you to update your site and content.",
        image:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=600",
        icon: TbLayoutDashboard,
      },
      {
        title: "UI/UX Design",
        description:
          "Our UI/UX design services include creating wireframes, prototypes, and visual designs for your website.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
        icon: FaPalette,
      },
      {
        title: "Website Maintenance",
        description:
          "We offer ongoing website maintenance services to keep your site running smoothly and securely.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        icon: PiPipeWrenchFill,
      },
    ],
    faqData: [
      {
        question: "What is UX design?",
        answer:
          "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
      },
      {
        question: "What are the key principles of UX design?",
        answer:
          "The key principles of UX design include user-centered design, accessibility, usability, hierarchy, consistency, and feedback. These principles ensure that the design meets user needs effectively.",
      },
      {
        question: "What is the difference between UX and UI design?",
        answer:
          "While UX design focuses on the overall user experience and how users interact with a product, UI design specifically deals with the visual elements and interface components that users directly interact with.",
      },
      {
        question: "What is a wireframe?",
        answer:
          "A wireframe is a basic visual representation of a webpage or application that outlines the structure, layout, and functionality without including detailed design elements or content.",
      },
      {
        question: "What is user testing?",
        answer:
          "User testing is the process of evaluating a product by testing it with representative users. It helps identify usability issues and gather feedback to improve the user experience.",
      },
    ],
  };
  const softwareDevelopmentData = {
    topic: "Software Development",
    bannerText: {
      title: "Enterprise-Grade Software Solutions",
      description: [
        "Transform your business with custom software solutions built for scalability and performance.",
        "Our expert team delivers robust applications that drive innovation and efficiency.",
      ],
      buttonText: "Schedule Consultation",
    },
    stats: [
      { value: "200+", label: "Enterprise Clients" },
      { value: "15+", label: "Years Experience" },
      { value: "50+", label: "Expert Developers" },
      { value: "12+", label: "Industry Sectors" },
    ],
    features: [
      {
        icon: <MdQrCode2 size={24} />,
        title: "Custom Software Development",
        color: "#2563EB",
      },
      {
        icon: <FaDatabase size={24} />,
        title: "Database Solutions",
        color: "#DC2626",
      },
      {
        icon: <FiGitBranch size={24} />,
        title: "Version Control",
        color: "#059669",
      },
      {
        icon: <FaServer size={24} />,
        title: "API Development",
        color: "#7C3AED",
      },
      {
        icon: <FaShieldAlt size={24} />,
        title: "Security Implementation",
        color: "#C026D3",
      },
      {
        icon: <FiCpu size={24} />,
        title: "System Integration",
        subtitle: "50+",
        color: "#EA580C",
      },
    ],
    services: [
      "Enterprise Software Development",
      "Cloud-Native Applications",
      "Legacy System Modernization",
      "DevOps Implementation",
      "Quality Assurance",
      "Technical Consultation",
      "Maintenance & Support",
    ],
    cards: [
      {
        title: "Enterprise Solutions",
        description:
          "Custom enterprise software that streamlines operations and boosts productivity.",
        image:
          "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=600",
        icon: MdQrCode2,
      },
      {
        title: "Cloud Solutions",
        description:
          "Scalable cloud-native applications with modern architecture patterns.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        icon: FaServer,
      },
      {
        title: "API Development",
        description:
          "Robust API development for seamless system integration and data exchange.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        icon: FaDatabase,
      },
      {
        title: "DevOps Services",
        description:
          "Implementing efficient CI/CD pipelines and automation solutions.",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
        icon: FiGitBranch,
      },
      {
        title: "Security Solutions",
        description:
          "Enterprise-grade security implementation and compliance management.",
        image:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
        icon: FaShieldAlt,
      },
    ],
    faqData: [
      {
        question: "What is custom software development?",
        answer:
          "Custom software development involves creating, deploying and maintaining software for a specific set of users, functions or organizations.",
      },
      {
        question: "How long does it take to develop custom software?",
        answer:
          "The development timeline varies based on project complexity, typically ranging from 3-12 months for enterprise solutions.",
      },
      {
        question: "What development methodology do you use?",
        answer:
          "We primarily use Agile methodology, allowing for iterative development, frequent feedback, and flexible adaptation to changing requirements.",
      },
      {
        question: "How do you ensure software quality?",
        answer:
          "We implement comprehensive testing strategies including unit testing, integration testing, and automated QA processes.",
      },
      {
        question: "What about software maintenance?",
        answer:
          "We provide ongoing maintenance, updates, and support to ensure your software remains secure, efficient, and up-to-date.",
      },
    ],
  };

  const mobileAppDevelopmentData = {
    topic: "Mobile App Development",
    bannerText: {
      title: "Next-Generation Mobile Applications",
      description: [
        "Create powerful, engaging mobile experiences that users love.",
        "From concept to launch, we build native and cross-platform apps that deliver results.",
      ],
      buttonText: "Start Your Project",
    },
    stats: [
      { value: "150+", label: "Apps Delivered" },
      { value: "12+", label: "Industry Awards" },
      { value: "30+", label: "Expert Developers" },
      { value: "4.8", label: "Avg. App Rating" },
    ],
    features: [
      {
        icon: <FaMobileAlt size={24} />,
        title: "Native Development",
        color: "#3B82F6",
      },
      {
        icon: <FaTabletAlt size={24} />,
        title: "Cross-Platform Apps",
        color: "#EF4444",
      },
      {
        icon: <FaBolt size={24} />,
        title: "Performance Optimization",
        color: "#10B981",
      },
      {
        icon: <FaCloud size={24} />,
        title: "Cloud Integration",
        color: "#8B5CF6",
      },
      {
        icon: <FaShieldAlt size={24} />,
        title: "App Security",
        color: "#EC4899",
      },
      {
        icon: <FaChartBar size={24} />,
        title: "Analytics Integration",
        subtitle: "30+",
        color: "#F97316",
      },
    ],

    services: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Development",
      "UI/UX Design for Mobile",
      "App Testing & QA",
      "App Store Optimization",
      "App Maintenance & Support",
    ],
    cards: [
      {
        title: "Native iOS Development",
        description:
          "Premium iOS applications built with Swift for optimal performance.",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600",
        icon: FiSmartphone,
      },
      {
        title: "Android Development",
        description:
          "Feature-rich Android apps developed with Kotlin and Java.",
        image:
          "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=600",
        icon: FaTablet,
      },
      {
        title: "Cross-Platform Apps",
        description:
          "Cost-effective solutions that work seamlessly across platforms.",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600",
        icon: GoZap,
      },
      {
        title: "App Analytics",
        description:
          "Integrated analytics solutions for data-driven improvements.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        icon: PiGaugeFill,
      },
      {
        title: "App Security",
        description:
          "Enterprise-grade security measures for mobile applications.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
        icon: FaLock,
      },
    ],
    faqData: [
      {
        question:
          "What's the difference between native and cross-platform development?",
        answer:
          "Native development creates apps specifically for iOS or Android, while cross-platform development allows a single codebase to run on multiple platforms.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Development time varies based on complexity, typically ranging from 3-6 months for a full-featured app.",
      },
      {
        question: "Do you provide app maintenance services?",
        answer:
          "Yes, we offer comprehensive maintenance packages including updates, bug fixes, and performance optimization.",
      },
      {
        question: "How do you ensure app security?",
        answer:
          "We implement industry-standard security measures including encryption, secure authentication, and regular security audits.",
      },
      {
        question: "What about app store submission?",
        answer:
          "We handle the entire app store submission process, including optimization for better visibility and downloads.",
      },
    ],
  };

  const itInfrastructureData = {
    topic: "IT Infrastructure",
    bannerText: {
      title: "Enterprise IT Infrastructure Solutions",
      description: [
        "Build robust, scalable, and secure IT infrastructure for your organization.",
        "Comprehensive solutions for modern business needs with 24/7 support.",
      ],
      buttonText: "Infrastructure Audit",
    },
    stats: [
      { value: "250+", label: "Infrastructure Projects" },
      { value: "99.99%", label: "Network Uptime" },
      { value: "35+", label: "IT Specialists" },
      { value: "24/7", label: "Support Available" },
    ],
    features: [
      {
        icon: <FaServer size={24} />,
        title: "Server Infrastructure",
        color: "#2563EB",
      },
      {
        icon: <FaNetworkWired size={24} />,
        title: "Network Solutions",
        color: "#DC2626",
      },
      {
        icon: <FaShieldAlt size={24} />,
        title: "Security Systems",
        color: "#059669",
      },
      {
        icon: <FaHdd size={24} />,
        title: "Storage Solutions",
        color: "#7C3AED",
      },
      {
        icon: <FaCogs size={24} />,
        title: "System Integration",
        color: "#C026D3",
      },
      {
        icon: <FaDesktop size={24} />,
        title: "Infrastructure Monitoring",
        subtitle: "35+",
        color: "#EA580C",
      },
    ],

    services: [
      "Network Infrastructure",
      "Data Center Solutions",
      "Security Implementation",
      "Backup & Recovery",
      "System Integration",
      "Infrastructure Monitoring",
      "24/7 Technical Support",
    ],
    cards: [
      {
        title: "Network Infrastructure",
        description:
          "Enterprise-grade networking solutions for optimal connectivity.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        icon: PiNetwork,
      },
      {
        title: "Server Solutions",
        description:
          "Reliable server infrastructure for mission-critical operations.",
        image:
          "https://images.unsplash.com/photo-1558494950-b8e04b08f11f?auto=format&fit=crop&q=80&w=600",
        icon: FaServer,
      },
      {
        title: "Security Systems",
        description:
          "Comprehensive security solutions for infrastructure protection.",
        image:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
        icon: FaShieldAlt,
      },
      {
        title: "Storage Solutions",
        description: "Scalable storage systems for enterprise data management.",
        image:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
        icon: FiHardDrive,
      },
      {
        title: "Infrastructure Monitoring",
        description: "24/7 monitoring and management of IT infrastructure.",
        image:
          "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=600",
        icon: FiMonitor,
      },
    ],
    faqData: [
      {
        question: "What is IT infrastructure?",
        answer:
          "IT infrastructure includes all hardware, software, networks, and facilities required to develop, test, deliver, and maintain IT services.",
      },
      {
        question: "How do you ensure infrastructure security?",
        answer:
          "We implement multiple layers of security including firewalls, encryption, access controls, and continuous monitoring.",
      },
      {
        question: "What about disaster recovery?",
        answer:
          "We design comprehensive disaster recovery plans with regular testing and backup solutions to ensure business continuity.",
      },
      {
        question: "How do you handle scaling?",
        answer:
          "Our infrastructure solutions are designed to scale seamlessly with your business growth, both vertically and horizontally.",
      },
      {
        question: "What support do you provide?",
        answer:
          "We offer 24/7 technical support with guaranteed response times and proactive monitoring of your infrastructure.",
      },
    ],
  };

  const awsServicesData = {
    topic: "AWS Services",
    bannerText: {
      title: "Enterprise Cloud Solutions",
      description: [
        "Harness the power of AWS cloud services for your business.",
        "Scale efficiently with secure, reliable, and cost-effective cloud infrastructure.",
      ],
      buttonText: "Cloud Consultation",
    },
    stats: [
      { value: "300+", label: "Cloud Migrations" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "40+", label: "AWS Certified Experts" },
      { value: "60%", label: "Cost Reduction" },
    ],
    features: [
      {
        icon: <FaCloud size={24} />,
        title: "Cloud Migration",
        color: "#2563EB",
      },
      {
        icon: <FaDatabase size={24} />,
        title: "Database Services",
        color: "#DC2626",
      },
      {
        icon: <FaShieldAlt size={24} />,
        title: "Security & Compliance",
        color: "#059669",
      },
      {
        icon: <FaServer size={24} />,
        title: "Serverless Computing",
        color: "#7C3AED",
      },
      {
        icon: <FaNetworkWired size={24} />,
        title: "Network Architecture",
        color: "#C026D3",
      },
      {
        icon: <FaTools size={24} />,
        title: "Monitoring & DevOps",
        subtitle: "45+",
        color: "#EA580C",
      },
    ],

    services: [
      "Cloud Migration Services",
      "AWS Architecture Design",
      "DevOps Implementation",
      "Security & Compliance",
      "Cost Optimization",
      "24/7 Managed Services",
      "Disaster Recovery",
    ],
    cards: [
      {
        title: "Cloud Migration",
        description:
          "Seamless migration of applications and infrastructure to AWS cloud.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
        icon: FaCloud,
      },
      {
        title: "DevOps Services",
        description:
          "Automated deployment and continuous integration solutions.",
        image:
          "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=600",
        icon: FiMonitor,
      },
      {
        title: "Security Solutions",
        description: "Comprehensive security and compliance implementation.",
        image:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=600",
        icon: FaShieldAlt,
      },
      {
        title: "Serverless Architecture",
        description: "Modern serverless solutions for scalable applications.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        icon: FaServer,
      },
      {
        title: "Database Management",
        description: "Managed database services and optimization.",
        image:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
        icon: FaDatabase,
      },
    ],
    faqData: [
      {
        question: "Why should I move to AWS cloud?",
        answer:
          "AWS offers scalability, cost-efficiency, global reach, and advanced services that help businesses innovate faster.",
      },
      {
        question: "How secure is AWS cloud?",
        answer:
          "AWS provides comprehensive security features and meets major compliance standards, ensuring your data remains protected.",
      },
      {
        question: "What's the migration process like?",
        answer:
          "We follow a systematic approach: assessment, planning, migration execution, and post-migration optimization.",
      },
      {
        question: "How do you handle data backup?",
        answer:
          "We implement automated backup solutions with multiple redundancy levels and disaster recovery planning.",
      },
      {
        question: "What about cost optimization?",
        answer:
          "We continuously monitor and optimize cloud resources to ensure you're getting the most value from your AWS investment.",
      },
    ],
  };

  const aiAutomationData = {
    topic: "AI & Automation",
    bannerText: {
      title: "Intelligent Automation Solutions",
      description: [
        "Transform your business with cutting-edge AI and automation technologies.",
        "Leverage machine learning and intelligent automation to drive efficiency and innovation.",
      ],
      buttonText: "Explore AI Solutions",
    },
    stats: [
      { value: "50+", label: "AI Solutions Deployed" },
      { value: "85%", label: "Efficiency Increase" },
      { value: "25+", label: "AI Specialists" },
      { value: "40+", label: "Success Stories" },
    ],
    features: [
      {
        icon: <FaBrain size={24} />,
        title: "Machine Learning",
        color: "#4F46E5",
      },
      {
        icon: <FaRobot size={24} />,
        title: "Intelligent Automation",
        color: "#EF4444",
      },
      {
        icon: <FaMicrochip size={24} />,
        title: "Deep Learning",
        color: "#10B981",
      },
      {
        icon: <FaProjectDiagram size={24} />,
        title: "Neural Networks",
        color: "#8B5CF6",
      },
      {
        icon: <FaCog size={24} />,
        title: "Process Automation",
        color: "#EC4899",
      },
      {
        icon: <FaChartLine size={24} />,
        title: "Predictive Analytics",
        subtitle: "40+",
        color: "#F59E0B",
      },
    ],

    services: [
      "Machine Learning Solutions",
      "Natural Language Processing",
      "Computer Vision Systems",
      "Predictive Analytics",
      "Process Automation",
      "AI Consulting",
      "Custom AI Development",
    ],
    cards: [
      {
        title: "Machine Learning Solutions",
        description:
          "Custom ML models that deliver actionable insights and predictions.",
        image:
          "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=600",
        icon: FaBrain,
      },
      {
        title: "Process Automation",
        description:
          "Intelligent automation solutions that streamline operations.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
        icon: GoWorkflow,
      },
      {
        title: "Deep Learning",
        description:
          "Advanced neural networks for complex pattern recognition.",
        image:
          "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?auto=format&fit=crop&q=80&w=600",
        icon: FaNetworkWired,
      },
      {
        title: "Predictive Analytics",
        description: "Data-driven insights for informed decision making.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        icon: FaChartLine,
      },
      {
        title: "AI Integration",
        description:
          "Seamless integration of AI capabilities into existing systems.",
        image:
          "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=600",
        icon: FiCpu,
      },
    ],
    faqData: [
      {
        question: "What is machine learning?",
        answer:
          "Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.",
      },
      {
        question: "How can AI benefit my business?",
        answer:
          "AI can automate repetitive tasks, provide predictive insights, improve decision-making, and enhance customer experiences.",
      },
      {
        question: "What's the difference between AI and automation?",
        answer:
          "While automation follows pre-programmed rules, AI systems can learn, adapt, and make decisions based on complex patterns in data.",
      },
      {
        question: "How long does AI implementation take?",
        answer:
          "Implementation time varies from 2-6 months depending on project complexity and data availability.",
      },
      {
        question: "What data is needed for AI solutions?",
        answer:
          "The type and amount of data needed depends on the specific use case, but generally requires quality historical data relevant to the problem.",
      },
    ],
  };

  const managementSoftwareData = {
    topic: "Management Software",
    bannerText: {
      title: "Enterprise Management Solutions",
      description: [
        "Streamline your business operations with intelligent management software.",
        "Comprehensive solutions for resource planning, team collaboration, and business intelligence.",
      ],
      buttonText: "Book Demo",
    },
    stats: [
      { value: "180+", label: "Enterprise Clients" },
      { value: "95%", label: "Client Retention" },
      { value: "45+", label: "Industry Solutions" },
      { value: "8+", label: "Years Experience" },
    ],
    features: [
      {
        icon: <FaTachometerAlt size={24} />,
        title: "Resource Planning",
        color: "#2563EB",
      },
      {
        icon: <FaUsers size={24} />,
        title: "Team Management",
        color: "#DC2626",
      },
      {
        icon: <FaChartBar size={24} />,
        title: "Business Analytics",
        color: "#059669",
      },
      {
        icon: <FaClock size={24} />,
        title: "Time Tracking",
        color: "#7C3AED",
      },
      {
        icon: <FaCog size={24} />,
        title: "Process Automation",
        color: "#C026D3",
      },
      {
        icon: <FaBriefcase size={24} />,
        title: "Project Management",
        subtitle: "25+",
        color: "#EA580C",
      },
    ],

    services: [
      "Enterprise Resource Planning",
      "Customer Relationship Management",
      "Human Resource Management",
      "Project Management Systems",
      "Business Intelligence Tools",
      "Workflow Automation",
      "Performance Analytics",
    ],
    cards: [
      {
        title: "ERP Solutions",
        description:
          "Comprehensive enterprise resource planning systems for business optimization.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
        icon: TbLayoutDashboardFilled,
      },
      {
        title: "Team Management",
        description:
          "Advanced tools for managing teams, resources, and collaborations.",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
        icon: FaUsersCog,
      },
      {
        title: "Business Analytics",
        description:
          "Data-driven insights and reporting for informed decision making.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        icon: FiBarChart,
      },
      {
        title: "Process Automation",
        description:
          "Streamline workflows and automate repetitive business processes.",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600",
        icon: FiSettings,
      },
      {
        title: "Project Management",
        description: "Comprehensive project planning and tracking solutions.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        icon: FaBriefcase,
      },
    ],
    faqData: [
      {
        question: "What is ERP software?",
        answer:
          "Enterprise Resource Planning (ERP) software integrates core business processes into a single system, managing everything from finance to inventory and HR.",
      },
      {
        question: "How can management software benefit my business?",
        answer:
          "Management software can improve efficiency, reduce costs, enhance decision-making, and provide better visibility into business operations.",
      },
      {
        question: "What's the implementation process like?",
        answer:
          "Implementation typically involves assessment, customization, data migration, training, and ongoing support, usually taking 3-6 months.",
      },
      {
        question: "Can the software be customized?",
        answer:
          "Yes, our management solutions can be customized to match your specific business processes and requirements.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "We offer comprehensive support including training, technical assistance, regular updates, and dedicated account management.",
      },
    ],
  };

  useEffect(() => {
    if (topic === "web-development") {
      setData(webApplicationData);
    } else if (topic === "mobile-application") {
      setData(mobileAppDevelopmentData);
    } else if (topic === "management-software") {
      setData(managementSoftwareData);
    } else if (topic === "ai-and-automation") {
      setData(aiAutomationData);
    } else if (topic === "cloud-computing") {
      setData(awsServicesData);
    } else if (topic === "itInfrastructure") {
      setData(itInfrastructureData);
    } else if (topic === "software-development") {
      setData(softwareDevelopmentData);
    }
  }, [topic]);
  return (
    <div>
      {data ? (
        <div>
          <TopicBasedBanner
            stats={data.stats}
            features={data.features}
            bannerText={data.bannerText}
          />
          <TopicBasedServices
            topic={data.topic}
            cards={data.cards}
            services={data.services}
          />
          <TopicBasedChooseUs topic={data.topic} faqData={data.faqData} />
        </div>
      ) : (
        <div className=" w-screen">
         <div className="h-screen w-screen"></div>
          <div className="h-screen w-screen"></div>
        </div>
      )}
    </div>
  );
}
