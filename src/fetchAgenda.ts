const agenda = [
    {
        "title": "Keynote: The Care and Feeding of Software Engineers",
        "speaker": "Heather Downing",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/keynote-the-care-and-feeding-of-software-engineers/",
        "tags": ["agile", "people", "soft-skills", "ethics"],
        "startTime": { "hour": 9, "minutes": 0 },
        "endTime": { "hour": 10, "minutes": 0 },
        "day": "wednesday"
    },
    {
        "title": "The next 5 years of ASP.NET Core",
        "speaker": "Ryan Nowak",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/the-next-5-years-of-asp-net-core/",
        "tags": ["net", "microsoft", "web"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "The Rise of Klintwalker – Mastering Your Inner Developer Part 2",
        "speaker": "Lars Klint",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/the-rise-of-klintwalker-mastering-your-inner-developer-part-2/",
        "tags": ["soft-skills"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "A brief history of Cloud",
        "speaker": "Alex Mackey",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/a-brief-history-of-cloud/",
        "tags": ["cloud", "fun"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "Going 0 to 100 with Kubernetes",
        "speaker": "Scott Holden",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/going-0-to-100-with-kubernetes/",
        "tags": ["net", "microservices", "microsoft", "t", "devops"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "Hack to the Future",
        "speaker": "Troy Hunt ",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/hack-to-the-future/",
        "tags": ["security"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Async demystified",
        "speaker": "Karel Zikmund",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/async-demystified/",
        "tags": ["net", "microsoft", "concurrency"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Getting Started with Cosmos DB + EF Core",
        "speaker": "Thiago Passos",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/getting-started-with-cosmos-db-ef-core/",
        "tags": ["net", "cloud", "database", "microsoft"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Continuous Intelligence: Keeping your AI Application in Production",
        "speaker": "Arif Wider",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/continuous-intelligence-keeping-your-ai-application-in-production/",
        "tags": [
            "big-data",
            "continuous-delivery",
            "machine-learning",
            "t",
            "devops",
            "methodology"
        ],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Modern JavaScript For Web Dinosaurs",
        "speaker": "Ryan Preece",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/modern-javascript-for-web-dinosaurs/",
        "tags": ["javascript", "web"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Blazor, a new framework for browser-based .NET apps",
        "speaker": "Steve Sanderson",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/blazor-a-new-framework-for-browser-based-net-apps/",
        "tags": ["net", "javascript", "web"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Understanding Git — Behind the Command Line",
        "speaker": "Enrico Campidoglio",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/understanding-git-behind-the-command-line/",
        "tags": ["t", "devops"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "What really matters",
        "speaker": "Jimmy Nilsson",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/what-really-matters/",
        "tags": [""],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Safer, Faster, Smarter - Simple patterns for better cloud native applications",
        "speaker": "Adam StephensenRebecca Lyons",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/safer-faster-smarter-simple-patterns-for-better-cloud-native-applications/",
        "tags": [
            "net",
            "architecture",
            "cloud",
            "microsoft",
            "security",
            "serverless"
        ],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Lightning Talks",
        "speaker": "Emad AlashiNelly SattariMegan MallinStephen Carter",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/lightning-ta/",
        "tags": ["languages", "fun", "soft-skills", "work-s", "t", "people"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "The Moon: Gateway to the Solar System",
        "speaker": "Richard Campbell",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/the-moon-gateway-to-the-solar-system/",
        "tags": [""],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "wednesday"
    },
    {
        "title": "Internals of Exceptions",
        "speaker": "Adam Furmanek",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/internals-of-exceptions/",
        "tags": ["net", "microsoft"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "wednesday"
    },
    {
        "title": "Building Great Teams",
        "speaker": "Donna Edwards",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/building-great-teams/",
        "tags": ["people", "soft-skills", "work-s"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "wednesday"
    },
    {
        "title": "Being cheap with the cloud",
        "speaker": "Aaron Powell",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/being-cheap-with-the-cloud/",
        "tags": ["architecture", "cloud", "web"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "wednesday"
    },
    {
        "title": "Dissecting Kubernetes (K8s) - An Intro to Main Components",
        "speaker": "Joshua Sheppard",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/dissecting-kubernetes-k8s-an-intro-to-main-components/",
        "tags": ["cloud"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "wednesday"
    },
    {
        "title": "Repeatable execution",
        "speaker": "Mark Seemann",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/repeatable-execution/",
        "tags": ["functional", "architecture"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "Innovation and Trends in Cloud",
        "speaker": "Julio Faerman",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/innovation-and-trends-in-cloud/",
        "tags": ["cloud"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "Chinafy your apps + Lessons you can steal from China",
        "speaker": "Adam Cogan",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/chinafy-your-apps-lessons-you-can-steal-from-china/",
        "tags": ["work-s", "soft-skills"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "Picking up the pieces - A look at how to run post incident reviews",
        "speaker": "Klee Thomas",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/picking-up-the-pieces-a-look-at-how-to-run-post-incident-reviews/",
        "tags": ["agile", "devops"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "Cloud Governance: Winning the battle between speed and control",
        "speaker": "Sonia Cuff",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/cloud-governance-winning-the-battle-between-speed-and-control/",
        "tags": ["cloud", "continuous-delivery", "microsoft"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "wednesday"
    },
    {
        "title": "GraphQL, gRPC or REST? Resolving the API Developer's Dilemma",
        "speaker": "Rob Crowley",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/graphql-grpc-or-rest-resolving-the-api-developers-dilemma/",
        "tags": ["architecture", "microservices", "web"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Building Trust in Teams",
        "speaker": "Richard Campbell",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/building-trust-in-teams/",
        "tags": ["people", "soft-skills", "work-s", "ui"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Using Flutter to develop cloud enabled mobile applications",
        "speaker": "Pooja BhaumikNick Randolph",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/using-flutter-to-develop-cloud-enabled-mobile-applications/",
        "tags": ["cross-pl", "mobile", "devops"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Cognitive biases in software development",
        "speaker": "Ian Hughes",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/cognitive-biases-in-software-development/",
        "tags": ["people", "soft-skills"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Unity for the enterprise developer",
        "speaker": "Matt Ellis",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/unity-for-the-enterprise-developer/",
        "tags": ["net", "languages", "gaming"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "wednesday"
    },
    {
        "title": "Pragmatic DevOps - How and Why",
        "speaker": "Damian Brady",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/pragmatic-devops-how-and-why/",
        "tags": ["devops"],
        "startTime": { "hour": 9, "minutes": 0 },
        "endTime": { "hour": 10, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "How to build web apps with Vue.js and friends",
        "speaker": "Richard Banks",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/how-to-build-web-apps-with-vue-js-and-friends/",
        "tags": ["javascript", "web"],
        "startTime": { "hour": 9, "minutes": 0 },
        "endTime": { "hour": 10, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "gRPC for ASP.NET Core, a new framework for lightspeed Web APIs",
        "speaker": "James Newton-King",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/grpc-for-asp-net-core-a-new-framework-for-lightspeed-web-apis/",
        "tags": ["net", "microservices", "microsoft"],
        "startTime": { "hour": 9, "minutes": 0 },
        "endTime": { "hour": 10, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "API team characteristics and best practices",
        "speaker": "Nahid Farrokhi",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/api-team-characteristics-and-best-practices/",
        "tags": ["architecture"],
        "startTime": { "hour": 9, "minutes": 0 },
        "endTime": { "hour": 10, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "Best practices for securing CI/CD pipeline",
        "speaker": "Victoria Almazova",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/best-practices-for-securing-ci-cd-pipeline/",
        "tags": ["security", "devops"],
        "startTime": { "hour": 9, "minutes": 0 },
        "endTime": { "hour": 10, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "Hidden gems in .NET Core 3",
        "speaker": "Damian Edwards",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/net-core-3-0/",
        "tags": ["net"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "Getting Started with Apache Spark",
        "speaker": "Kevin Feasel",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/getting-started-with-apache-spark/",
        "tags": ["big-data"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "Iterative metrics, dashboards and monitors",
        "speaker": "Carmel Hinks",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/iterative-metrics-dashboards-and-monitors/",
        "tags": ["devops"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "Static Sites, Dynamic microservices, & Azure: How we built Microsoft Docs and Learn",
        "speaker": "Dan Fernandez",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/static-sites-dynamic-microservices-azure-how-we-built-microsoft-docs-and-learn/",
        "tags": ["net", "cloud", "architecture", "javascript", "web", "devops"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "UX Design Fundamentals: What do your users really see",
        "speaker": "Billy Hollis",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/ux-design-fundamentals-what-do-your-users-really-see/",
        "tags": ["ux"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "C# 8 and Beyond",
        "speaker": "Filip Ekberg",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/c-8-and-beyond/",
        "tags": ["languages"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Monitoring a Global Multitenant Service",
        "speaker": "Magnus Mårtensson",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/monitoring-a-global-multitenant-service/",
        "tags": ["cloud"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Service degraded: Tackling burnout in the IT industry",
        "speaker": "Sonia Cuff",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/service-degraded-tackling-burnout-in-the-it-industry/",
        "tags": ["people", "soft-skills"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Busting the Func'ing Jargon",
        "speaker": "Daniel Chambers",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/busting-the-funcing-jargon/",
        "tags": ["net", "functional"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "How to do in-app chaos testing",
        "speaker": "Wesley Cabus",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/how-to-do-in-app-chaos-testing/",
        "tags": ["net", "testing"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Modern day C# development in Visual Studio 2019",
        "speaker": "Kevin Pilch",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/modern_day_csharp/",
        "tags": ["net", "microsoft"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Handling Angular Forms Without Losing Your Sanity",
        "speaker": "Jennifer Wadella",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/handling-angular-forms-without-losing-your-sanity/",
        "tags": ["javascript", "ui", "web"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Microservices for building an IDE – The innards of JetBrains Rider",
        "speaker": "Maarten Balliauw",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/microservices-for-building-an-ide-the-innards-of-jetbrains-rider/",
        "tags": ["net", "architecture", "microservices", "t"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Lightning Talks",
        "speaker": "Has AlTaiarNegar GhanbariMichael John PenaVatsalya Goel",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/lightning-talks-7/",
        "tags": [
            "big-data",
            "cloud",
            "database",
            "design",
            "fun",
            "machine-learning",
            "microsoft",
            "soft-skills",
            "work-s",
            "net",
            "ai"
        ],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Keeping your builds green using Docker",
        "speaker": "Jakob Ehn",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/keeping-your-builds-green-using-docker/",
        "tags": ["net", "cloud", "continuous-delivery", "devops"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Quantum Computing Concepts",
        "speaker": "John Azariah",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/quantum-computing-concepts/",
        "tags": ["fun"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "I Don’t Need No Stinkin’ Framework - I Don’t Need No Stinkin’ Framework - Mastering Shadow DOM",
        "speaker": "Martine Dowden",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/i-dont-need-no-stinkin-framework-i-dont-need-no-stinkin-framework-mastering-shadow-dom/",
        "tags": ["javascript", "ui", "web"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "Bank Grade Security",
        "speaker": "Kieran Jacobsen",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/bank-grade-security/",
        "tags": ["security"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "Apache Kafka Event streaming platform for .NET developers",
        "speaker": "Viktor Gamov",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/apache-kafka-event-streaming-platform-for-net-developers/",
        "tags": ["net", "cloud", "microservices"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "The future of .NET desktop development",
        "speaker": "Nico Vermeir",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/the-future-of-net-desktop-development/",
        "tags": ["net"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "thursday"
    },
    {
        "title": "Clean Architecture with ASP.NET Core 3.0",
        "speaker": "Jason Taylor",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/clean-architecture-with-asp-net-core-3-0/",
        "tags": ["net", "architecture"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "Beyond infrastructure as code DSLs",
        "speaker": "Jake Ginnivan",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/beyond-infrastructure-as-code-dsls/",
        "tags": ["continuous-delivery", "devops", "javascript", "t"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "Access All Areas: Making Accessibility More Accessible",
        "speaker": "André Lemos",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/access-all-areas-making-accessibility-more-accessible/",
        "tags": ["ai", "machine-learning", "cloud", "people"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "How to spot Agile BS!",
        "speaker": "Martin Hinshelwood",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/how-to-spot-agile-bs/",
        "tags": [
            "agile",
            "architecture",
            "continuous-delivery",
            "devops",
            "methodology"
        ],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "TypeScript - Beyond the Basics",
        "speaker": "Eric Potter",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/typescript-beyond-the-basics/",
        "tags": ["javascript", "languages"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "thursday"
    },
    {
        "title": "Thousands of concurrent connections with Azure SignalR Service",
        "speaker": "Nelly SattariStafford Williams",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/thousands-of-concurrent-connections-with-azure-signalr-service/",
        "tags": ["net", "cloud", "javascript", "serverless", "web"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Migrating and evolving your legacy applications by leveraging the power of Kubernetes",
        "speaker": "Shahid Iqbal",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/migrating-and-evolving-your-legacy-applications-by-leveraging-the-power-of-kubernetes/",
        "tags": ["net", "cloud", "continuous-delivery"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "A Tale Of Four Startups",
        "speaker": "​Liam Westley",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/a-tale-of-four-startups/",
        "tags": ["fun", "soft-skills", "work-s"],
        "startTime": { "hour": 17, "minutes": 40 },
        "endTime": { "hour": 18, "minutes": 40 },
        "day": "thursday"
    },
    {
        "title": "Keynote:  .NET Core the Free, Open Source Framework  for Web, Microservices, Big Data, Machine Learning and Desktop",
        "speaker": "Scott Hunter",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/.net-core-the-free-open-source-framework-for-web-microservices-big-data-machine-learning-and-desktop/",
        "tags": ["net"],
        "startTime": { "hour": 9, "minutes": 0 },
        "endTime": { "hour": 10, "minutes": 0 },
        "day": "friday"
    },
    {
        "title": "Empower Your Microservices with Istio Service Mesh",
        "speaker": "Hossam Barakat",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/empower-your-microservices-with-istio-service-mesh/",
        "tags": ["cloud", "microservices"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "DevOps for the Commodore 64: so what's your excuse?",
        "speaker": "Todd Whitehead",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/devops-for-the-commodore-64-so-whats-your-excuse/",
        "tags": ["agile", "cloud", "continuous-delivery", "fun", "microsoft", "t"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "Introduction to Angular 8",
        "speaker": "Alain Chautard",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/introduction-to-angular-8/",
        "tags": ["javascript", "web"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "AI in the battle against fakes.",
        "speaker": "Henk Boelman",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/ai-in-the-battle-against-fakes/",
        "tags": ["net", "machine-learning", "serverless", "devops"],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "Full Stack Accessibility, and the Business Case for being Inclusive",
        "speaker": "Larene Le Gassick",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/full-stack-accessibility-and-the-business-case-for-being-inclusive/",
        "tags": [
            "agile",
            "design",
            "fun",
            "mobile",
            "people",
            "ui",
            "ux",
            "web",
            "ethics"
        ],
        "startTime": { "hour": 10, "minutes": 20 },
        "endTime": { "hour": 11, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "Talk title: F# Code I Love",
        "speaker": "Don Syme",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/talk-title-f-code-i-love/",
        "tags": ["functional", "microsoft", "net"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "Opening Doors with JSON Web Tokens",
        "speaker": "Ben Dechrai",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/opening-doors-with-json-web-tokens/",
        "tags": ["fun", "iot", "security"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "Tackling Dreaded .Net Cold Starts When Going Serverless",
        "speaker": "Sarjeel Yusuf",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/tackling-dreaded-net-cold-starts-when-going-serverless/",
        "tags": ["net", "cloud", "serverless"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "Doing Infrastructure as Code? You Can Do Better",
        "speaker": "Effy EldenShohre Mansouri",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/doing-infrastructure-as-code-you-can-do-better/",
        "tags": ["cloud", "t", "devops"],
        "startTime": { "hour": 11, "minutes": 40 },
        "endTime": { "hour": 12, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "Dungeons, Dragons and Functions",
        "speaker": "Mathias Brandewinder",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/dungeons-dragons-and-functions/",
        "tags": ["functional", "languages", "machine-learning"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "Reverse Engineering a Classic Video Game",
        "speaker": "Tim Comport",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/reverse-engineering-a-classic-video-game/",
        "tags": ["net", "fun", "t", "methodology", "gaming"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "CSS Grid - What is this Magic?!",
        "speaker": "Amy Kapernick",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/css-grid-what-is-this-magic/",
        "tags": ["web"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "Lightning Talks",
        "speaker": "York WongAzi FarjadMartine DowdenDom WendenAmrit Puri",
        "location": "Room 6",
        "link": "https://ndcsydney.com/talk/lightning-talk/",
        "tags": ["functional", "javascript", "cloud", "ui", "ux", "ethics"],
        "startTime": { "hour": 13, "minutes": 40 },
        "endTime": { "hour": 14, "minutes": 40 },
        "day": "friday"
    },
    {
        "title": "EVE Online: Defending our players from hackers and the evolution of account security",
        "speaker": "Stefán Jökull Sigurðarson",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/eve-online-defending-our-players-from-hackers-and-the-evolution-of-account-security/",
        "tags": ["security", "gaming"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "friday"
    },
    {
        "title": "Building blocks of a predictive maintenance model",
        "speaker": "Jaya Mathew",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/building-blocks-of-a-predictive-maintenance-model/",
        "tags": [
            "big-data",
            "cloud",
            "machine-learning",
            "microsoft",
            "ai",
            "methodology"
        ],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "friday"
    },
    {
        "title": "Secure Your Kubernetes Containers",
        "speaker": "Hossam Barakat",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/secure-your-kubernetes-containers/",
        "tags": ["microservices", "security"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "friday"
    },
    {
        "title": "DataDevOps for the Modern Data Warehouse on Microsoft Azure",
        "speaker": "Lace Lofranco",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/datadevops-for-the-modern-data-warehouse-on-microsoft-azure/",
        "tags": ["big-data", "devops"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "friday"
    },
    {
        "title": "Testing doesn’t bite, unless it does",
        "speaker": "Blanka Krotilova",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/testing-doesnt-bite-unless-it-does-1/",
        "tags": ["fun", "testing", "ui"],
        "startTime": { "hour": 15, "minutes": 0 },
        "endTime": { "hour": 16, "minutes": 0 },
        "day": "friday"
    },
    {
        "title": "How to put a Penguin in a Cloud: Linux on Azure",
        "speaker": "Brendan Richards",
        "location": "Room 1",
        "link": "https://ndcsydney.com/talk/how-to-put-a-penguin-in-a-cloud-linux-on-azure/",
        "tags": ["cloud"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "Real-time Face Recognition With Microsoft Cognitive Services",
        "speaker": "Jernej Kavka",
        "location": "Room 2",
        "link": "https://ndcsydney.com/talk/real-time-face-recognition-with-microsoft-cognitive-services/",
        "tags": ["ai"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "Commuting like a developer",
        "speaker": "Anton Ball",
        "location": "Room 3",
        "link": "https://ndcsydney.com/talk/commuting-like-a-developer/",
        "tags": ["fun", "people", "soft-skills", "work-s"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "Serverless and App Service Security on Azure",
        "speaker": "Pratik KhasnabisMahesh Krishnan",
        "location": "Room 4",
        "link": "https://ndcsydney.com/talk/serverless-and-app-service-security-on-azure/",
        "tags": ["security", "cloud", "microservices", "serverless"],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "friday"
    },
    {
        "title": "DesignOps - How to get ideas out faster",
        "speaker": "Kristy Sachse",
        "location": "Room 5",
        "link": "https://ndcsydney.com/talk/designops-how-to-get-ideas-out-faster/",
        "tags": [
            "agile",
            "design",
            "people",
            "soft-skills",
            "ux",
            "devops",
            "methodology"
        ],
        "startTime": { "hour": 16, "minutes": 20 },
        "endTime": { "hour": 17, "minutes": 20 },
        "day": "friday"
    }
];

export default agenda;