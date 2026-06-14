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
            "A full-stack draft assistant that ranks champion recommendations using deterministic scoring, then optionally uses AI to explain the results.",
        highlights: [
            "Clean Architecture ASP.NET Core API",
            "Transparent multi-category recommendation engine",
            "React and TypeScript frontend with PostgreSQL",
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
            "A role-based IT recruitment platform with candidate, company, and administrator workflows.",
        highlights: [
            "177 automated tests",
            "Role and ownership authorization",
            "GitHub Actions CI",
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
            "An ASP.NET Core MVC application for browsing vehicles, creating reservations, and managing rental data.",
        highlights: [
            "User and administrator workflows",
            "Reservation management",
            "Responsive interface",
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
