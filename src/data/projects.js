export const projects = [
    {
        title: "Wild Rift Counter Lab",
        slug: "wild-rift-counter-lab",
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
        slug: "devhunter",
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
        slug: "car-rental-system",
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
