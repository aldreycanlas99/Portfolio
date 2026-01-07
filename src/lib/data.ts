import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import eshwayImg from '/public/eshway.jpg';
import Fluttergram from '/public/fluttergram.png';
import gamesdomImg from '/public/Gamesdom.png';
import TrackerImg from '/public/issue-tracker.png';
import PestRobot from '/public/pestrobot.png';
import SeleniumBot from '/public/seleniumbot.png';
import SmartPlug from '/public/smartplug.jpg';
import PaperAsh from '/public/paperash.png';


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Education",
        hash: "#education",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const educationData = [

    {
        title: "Bachelor's Degree",
        location: "PESMCOE, Pune",
        description:
            "I'm pursuing my bachelors degree in Electronics & Computer Engineering specialization in Data Science at PESMCOE Pune.",
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2025",
    },
    {
        title: "HSC",
        location: "High School, Pune, India",
        description:
            "Completed my high school education at Pune University with 95%.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2021",
    },
    {
        title: "SSC",
        location: "SSGMES, Shegaon",
        description:
            "Completed my schooling at SSGM School Shegaon and passed SSC with 90%.",
        icon: React.createElement(LuGraduationCap),
        date: "2009-2019",
    },
] as const;

export const projectsData = [
    {
        title: "Pest Identification",
        description: "A React Native app controlling a Raspberry Pi robot for real-time pest detection using a YOLOv8 model deployed on AWS.",
        tags: ["React Native", "YOLOv8", "AWS", "Raspberry Pi", "Flask"],
        imageUrl: PestRobot,
        githubLink: "https://github.com/Kapil619/PestDetection",
        deploymentLink: "https://github.com/Kapil619/PestDetection",
        category: "Mobile",
    },
    {
        title: "EnergyIQ- Smart Plug",
        description: "A cross-platform React Native app to monitor and control a custom-built ESP32 smart plug, featuring real-time data sync with Firebase.",
        tags: ["React Native", "IoT", "ESP32", "Firebase", "Expo"],
        imageUrl: SmartPlug,
        githubLink: "https://github.com/Kapil619/SmartPlug",
        deploymentLink: "https://github.com/Kapil619/SmartPlug",
        category: "Mobile",
    },
    {
        title: "GamesDom",
        description:
            "Created this React web app where users can search for games and see details about them. It uses the RAWG API.",
        tags: ["React", "Typescript", "ChakraUI", "Tailwind",],
        imageUrl: gamesdomImg,
        githubLink: "https://github.com/Kapil619/GamesDom",
        deploymentLink: "https://games-dom.vercel.app/",
        category: "Web",

    },
    {
        title: "Issue-Tracker",
        description:
            "Built a Nextjs Web app with SQL Database. Users can create ,update and delete issues faced by them. Can assign issues to other users & more.",
        tags: ["Next.js", "Typescript", "SQL", "Tailwind", "Prisma"],
        imageUrl: TrackerImg,
        githubLink: "https://github.com/Kapil619/Issue-Tracker",
        deploymentLink: "https://issue-tracker-kapil619.vercel.app/",
        category: "Web",
    },
    {
        title: "FlutterGram",
        description:
            "FlutterGram is an Instagram clone built with Flutter. It has has multiple features like Posting, LiveFeed ,Likes/Comments,Explore-Section, Profile-Section.",
        tags: ["Flutter", "Firebase", "Dart", "Provider"],
        imageUrl: Fluttergram,
        githubLink: "https://github.com/Kapil619/FlutterGram",
        deploymentLink: "https://github.com/Kapil619/FlutterGram",
        category: "Mobile",
    },
    {
        title: "Selenium-Bot",
        description:
            "It is an automated command line application created in Python + Selenium to get the best hotels of any area with their details from the www.booking.com website.",
        tags: ["Selenium", "Python", "Webdriver"],
        imageUrl: SeleniumBot,
        githubLink: "https://github.com/Kapil619/SeleniumBot",
        deploymentLink: "https://github.com/Kapil619/SeleniumBot",
        category: "Web",
    },

] as const;

export const skillsData = [
    { name: "HTML", src: "skill-icons:html" },
    { name: "CSS", src: "skill-icons:css" },
    { name: "JavaScript", src: "skill-icons:javascript" },
    { name: "TypeScript", src: "logos:typescript-icon" },
    { name: "React", src: "logos:react" },
    { name: "Next.js", src: "devicon:nextjs" },
    { name: "Flutter", src: "logos:flutter" },
    { name: "Selenium", src: "logos:selenium" },
    { name: "Django", src: "vscode-icons:file-type-django" },
    { name: "MongoDB", src: "logos:mongodb-icon" },
    { name: "SQL", src: "vscode-icons:file-type-sql" },
    { name: "Firebase", src: "logos:firebase" },
    { name: "C++", src: "vscode-icons:file-type-cpp3" },
    { name: "Python", src: "logos:python" },
    { name: "Java", src: "logos:java" },
    { name: "Dart", src: "logos:dart" },
    { name: "Node.js", src: "logos:nodejs-icon" },
    { name: "Git", src: "devicon:git" },
    { name: "Tailwind", src: "devicon:tailwindcss" },
    { name: "AWS", src: "skill-icons:aws-dark" },

] as const;

export const experienceData = [
    {
        title: 'Senior BIM & AI Software Engineer',
        company: 'Cognizant',
        description: ["Designed and developed advanced Revit API plugins in C# to automate BIM workflows for residential and commercial projects, including model generation, parameter management, and standards enforcement, significantly reducing manual modeling effort and improving cross-project consistency.",
            "Built BIM-integrated web applications using JavaScript, TypeScript, Angular, Node.js, C#, and AWS to support datadriven workflows, external model data consumption, and system interoperability.",
            "Created responsive web & mobile application for Visibly to perform thorough eye test.",
            "Provided technical guidance and mentorship on software engineering best practices, including Revit API development, BIM data structures, and scalable system design.",
        ],
        imageUrl: "/cognizant.png",
        skills: ["logos:python", "logos:dart", "logos:firebase", "logos:aws", 'logos:selenium'],
        dateStarted: "Oct 2021",
        dateEnded: "Dec 2025",
    },
    {
        title: 'Technical Team Lead',
        company: 'Accenture',
        description: ["Implemented Revit API-based BIM systems to programmatically generate, modify, and manage families, parameters, and assemblies, enforcing design rules, validating model data, and adapting to evolving architectural and engineering constraints.",
            "Defined software architecture standards and development guidelines, making technical decisions across BIM automation tools, Revit plugins, and web-based systems to ensure long-term maintainability and scalability.",
            "Developed an advanced health monitoring and fitness coaching app, using Node.js and FastAPI for highperformance data synchronization between mobile devices and IoT sensors.",
            "Built internal desktop utilities with PyQt to automate test workflows and visualize user analytics data.",
            "Defined software development guidelines, made architectural decisions.",
        ],
        imageUrl: "/accenture.png",
        skills: ["logos:python", "logos:dart", "logos:firebase", "logos:aws", 'logos:selenium'],
        dateStarted: "Oct 2019",
        dateEnded: "Oct 2021",
    },
    {
        title: 'Software Engineer',
        company: 'Microsoft',
        description: [
            "Implemented scalable distributed Microservice in .Net Core using C# and leveraged Azure Traffic Manager for load balancing across geographies.",
            "Worked on a very large set of data to handle more than 1M daily records by utilizing asynchronous programming & robust queue data structure.",
            "Developed a SaaS platform for automated architectural design, combining BIM automation with AI-assisted generation for buildings and interior layouts.",
            "Worked on an internal Web application for analyzing and summarizing user search behavior and results.",
            "Created a Companion App, an app to provide insights about smartphones when connected via USB to Windows desktop.",
        ],
        imageUrl: "/microsoft.png",
        skills: ["logos:python", "logos:dart", "logos:firebase", "logos:aws", 'logos:selenium'],
        dateStarted: "Oct 2015",
        dateEnded: "Oct 2019",
    },
    {
        title: 'Software Engineering Intern',
        company: 'Amazon',
        description: [
            "Designed and built back-end web service and front-end web page intended for use by fulfillment center operators to manage their associate's labor capabilities.",
            "Built back-end service using Amazon internal frameworks backed by Oracle SQL database.",
            "Built front-end web page using Spring MVC, Twitter bootstrap and Amazon internal frameworks.",
            "Worked on creating web widget to display keywords on video game landing pages.",
        ],
        imageUrl: "/amazon.jpg",
        skills: ["logos:python", "logos:dart", "logos:firebase", "logos:aws", 'logos:selenium'],
        dateStarted: "Jun 2015",
        dateEnded: "Sep 2015",
    },



]

// Add this new array to your data.ts file

// Add this new array to your data.ts file

export const featuredWorkData = [
    {
        title: "PaperAsh",
        tagline: "Private AI Journaling Companion",
        logoUrl: PaperAsh,
        description: "A secure, cross-platform journaling app that uses AI to help users reflect and grow. Features local-first data sync, rich text editing, and in-app subscriptions.",
        features: [
            "AI-powered chat & content beautification.",
            "Symbolic 'Burn' feature for emotional release.",
            "Premium subscriptions with RevenueCat.",
            "Offline support with local SQLite database.",
        ],
        tech: [
            { name: "React Native", icon: "logos:react" },
            { name: "Supabase", icon: "logos:supabase-icon" },
            { name: "RevenueCat", icon: "simple-icons:revenuecat" },
            { name: "Expo", icon: "logos:expo-icon" },
            { name: "SQLite", icon: "simple-icons:sqlite" },
            { name: "PostHog", icon: "simple-icons:posthog" },
        ],
        appStoreUrl: "https://apps.apple.com/us/app/paperash/6748613722",
        playStoreUrl: ""
    },
    {
        title: "SaffronAI",
        tagline: "AI-Powered Investment Analyzer",
        logoUrl: "https://www.saffronai.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.c61962eb.png&w=96&q=75",
        description: "A cross-platform app providing users with their portfolio analytics,financial scores and personalized wealth management tools.",
        features: [
            "Investment tracking through custom-built charts and metrics.",
            "Real-time updates and reminders via AWS SNS + FCM/APNs integration.",
            "User login flows with Firebase OTP and custom API-based verification.",
            "Deep linking and push notifications.",
        ],
        tech: [
            { name: "React Native", icon: "logos:react" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "Expo", icon: "logos:expo-icon" },
            { name: "AWS CloudWatch", icon: "logos:aws-cloudwatch" },
            { name: "AWS ", icon: "logos:aws" },

        ],
        appStoreUrl: "https://apps.apple.com/us/app/saffronai/id6741477526",
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.saffronai.saffronai",
    },
    {
        title: "InfoTik",
        tagline: "Social Media Application",
        logoUrl: "https://nacue.com/images/tlpteam/l_team_278.jpg",
        description: "A mobile app for a UK based startup, InfoTik, that allows users to share videos and photos, comment on posts, and interact with community.",
        features: [
            "Core features like user auth, video live feed, and commenting.",
            "Recommendation system for personalized content.",
            "Realtime data sync with Firebase.",
            "Redux for state management.",
        ],
        tech: [
            { name: "React Native", icon: "logos:react" },
            { name: "Javascript", icon: "simple-icons:javascript" },
            { name: "Firebase", icon: "simple-icons:firebase" },
            { name: "Expo", icon: "logos:expo-icon" },
            { name: "Redux", icon: "logos:redux" },
        ],
        appStoreUrl: null,
        playStoreUrl: "https://play.google.com/store/search?q=infotik&c=apps&hl=en_IN",
    },
] as const;






