import logoImg from "./assets/images/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.webp";
import webDevBanner from "./assets/images/web-landing-banner.webp";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.webp";
import aboutUsBanner from "./assets/images/about-us-banner.webp";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";

import { lazy } from "react";
const HomePage = lazy(() => import("./pages/website/HomePage"));
// const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
};

// company details
export const companyDetails = {
  phone: "+0000000000",
  whatsapp: "+0000000000",
  email: "abc@xyz.com",
  address: "ABC Street, City, Country",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <HomePage />,
  },
  // {
  //   name: "Home",
  //   path: "/",
  //   component: <Home />,
  // },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  // {
  //   name: "Blogs",
  //   path: "#",
  //   component: '',
  // },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("./assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("./assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals. Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    desc: "We provide full-stack web development services, that involve back-end infrastructure and front-end user interfaces. Our area of expertise is developing safe, scalable, and reliable online applications that work flawlessly across all platforms.",
    detailContent:
      "We provide full-stack web development services, that involve back-end infrastructure and front-end user interfaces. Our area of expertise is developing safe, scalable, and reliable online applications that work flawlessly across all platforms. Our artificial intelligence (AI) enhanced web solutions guarantee optimal speed, user engagement, and security, no matter any kind of website—corporate, e-commerce, or sophisticated web application.",
  },
  {
    id: 2,
    title: "App Development",
    desc: "We specialize in developing mobile applications that incorporate cutting-edge artificial intelligence into all facets of the user experience, exceeding conventional functionality. Our solutions can enhance the exposure of your brand by leveraging AI capabilities.",
    detailContent:
      "At Morfouss, we specialize in developing mobile applications that incorporate cutting-edge artificial intelligence into all facets of the user experience, exceeding conventional functionality. Whether for iOS or Android, our innovative strategy produces user-friendly, high-performing apps that are meticulously designed to fulfil the distinctive requirements of your company. We emphasize the consumer's experience initially, ensuring that the apps we develop not only retain users intrigued but also streamline workflows and maximize performance. Each application we develop is a potent tool intended to improve productivity and foster greater engagement, encouraging your company to thrive in a world that is getting more and more mobile-focused. Our solutions can adapt in real-time, offering personalized experiences that interact with customers and enhance the exposure of your brand by leveraging AI capabilities.",
  },
  {
    id: 3,
    title: "Game Development",
    desc: "We deploy cutting-edge artificial intelligence (AI) to develop games that re-invent the gaming experience. Our dedicated team of experts uses the finest and most recent advances in artificial intelligence to transform innovative concepts into captivating, immersive worlds.",
    detailContent:
      "At Morfouss, we deploy cutting-edge artificial intelligence (AI) to develop games that re-invent the gaming experience. Our dedicated team of experts uses the finest and most recent advances in artificial intelligence to transform innovative concepts into captivating, immersive worlds. From initial ideation to the meticulous design and seamless launch, we employ innovative AI technology to generate immersive gaming experiences that resonate with players on multiple levels. Our cutting-edge solutions enable developers to build dynamic gaming environments that adapt to player actions and interactions in an innovative manner, ensuring unparalleled engagement and virtually limitless creative possibilities. We boast the technical expertise and creative vision to execute your unique concept, whether it's a light-hearted mobile game that delights users during downtime or a vast, multi-layered multiplayer universe that fosters involvement and competitiveness.",
  },
  {
    id: 4,
    title: "Chatbot Development",
    desc: "Use the disruptive potential of artificial intelligence to rethink how your company interacts with clients. At Morfouss, we specialize in developing sophisticated chatbots that provide excellent and seamlessly automating tedious tasks.",
    detailContent:
      "Use the disruptive potential of artificial intelligence to rethink how your company interacts with clients. At Morfouss, we specialize in developing sophisticated chatbots that provide excellent, significantly boosting customer satisfaction and seamlessly automating tedious tasks. Our intelligent chatbots are designed to offer tailored, human-like interactions that enhance consumer satisfaction and improve operational efficiency. This allows your company to focus on what truly matters and fostering lasting relationships and accomplishing strategic objectives. By leveraging our cutting-edge technologies, you may reduce operating expenses and optimize resources while ensuring your clients feel valued and engaged at all times.",
  },
  {
    id: 5,
    title: "Data Analytics",
    desc: "With the guidance of our cutting-edge AI-powered data analytics services, unleash the full potential of your data. At Morfouss, we enable companies to acquire valuable insights, automate workflows, and make accurate, data-driven decisions that stimulate innovation and creativity.",
    detailContent:
      "With the guidance of our cutting-edge AI-powered data analytics services, unleash the full potential of your data. At Morfouss, we enable companies to acquire valuable insights, automate workflows, and make accurate, data-driven decisions that stimulate innovation and creativity. With the support of our sophisticated analytics capabilities, you will be able to identify new trends, comprehend consumer behavior in tremendous detail, and forecast future performance with precision. We ensure that your company leads the way in a rapidly evolving, data-centric world and remains competitive by turning complex data into actionable intelligence. With the assistance of our expertise, you may leverage data to propel your company's growth and accomplish unparalleled achievement.",
  },
  {
    id: 6,
    title: "Blockchain Development",
    desc: "We provide cutting-edge blockchain development services that revolutionize the decentralized operation, security, and transparency of your company's operations. Discover a new era of reliability and innovation with our comprehensive blockchain solutions.",
    detailContent:
      "At Morfouss, we provide cutting-edge blockchain development services that revolutionize the decentralized operation, security, and transparency of your company's operations. Our expertise includes developing secure smart contracts, cutting-edge decentralized apps, and bespoke cryptocurrency solutions—all meticulously crafted to enable your company to fully leverage the groundbreaking possibilities of blockchain technology. Using this cutting-edge technology, we bring your company at the forefront of the digital economy by boosting operational efficiency, bolstering security, and cultivating stakeholder confidence. Discover a new era of reliability and innovation with our comprehensive blockchain solutions, designed to address the specific challenges and possibilities faced by your industry.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
