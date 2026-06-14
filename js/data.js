const portfolioData = {
    en: {
        header: {
            name: "Karthikeyan Umesh",
            location: "Montreal, QC (Open to Relocation)",
            email: "karthikeyanumesh@gmail.com",
            linkedin: "https://linkedin.com/in/karthikeyanumesh",
            github: "https://github.com/naraianlegrand",
            toggleLangText: "FR",
            resumeText: "Download Resume",
            resumeLink: "#"
        },
        skills: {
            title: "Technical Skills",
            categories: [
                { name: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"] },
                { name: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda, RDS)", "Terraform", "Docker", "Linux"] },
                { name: "Frameworks", items: ["FastAPI", "Flask", "React", "Play Framework", ".NET"] },
                { name: "Tools & APIs", items: ["Git", "PostgreSQL", "DynamoDB", "Gemini API"] }
            ]
        },
        summary: {
            title: "Summary",
            points: [
                "Software Engineering graduate from Concordia University with experience in AWS, Python, Linux, and Terraform.",
                "AWS Certified Cloud Practitioner skilled in cloud infrastructure, serverless architectures, Infrastructure as Code, and REST APIs.",
                "Professionally fluent in English and French (MIFI), enabling full integration into bilingual tech environments.",
                "Demonstrated leadership as Grad Student Rep (CCSL) and VP ACE CS Club, along with a Best Paper Award from IFERP."
            ]
        },
        experience: {
            title: "Experience",
            items: [
                {
                    role: "Exam Invigilator",
                    company: "Concordia Univ",
                    date: "Apr 2026 - Present",
                    description: "Supervise exams and maintain academic integrity."
                },
                {
                    role: "Fundraiser",
                    company: "Fundraising Direct",
                    date: "Feb 2026 - Present",
                    description: "Outbound donor outreach and communication campaigns across Canada."
                },
                {
                    role: "ML & Automation Jr. Engineer",
                    company: "Inventeron",
                    date: "Jun 2023 - Apr 2024",
                    description: "Developed REST API using FastAPI/PostgreSQL for LMS data. Built a full-stack app (Flask/React/Docker) for GitHub data analysis."
                },
                {
                    role: "ML & Automation Intern",
                    company: "Inventeron",
                    date: "Mar 2023 - May 2023",
                    description: "Built Python pipelines, reduced downtime by 20%, and implemented AWS S3 retrieval."
                },
                {
                    role: "Web & Graphic Designer Intern",
                    company: "Knowbility Media",
                    date: "Jun 2020 - Oct 2020",
                    description: "Built SEO WordPress site resulting in +40% organic discovery."
                }
            ]
        },
        projects: {
            title: "Projects",
            items: [
                {
                    id: "ai-resume",
                    name: "Serverless AI Resume Tailor SaaS API",
                    date: "Jun 2026",
                    description: "Async FastAPI, Gemini API, Docker, AWS Lambda, PyPDF, Pydantic schemas.",
                    status: "completed"
                },
                {
                    id: "aws-3-tier",
                    name: "AWS 3-Tier Cloud Architecture",
                    description: "EC2, ALB, RDS, S3, VPC, IAM, Terraform IaC.",
                    status: "completed"
                },
                {
                    id: "serverless-api",
                    name: "Serverless REST API",
                    description: "AWS Lambda, API Gateway, DynamoDB.",
                    status: "completed"
                },
                {
                    id: "tubelytics",
                    name: "TubeLytics",
                    description: "Java, Play Framework, YouTube Data API analytics.",
                    status: "completed"
                },
                {
                    id: "ai-dotnet",
                    name: "AI Agents & .NET Ecosystem",
                    description: "Exploring autonomous AI agents within the .NET enterprise ecosystem.",
                    status: "coming-soon"
                }
            ]
        },
        certifications: {
            title: "Certifications",
            items: [
                { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "December, 2024" },
                { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "Scheduled 2026" }
            ]
        },
        leadership: {
            title: "Leadership & Extracurricular Activities",
            items: [
                { role: "Graduate Student Representative", organization: "CCSL, Concordia University", description: "Represented graduate student interests in university-level decision-making and collaborated with faculty on student-focused initiatives and funding discussions." },
                { role: "Executive Member", organization: "Filmmaking Club, Concordia University", description: "Organized workshops, film events, and student productions." },
                { role: "Vice President", organization: "ACE CS Club", description: "Team Lead of 20, orchestrated technical events, coding competitions, and student initiatives." },
                { role: "Secretary", organization: "Drama Club", description: "Directed a 25+ member team, securing victories in national competitions through dynamic event creation and participation." },
                { role: "National Award-Winning Short-Film Director", organization: "Indian Institute of Management", description: "Garnered top honors at IIM's national contest as the director of an acclaimed short film." }
            ]
        },
        publications: {
            title: "Publications & Awards",
            items: [
                { title: "A Regression Analysis of iPhone 11 Pricing Factors", venue: "2nd International Conference on Data Science and Artificial Intelligence (ICDSAI), California, USA, 2023 - SPRINGER SCOPUS", type: "Publication", description: "Published a Research Paper." },
                { title: "Best Paper Award", venue: "IFERP International Conference, Goa", description: "Topic: Product Price Detection Using Regression Models.", type: "Award" },
                { title: "Analysis of The Use of Big Data in Google", venue: "National Conference (NCACSE-2022) - IJSRSET", type: "Publication", description: "Published a Research Paper." }
            ]
        },
        contact: {
            title: "Contact",
            nameLabel: "Name",
            emailLabel: "Email",
            messageLabel: "Message",
            submitText: "Send Message"
        },
        subdomains: {
            title: "Sub-domains",
            description: "Explore my specialized projects and microsites. Each sub-domain represents a unique aspect of my work in cloud computing and software engineering.",
            comingSoonTitle: "Coming Soon",
            comingSoonDesc: "I'm currently working on several exciting sub-domains that will showcase different aspects of my cloud engineering expertise. These will include specialized tools, documentation, and interactive demos.",
            backText: "Back to Home"
        }
    },
    fr: {
        header: {
            name: "Karthikeyan Umesh",
            location: "Montréal, QC (Ouvert à la relocalisation)",
            email: "karthikeyanumesh@gmail.com",
            linkedin: "https://linkedin.com/in/karthikeyanumesh",
            github: "https://github.com/naraianlegrand",
            toggleLangText: "EN",
            resumeText: "Télécharger CV",
            resumeLink: "#"
        },
        skills: {
            title: "Compétences Techniques",
            categories: [
                { name: "Langages", items: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS"] },
                { name: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda, RDS)", "Terraform", "Docker", "Linux"] },
                { name: "Frameworks", items: ["FastAPI", "Flask", "React", "Play Framework", ".NET"] },
                { name: "Outils & APIs", items: ["Git", "PostgreSQL", "DynamoDB", "API Gemini"] }
            ]
        },
        summary: {
            title: "Résumé",
            points: [
                "Diplômé en génie logiciel de l'Université Concordia avec de l'expérience en AWS, Python, Linux et Terraform.",
                "Praticien Cloud AWS certifié, spécialisé dans l'infrastructure cloud, les architectures sans serveur (Serverless), l'IaC et les API REST.",
                "Parfaitement bilingue en anglais et en français (MIFI), permettant une intégration complète dans les environnements technologiques bilingues.",
                "Leadership démontré en tant que représentant des étudiants diplômés (CCSL) et VP du club ACE CS, avec un prix du meilleur article de l'IFERP."
            ]
        },
        experience: {
            title: "Expérience",
            items: [
                {
                    role: "Surveillant d'examen",
                    company: "Université Concordia",
                    date: "Avr 2026 - Présent",
                    description: "Supervision des examens et maintien de l'intégrité académique."
                },
                {
                    role: "Collecteur de fonds",
                    company: "Fundraising Direct",
                    date: "Fév 2026 - Présent",
                    description: "Sensibilisation des donateurs sortants et campagnes de communication à travers le Canada."
                },
                {
                    role: "Ingénieur junior en apprentissage automatique et automatisation",
                    company: "Inventeron",
                    date: "Juin 2023 - Avr 2024",
                    description: "Développement d'une API REST FastAPI/PostgreSQL. Création d'une application full-stack (Flask/React/Docker) pour l'analyse de données GitHub."
                },
                {
                    role: "Stagiaire en apprentissage automatique et automatisation",
                    company: "Inventeron",
                    date: "Mar 2023 - Mai 2023",
                    description: "Création de pipelines Python, réduction des temps d'arrêt de 20%, récupération AWS S3."
                },
                {
                    role: "Stagiaire en conception Web/Graphique",
                    company: "Knowbility Media",
                    date: "Juin 2020 - Oct 2020",
                    description: "Création d'un site WordPress optimisé SEO (+40% de découverte organique)."
                }
            ]
        },
        projects: {
            title: "Projets",
            items: [
                {
                    id: "ai-resume",
                    name: "API SaaS Serverless d'adaptation de CV par l'IA",
                    date: "Juin 2026",
                    description: "FastAPI asynchrone, API Gemini, Docker, AWS Lambda, PyPDF, schémas Pydantic.",
                    status: "completed"
                },
                {
                    id: "aws-3-tier",
                    name: "Architecture Cloud AWS à 3 niveaux",
                    description: "EC2, ALB, RDS, S3, VPC, IAM, Terraform IaC.",
                    status: "completed"
                },
                {
                    id: "serverless-api",
                    name: "API REST Serverless",
                    description: "AWS Lambda, API Gateway, DynamoDB.",
                    status: "completed"
                },
                {
                    id: "tubelytics",
                    name: "TubeLytics",
                    description: "Java, Play Framework, analyse d'API de données YouTube.",
                    status: "completed"
                },
                {
                    id: "ai-dotnet",
                    name: "Agents d'IA et écosystème .NET",
                    description: "Exploration des agents d'IA autonomes dans l'écosystème d'entreprise .NET.",
                    status: "coming-soon"
                }
            ]
        },
        certifications: {
            title: "Certifications",
            items: [
                { name: "Praticien Cloud AWS Certifié", issuer: "Amazon Web Services", date: "Décembre 2024" },
                { name: "Architecte de Solutions AWS Certifié – Associé", issuer: "Amazon Web Services", date: "Prévu pour 2026" }
            ]
        },
        leadership: {
            title: "Leadership & Activités Extracurriculaires",
            items: [
                { role: "Représentant des étudiants diplômés", organization: "CCSL, Université Concordia", description: "Représentation des intérêts des étudiants diplômés dans les décisions universitaires." },
                { role: "Membre Exécutif", organization: "Club de réalisation de films, Université Concordia", description: "Organisation d'ateliers, d'événements cinématographiques et de productions étudiantes." },
                { role: "Vice-président", organization: "Club ACE CS", description: "Chef d'équipe de 20 personnes, orchestration d'événements techniques et d'initiatives étudiantes." },
                { role: "Secrétaire", organization: "Club de Théâtre", description: "Direction d'une équipe de 25 membres, remportant des victoires dans des compétitions nationales." },
                { role: "Réalisateur de court-métrage primé", organization: "Indian Institute of Management", description: "A remporté les plus grands honneurs au concours national." }
            ]
        },
        publications: {
            title: "Publications & Prix",
            items: [
                { title: "Une analyse de régression des facteurs de tarification de l'iPhone 11", venue: "2e Conférence internationale sur la science des données et l'IA (ICDSAI), Californie, USA, 2023 - SPRINGER SCOPUS", type: "Publication", description: "Article de recherche publié." },
                { title: "Prix du meilleur article", venue: "Conférence internationale IFERP, Goa", description: "Sujet : Détection du prix des produits à l'aide de modèles de régression.", type: "Prix" },
                { title: "Analyse de l'utilisation du Big Data chez Google", venue: "Conférence nationale (NCACSE-2022) - IJSRSET", type: "Publication", description: "Article de recherche publié." }
            ]
        },
        contact: {
            title: "Contact",
            nameLabel: "Nom",
            emailLabel: "Courriel",
            messageLabel: "Message",
            submitText: "Envoyer le message"
        },
        subdomains: {
            title: "Sous-domaines",
            description: "Explorez mes projets spécialisés et microsites. Chaque sous-domaine représente un aspect unique de mon travail en ingénierie cloud.",
            comingSoonTitle: "Bientôt Disponible",
            comingSoonDesc: "Je travaille actuellement sur plusieurs sous-domaines passionnants qui mettront en valeur mon expertise. Cela inclura des outils spécialisés, de la documentation et des démos.",
            backText: "Retour à l'accueil"
        }
    }
};
