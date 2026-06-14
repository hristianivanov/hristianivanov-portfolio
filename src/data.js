export const links = {
    github: "https://github.com/hristianivanov",
    linkedin: "https://www.linkedin.com/in/hristian-ivanov",
    email: "mailto:hristianfancha@gmail.com",
    cv: "/cv/hristian_ivanov_cv.pdf",
    softUni: "https://softuni.bg/",
};

export const projects = [
    {
        title: "Wild Rift Counter Lab",
        summary:
            "A full-stack application that analyzes champion matchups and recommends picks based on configurable scoring rules.",
        highlights: [
            "ASP.NET Core API following Clean Architecture principles",
            "Recommendation engine combining matchup and team composition factors",
            "React and TypeScript frontend backed by PostgreSQL",
        ],
        tags: [
            "ASP.NET Core Web API",
            "Clean Architecture",
            "React",
            "TypeScript",
            "PostgreSQL",
            "xUnit",
        ],
        imageAlt: "Wild Rift Counter Lab draft assistant",
        visualLabel: "WILD RIFT / COUNTER LAB",
        source: "https://github.com/hristianivanov/WildRift-CounterLab",
        demo: "https://wild-rift-app-mocha.vercel.app",
    },
    {
        title: "DevHunter",
        summary:
            "A recruitment platform built with ASP.NET Core MVC that allows candidates, companies, and administrators to manage the hiring process through dedicated workflows.",
        highlights: [
            "Role-based authorization with separate user experiences",
            "Automated testing covering core business logic",
            "Continuous integration with GitHub Actions",
        ],
        tags: [".NET 8", "ASP.NET Core MVC", "EF Core", "SQL Server", "NUnit"],
        image: "/imgs/projects/DevHunter-thumbnail.png",
        imageAlt: "DevHunter recruitment platform homepage",
        source: "https://github.com/hristianivanov/ITJob-Finder-ASP.NET-MVC",
        demo: "https://devhuntershowcase.vercel.app/",
    },
    {
        title: "Car Rental System",
        summary:
            "A car rental application where users can browse available vehicles, create reservations, and manage their bookings.",
        highlights: [
            "ASP.NET Core MVC application with Entity Framework Core",
            "Separate user and administrator workflows",
            "Vehicle, booking, and reservation management",
        ],
        tags: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
        image: "/imgs/projects/CarRentalSystem-thumbnail.png",
        imageAlt: "Car Rental System web application",
        source: "https://github.com/hristianivanov/Car-Rental-Web-App",
    },
];

export const skillGroups = [
    {
        title: "Backend",
        skills: ["C#", ".NET 8", "ASP.NET Core MVC", "ASP.NET Core Identity"],
    },
    {
        title: "Data",
        skills: ["Entity Framework Core", "SQL Server", "LINQ"],
    },
    {
        title: "Quality & Delivery",
        skills: ["NUnit", "Moq", "GitHub Actions", "Git", "CI/CD"],
    },
];

export const certificates = [
    "Programming Basics - November 2021 - Certificate.jpeg",
    "Programming Fundamentals with Csharp - May 2022 - Certificate.jpeg",
    "Csharp Advanced - September 2022 - Certificate.jpeg",
    "Csharp OOP - October 2022 - Certificate.jpeg",
    "MS SQL - January 2023 - Certificate.jpeg",
    "Entity Framework Core - February 2023 - Certificate.jpeg",
    "ASP.NET Fundamentals - May 2023 - Certificate.jpeg",
    "ASP.NET Advanced - June 2023 - Certificate.jpeg",
    "HTML & CSS - September 2023 - Certificate.jpeg",
    "JS Front-End - October 2023 - Certificate.jpeg",
    "Containers and Cloud - January 2024 - Certificate.jpeg",
    "Software Engineering and DevOps - February 2024 - Certificate.jpeg",
    "Diploma for Csharp Web Developer.jpeg",
];
