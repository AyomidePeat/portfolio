import { ExperienceItem } from "@/types/experience";

export const experiences: ExperienceItem[] = [
    {
        slug: "nuru-solutions",
        company: "Nuru Solutions",
        image: "/images/nuru.jpg",
        summary:
            "Designed and maintained secure, scalable AWS architectures leveraging EC2, RDS, S3, and Lambda; achieving 99.9% uptime and reducing infrastructure costs by 20% through right-sizing, lifecycle policies, and workload optimization.",
        date: "2024 - Present",
        link: 'https://www.nuru.solutions',
        fullTitle: "Software Engineer",
        fullDate: "June 2024 - Present (Part time)",
        mission:
            "Nuru Solutions is a technology startup based in Kenya that collects data from smallholder farmers to provide them with insights and enable financial institutions and agribusinesses to serve them.",
            responsibilities: [
                {
                    title: "Team Coordination & Mentorship",
                    description:
                        "Coordinated a cross-functional team to deliver a a web application that implemented machine learning for automated crop boundary detection, improving mapping accuracy and reducing manual effort.",
                    skills: ["Team Coordination", "Mentorship",  "Project Management"],
                },
                {
                    title: "Cloud & System Architecture",
                    description:
                        "Architected a scalable, cloud-native infrastructure on AWS for high-frequency  data, ensuring high availability, Multi-AZ failover, and automated backups.",
                    skills: ["AWS", "Cloud Architecture", "Scalability", "System Design"],
                },
                {
                    title: "Backend Development & Data Management",
                    description:
                        "Collaborated to build secure, stateless APIs with Django and managed PostgreSQL databases(RDS) to store and process agricultural and IoT data reliably, enabling fault-tolerant data access.",
                    skills: ["Django", "Python", "PostgreSQL", "API Development", "Security"],
                },
                {
                    title: "IoT & Data Processing",
                    description:
                        "Designed and deployed IoT systems using soil moisture, temperature, and humidity sensors. Processed incoming data streams with AWS IoT Core, S3, for scalable analytics.",
                    skills: ["IoT", "Arduino", "AWS IoT Core", "Data Processing", "ESP32"],
                },
                {
                    title: "Frontend Integration & Visualization",
                    description:
                        "Collaborated to develop interactive dashboards with maps and charts.",
                    skills: ["JavaScript", "TypeScript", "Data Visualization", "Performance Optimization"],
                },
                {
                    title: "Quality Assurance & Deployment",
                    description:
                        "Managed testing, documentation, and training to deliver production-ready systems with zero critical bugs, ensuring smooth AWS deployment.",
                    skills: ["Quality Assurance", "Testing", "Documentation", "AWS Deployment",],
                },
            ],
            
            projects: [
                "ML-Powered Crop Boundary Detection",
                "IoT Data Collection & Analytics",
                "Cloud Infrastructure & Deployment Optimization",
                "Performance & Reliability Improvements",
                "Quality Assurance & Production Delivery",
            ],
            
            technicalSkills: [
                {
                    category: "Programming Languages & Frameworks",
                    description: "Core technologies used in backend, frontend, and ML development",
                    items: [
                        { name: "Python", detail: "Backend & Machine Learning" },
                        { name: "Django", detail: "Web & API Framework" },
                        { name: "Arduino", detail: "IoT Development" },
                        { name: "C/C++", detail: "IoT Logic" },
                        
                    ],
                },
                {
                    category: "Cloud & Infrastructure",
                    description: "Technologies used for cloud-native deployment and data processing",
                    items: [
                        { name: "AWS EC2", detail: "Compute resources" },
                        { name: "AWS S3", detail: "Object storage & versioning" },
                        { name: "AWS RDS (PostgreSQL)", detail: "Relational database management" },
                        { name: "AWS CloudFront", detail: "Low-latency data delivery" },
                    ],
                },
                {
                    category: "IoT & Data Science",
                    description: "Technologies for sensor data collection and ML model deployment",
                    items: [
                        { name: "AWS IoT Core", detail: "Sensor data ingestion" },
                        { name: "ESP32", detail: "Sensor data microcontroller" },
                        { name: "Soil & Environmental Sensors", detail: "Real-time data collection" },
                    ],
                },
            ],
            
    },
    {
        slug: "astrotwig",
        company: "Astrotwig Technologies",
        image: "/images/astrotwig.webp",
        summary:
            "Developed social media and engagement features for the AI powered social-audio streaming app. Improved app performance through caching, lazy loading, and code refactoring, boosting speed by 70% and reducing startup time by 30%.",
        date: "2023 - Present",
        link: 'https://www.astrotwig.com',
        fullTitle: "Mobile App Developer (Flutter)",
        fullDate: "June 2023 - Present",

        mission: "Astrotwig is a social-audio streaming service that allows users to  share music tastes through Astropod and share videos and images through tweegs. The app makes music discovery more social and interactive.",
        responsibilities: [
            {
                title: "AI & Mobile App Development",
                description: "Developed an AI-powered mobile app using Azure Cognitive Services for personalized playlist generation and mood-based music recommendations. Integrated sentiment analysis and emotion detection to tailor user experiences dynamically.",
                skills: ["Flutter", "Azure Cognitive Services", "Sentiment Analysis", "Emotion Detection"],
            },
            {
                title: "Performance Optimization",
                description: "Reduced app startup time by 30% and improved overall speed by 70% through code refactoring, lazy loading, asynchronous initialization, caching, and custom pagination.",
                skills: ["Flutter DevTools", "Lazy Loading", "Caching", "Asynchronous Programming", "API Optimization"],
            },
            {
                title: "Code Quality & Maintainability",
                description: "Improved code maintainability and stability using SOLID principles, modular architecture, and profiling performance-critical sections, ensuring smooth UI interactions and reliable control flow.",
                skills: ["SOLID Principles", "Modular Architecture", "Profiling", "Performance Optimization"],
            },
            {
                title: "Collaboration & Mentorship",
                description: "Worked cross-functionally with designers, product managers, QA testers, and backend developers. Mentored junior developers on best practices and performance optimization.",
                skills: ["Team Collaboration", "Mentorship", "Agile Practices", "Code Reviews"],
            },
        ],
        
        projects: [
            "AI-Powered Playlist Generation",
            "Mood-Based Music Recommendations",
            "Performance Refactoring and Optimization",
            "Cross-Platform App Deployment (Play Store & App Store)"
        ],
        
        technicalSkills: [
            
            {
                category: "Mobile Development",
                description: "Technologies for building performant, cross-platform mobile apps.",
                items: [
                    { name: "Flutter", detail: "Cross-platform mobile framework" },
                    { name: "Riverpod", detail: "State management" },
                    { name: "Dart", detail: "Programming language for Flutter" },
                ],
            },
            
        ],
        
    },
    {
        slug: "gadahere",
        company: "Gadahere Technologies",
        image: "/images/gadahere.png",
        summary:
            "Developed real-time chat functionality using WebSockets with under 200ms latency. Implemented offline message storage with sqflite, optimized media handling and caching, reducing download time by 40% and redundant server requests by 15%, while enhancing UI/UX for text, emojis, and media previews.",
        date: "2025",
        link: 'https://www.gadahere.com',
        fullTitle: "Mobile App Developer (Flutter)",
        fullDate: "March 2025 - August 2025",

        mission: "Gadahere is an all-in-one social platform that combines social media, e-commerce, and banking functionalities. It is designed to foster connections and build communities while enabling secure engagement and transactions.",
        responsibilities: [
            {
                title: "Real-Time Chat Development",
                description: "Developed and maintained real-time chat functionality using WebSockets, achieving sub-200ms latency for instant communication.",
                skills: ["WebSocket", "Real-Time Communication", "Flutter"],
            },
            {
                title: "Offline Data Persistence",
                description: "Integrated a local database using sqflite to persist chat messages and media paths, enabling 100% offline access.",
                skills: ["sqflite", "Offline Storage", "Data Persistence"],
            },
            {
                title: "Media Handling & Optimization",
                description: "Implemented media support for images, videos, audio, and documents with local storage, reducing average download time by 40% and redundant server requests by 15%.",
                skills: ["Media Management", "Caching", "Performance Optimization"],
            },
            {
                title: "UI/UX Enhancements",
                description: "Enhanced chat interface with dynamic rendering of text, emojis, and media previews for better user experience and responsiveness.",
                skills: ["UI/UX Design", "Flutter", "Dynamic Rendering"],
            },
        ],
        
        projects: [
            "Real-Time Chat System",
            "Offline Message Storage & Media Management",
            "Media Caching and Download Optimization",
            "Dynamic Chat UI with Emojis and Media Previews"
        ],
        
        technicalSkills: [
          
            {
                category: "Mobile & Database",
                description: "Technologies for building mobile apps and local data persistence.",
                items: [
                    { name: "Flutter", detail: "Cross-platform mobile framework" },
                    { name: "sqflite", detail: "Local SQLite database for offline storage" },
                    { name: "Riverpod", detail: "State management" },
                ],
            },
            {
                category: "Performance & Optimization",
                description: "Techniques to improve responsiveness and reduce latency.",
                items: [
                    { name: "Caching", detail: "Local storage caching for media" },
                    { name: "WebSocket", detail: "Real-time communication protocol" },
                    { name: "Download Optimization", detail: "Reduced redundant server requests" },
                ],
            },
        ],
        
        
    
    }];