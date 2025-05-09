import { ReactComponent as LogoImg } from "../assets/images/logo/logo.svg";

import { lazy } from "react";
const Home = lazy(() => import("../pages/website/Home/Home"));
const Services = lazy(() => import("../pages/website/Services/Services"));
const Blogs = lazy(() => import("../pages/website/Blogs/Blogs"));
const Intro = lazy(() => import("../pages/website/Intro/Intro"));
const ContactUs = lazy(() => import("../pages/website/ContactUs/ContactUs"));

export { LogoImg };

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
    component: <Home />,
  },
  {
    name: "Intro",
    path: "/intro",
    component: <Intro />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "Insights",
    path: "/insights",
    component: <Blogs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: require("../assets/images/icons/online-shopping.png"),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: require("../assets/images/icons/socialmedia.png"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: require("../assets/images/icons/landing-page.png"),
    description:
      "Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: require("../assets/images/icons/software-development.png"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: require("../assets/images/icons/ios-development.png"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: require("../assets/images/icons/android-development.png"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals. Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: require("../assets/images/icons/flutter-development.png"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: require("../assets/images/icons/hybrid-app-development.png"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 7,
    title: "AI & Data",
    desc: "Harness the power of artificial intelligence and data to drive innovation and efficiency in your business. Our AI and data solutions are designed to provide actionable insights and automate complex processes.",
    detailContent:
      "Harness the power of artificial intelligence and data to drive innovation and efficiency in your business. Our AI and data solutions are designed to provide actionable insights and automate complex processes. From machine learning models to predictive analytics, we help you unlock the full potential of your data, enabling smarter decision-making and a competitive edge in your industry.",
    html: `<div class="wrapper">
  <div class="text-center mb-2">
    <h2 class="heading-2 !leading-tight">Bringing an Idea to Life</h2>
    <p class="desc mt-2">Bringing an idea to life requires more than just coding—it takes creativity, precision, and a clear understanding of your business objectives. Our product engineering services are designed to help you develop high-quality, scalable products that meet your customers’ needs and stand the test of time. We work with you throughout the entire product development lifecycle, from conceptualization to deployment, ensuring the end result is a product that not only works but thrives.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <div class="bg-white/10 p-[0.625rem] lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-[1.125rem] lg:text-lg font-semibold mb-1">Custom Software Development</h3>
      <p class="desc">We build software solutions that are as unique as your business, designed to deliver exactly what you need in the most efficient way possible.</p>
    </div>
    
    <div class="bg-white/10 p-[0.625rem] lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-[1.125rem] lg:text-lg font-semibold mb-1">Mobile App Development</h3>
      <p class="desc">Whether it’s iOS or Android, our team creates seamless and intuitive mobile experiences that boost engagement and performance.</p>
    </div>

    <div class="bg-white/10 p-[0.625rem] lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-[1.125rem] lg:text-lg font-semibold mb-1">Ongoing Maintenance & Support</h3>
      <p class="desc">We don’t just walk away after launch. We offer continuous support to keep your products secure, functional, and updated with the latest features.</p>
    </div>
  </div>
</div>
`,
  },
  {
    id: 8,
    title: "Product Engineering",
    desc: "Transform your ideas into reality with our comprehensive product engineering services. We specialize in designing, developing, and delivering high-quality products that meet the needs of your customers.",
    detailContent:
      "Transform your ideas into reality with our comprehensive product engineering services. We specialize in designing, developing, and delivering high-quality products that meet the needs of your customers. Our end-to-end product engineering approach ensures that every aspect of your product, from concept to deployment, is meticulously planned and executed to achieve optimal performance and user satisfaction.",
    html: `<div class="wrapper">
  <div class="text-center mb-2">
    <h2 class="heading-2 !leading-tight">Stay Ahead with IT Consulting & Strategy</h2>
    <p class="desc mt-2">Technology evolves quickly, and it can be difficult to keep up with the pace of change. Our IT consulting and strategy services help you stay ahead by assessing your current infrastructure and guiding you through technology decisions that align with your long-term goals. We work as an extension of your team, offering the insights and direction you need to optimize your IT landscape, reduce risks, and improve overall efficiency.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <div class="bg-white/10 p-[0.625rem] lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-[1.125rem] lg:text-lg font-semibold mb-1">Technology Audits & Strategy</h3>
      <p class="desc">We take a deep dive into your current tech setup and develop a customized strategy that helps streamline operations and reduce unnecessary costs.</p>
    </div>
    
    <div class="bg-white/10 p-[0.625rem] lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-[1.125rem] lg:text-lg font-semibold mb-1">Digital Transformation</h3>
      <p class="desc">We partner with you to modernize your processes, adopting the latest tech that empowers your team and drives new opportunities.</p>
    </div>

    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Cybersecurity & Risk Management</h3>
      <p class="desc">With ever-evolving threats, we prioritize the protection of your data and systems, ensuring your business stays safe from cyber risks.</p>
    </div>
  </div>
</div>
`,
  },
  {
    id: 9,
    title: "IT Consulting & Strategy",
    desc: "Optimize your IT infrastructure and align it with your business goals through our expert IT consulting and strategy services. We help you navigate the complexities of technology to achieve sustainable growth.",
    detailContent:
      "Optimize your IT infrastructure and align it with your business goals through our expert IT consulting and strategy services. We help you navigate the complexities of technology to achieve sustainable growth. Our team of experienced consultants works closely with you to develop tailored strategies that enhance operational efficiency, reduce costs, and drive innovation across your organization.",
    html: `<div class="wrapper">
  <div class="text-center mb-2">
    <h2 class="heading-2 !leading-tight">Expert IT Consulting & Strategy</h2>
    <p class="desc mt-2">Technology evolves quickly, and it can be difficult to keep up with the pace of change. Our IT consulting and strategy services help you stay ahead by assessing your current infrastructure and guiding you through technology decisions that align with your long-term goals. We work as an extension of your team, offering the insights and direction you need to optimize your IT landscape, reduce risks, and improve overall efficiency.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <div class="bg-white/10 p-[0.625rem] lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-[1.125rem] lg:text-lg font-semibold mb-1">Technology Audits & Strategy</h3>
      <p class="desc">We take a deep dive into your current tech setup and develop a customized strategy that helps streamline operations and reduce unnecessary costs.</p>
    </div>
    
    <div class="bg-white/10 p-[0.625rem] lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-[1.125rem] lg:text-lg font-semibold mb-1">Digital Transformation</h3>
      <p class="desc">We partner with you to modernize your processes, adopting the latest tech that empowers your team and drives new opportunities.</p>
    </div>

    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Cybersecurity & Risk Management</h3>
      <p class="desc">With ever-evolving threats, we prioritize the protection of your data and systems, ensuring your business stays safe from cyber risks.</p>
    </div>
  </div>
</div>
`,
  },
  {
    id: 10,
    title: "UI/UX Design",
    desc: "Create exceptional user experiences with our UI/UX design services. We focus on designing intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
    detailContent:
      "Create exceptional user experiences with our UI/UX design services. We focus on designing intuitive and visually appealing interfaces that enhance user engagement and satisfaction. Our design process is centered around understanding user behavior and preferences, ensuring that every interaction with your product is seamless and enjoyable. From wireframes to prototypes, we deliver designs that not only look great but also perform exceptionally well.",
    html: `<div class="wrapper">
  <div class="text-center mb-2">
    <h2 class="heading-2 !leading-tight">Designing Seamless User Experiences</h2>
    <p class="desc mt-2">User experience is at the heart of every successful digital product. We design intuitive, visually engaging interfaces that not only look great but also create a seamless, enjoyable experience for your users. Our design process is rooted in research, ensuring we understand your audience and craft solutions that meet their needs while also aligning with your business goals.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">User Research & Insights</h3>
      <p class="desc">We gather data to understand user behavior, enabling us to design interfaces that are not only visually appealing but also highly functional and user-friendly.</p>
    </div>
    
    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Wireframes & Prototypes</h3>
      <p class="desc">We create low- and high-fidelity prototypes to give you a clear vision of how your product will look and behave before it’s developed.</p>
    </div>

    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">UI/UX Design</h3>
      <p class="desc">We focus on creating beautiful, responsive designs that are easy to navigate, helping you connect with your users and enhance their overall experience.</p>
    </div>
  </div>
</div>
`,
  },
  {
    id: 11,
    title: "Cloud Services",
    desc: "Leverage the power of cloud computing to scale your business and improve operational efficiency. Our cloud services provide flexible, secure, and scalable solutions tailored to your needs.",
    detailContent:
      "Leverage the power of cloud computing to scale your business and improve operational efficiency. Our cloud services provide flexible, secure, and scalable solutions tailored to your needs. Whether you're looking to migrate to the cloud, optimize your existing cloud infrastructure, or develop cloud-native applications, our team of experts is here to help you every step of the way.",
    html: `<div class="wrapper">
  <div class="text-center mb-2">
    <h2 class="heading-2 !leading-tight">Unlock the Power of Cloud Computing</h2>
    <p class="desc mt-2">Cloud computing is a game-changer for businesses, offering flexibility, scalability, and cost-effectiveness. Our cloud services help you migrate to the cloud, optimize your existing infrastructure, and manage your resources more efficiently. We ensure your cloud environment is secure, reliable, and perfectly tailored to your business needs.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Cloud Migration</h3>
      <p class="desc">Moving to the cloud doesn’t have to be a daunting process. We make your transition smooth and seamless, minimizing disruptions and ensuring you get the most out of your new infrastructure.</p>
    </div>
    
    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Cloud Management & Optimization</h3>
      <p class="desc">We manage your cloud resources, making sure they’re running efficiently, securely, and cost-effectively.</p>
    </div>

    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Cloud Security & Compliance</h3>
      <p class="desc">We implement robust security measures that protect your data, while ensuring compliance with industry standards and regulations.</p>
    </div>
  </div>
</div>
`,
  },
  {
    id: 12,
    title: "Enterprise Solutions",
    desc: "Empower your business with our enterprise solutions designed to streamline operations, enhance productivity, and drive growth. We offer customized solutions that address the unique challenges of large organizations.",
    detailContent:
      "Empower your business with our enterprise solutions designed to streamline operations, enhance productivity, and drive growth. We offer customized solutions that address the unique challenges of large organizations. From enterprise resource planning (ERP) to customer relationship management (CRM), our solutions are designed to integrate seamlessly with your existing systems, providing you with the tools you need to succeed in a competitive marketplace.",
    html: `<div class="wrapper">
  <div class="text-center mb-2">
    <h2 class="heading-2 !leading-tight">Powerful Enterprise Solutions for Growth</h2>
    <p class="desc mt-2">For large organizations, complexity is inevitable. But with the right enterprise solutions, you can streamline processes, improve collaboration, and make more informed decisions. Our solutions are designed to scale with your business, integrating your operations and making them more efficient while providing powerful insights through data and analytics.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Enterprise Resource Planning (ERP)</h3>
      <p class="desc">We help you integrate and streamline core business functions such as finance, HR, and operations, making your organization more agile and efficient.</p>
    </div>
    
    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Customer Relationship Management (CRM)</h3>
      <p class="desc">Our CRM solutions help you build stronger relationships with your customers by improving communication, tracking interactions, and personalizing their experience.</p>
    </div>

    <div class="bg-white/10 p-3 lg:p-6 rounded-lg shadow-lg">
      <h3 class="text-lg font-semibold mb-1">Business Intelligence & Analytics</h3>
      <p class="desc">We provide you with the tools to make data-driven decisions, offering powerful insights into your business performance, customer behavior, and market trends.</p>
    </div>
  </div>
</div>
`,
  },
];

// service list page content
export const serviceListPageContent = [
  {
    service: "AI & Data",
    title: "Customizing AI Solutions for Enterprises",
    desc: "Unite data-driven insights with advanced analytics. Leverage automation and turnkey AI tools and frameworks to revolutionize business performance.",
    image: require("../assets/images/services page/1.webp"),
  },
  {
    service: "Product Engineering",
    title: "Crafting Impactful Software Products",
    desc: "Scale with impact through carefully crafted engineering experiences that follow a human-centric design focused around specific product needs.",
    image: require("../assets/images/services page/2.webp"),
  },
  {
    service: "IT Consulting & Strategy",
    title: "Elevating Performance with Strategic Business Platforms",
    desc: "Revamp workflows and eliminate data silos with top-tier solutions and expert consulting in industry leading enterprise platforms.",
    image: require("../assets/images/services page/3.webp"),
  },
  {
    service: "UI/UX Design",
    title: "Designing Seamless, Engaging Digital Experiences",
    desc: "Enhance user interaction with intuitive and aesthetically refined digital products. Our designs prioritize usability and innovation.",
    image: require("../assets/images/services page/4.webp"),
  },
  {
    service: "Cloud Services",
    title: "Delivering End-to-End Cloud Excellence",
    desc: "Streamline operations and fortify security with our comprehensive cloud services, ensuring seamless migration and optimization.",
    image: require("../assets/images/services page/5.webp"),
  },
  {
    service: "Enterprise Solutions",
    title: "Elevating Performance with Strategic Business Platforms",
    desc: "Revamp workflows and eliminate data silos with top-tier solutions and expert consulting in industry leading enterprise platforms.",
    image: require("../assets/images/services page/6.webp"),
  },
];
