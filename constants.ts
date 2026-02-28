import { Category, CourseLevel } from './types';

export const COURSE_DATA: Category[] = [
  {
    id: 'recommended',
    title: '🚀 Key Recommendations',
    description: 'Curated paths specifically for Machain Learning, AI, and Cloud Computing.',
    courses: [

      {
        id: 'ibm-ai-intro',
        title: 'Getting Started with Artificial Intelligence',
        topics: [
          'Foundations of AI',
          'AI Applications',
          'Algorithmic Concepts',
          'Generative AI',
          'Prompt Engineering',
          'Real-World Case Studies',
          'Hands-on with Generative AI Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-artificial-intelligence',
        isRecommended: true,
        details: 'This 3-hour course covers essential Artificial Intelligence concepts, common AI applications, the basics of generative AI, and prompt engineering. Learners get practical experience by working directly with AI tools to refine and create prompts. Completion earns an IBM Digital Badge via Credly.',
        prerequisites: ['No prior experience required'],
      },

      {
        id: 'fcc-python',
        title: 'Python Certification',
        topics: [
          'Python Fundamentals',
          'Control Structures',
          'Data Structures',
          'Functions',
          'OOP in Python',
          'File and API Operations',
          'Testing and Debugging',
          'Portfolio Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/python-v9/',
        isRecommended: true,
        details: 'A project-based Python certification that takes you from absolute beginner to job-ready fundamentals. Interactive challenges and projects build skill in variables, functions, OOP, file operations, API use, and debugging. The course concludes with several real-world projects for demonstrable Python fluency and awards a certification upon completion.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ml-concepts',
        title: 'Introduction to Machine Learning Concepts',
        topics: ['ML Fundamentals', 'ML Types', 'Training/Evaluation', 'Deep Learning'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-machine-learning/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand the core principles of ML: Regression, Classification, and Clustering, and how to evaluate models.',
        prerequisites: ['Basic Math'],
        isRecommended: true,

      },
      {
        id: 'ibm-cybersecurity-intro',
        title: 'Getting Started with Cybersecurity',
        topics: [
          'Cybersecurity Fundamentals',
          'Key Elements & Threats',
          'Data Privacy',
          'CIA Triad Model',
          'Security Evaluation',
          'Cybersecurity Careers',
          'Essential Skills for Cyber Roles',
          'Intro to Security Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-cybersecurity',
        isRecommended: true,
        details: 'This course provides foundational knowledge of cybersecurity including data protection, privacy, security evaluation using the CIA triad, and current cyber threats. Learners explore skills required for cybersecurity jobs and understand fundamental tools. Completing the course earns an IBM digital badge via Credly.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'web-start',
        title: 'Get started with web development using Visual Studio Code',
        topics: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Browser DevTools'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/get-started-with-web-development/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand how the internet works and build your first static website using VS Code.',
        prerequisites: ['No prior experience required'],
        isRecommended: true

      },
      {
        id: 'dlai-rag',
        title: 'Retrieval Augmented Generation (RAG) Course',
        topics: [
          'Retrieval-Augmented Generation (RAG)',
          'Document Retrieval',
          'Vector Databases (Weaviate)',
          'Keyword and Semantic Search',
          'Prompt Engineering',
          'Hybrid Retrieval',
          'Evaluation & Monitoring',
          'Production Deployment'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.deeplearning.ai/courses/retrieval-augmented-generation-rag/',
        isRecommended: true,
        details: 'Master the practical design and implementation of RAG systems for real-world applications. The course covers every core RAG component: document retrieval, vector/semantic search, database integration, prompt augmentation, evaluation, and moving projects from prototype to production—including unique tradeoffs, error analysis, and performance tuning.',
        prerequisites: [
          'Intermediate Python skills',
          'Basic generative AI concepts',
          'basics Linear algebra'
        ],
      },
      {
        id: 'ibm-data-intro',
        title: 'Getting Started with Data',
        topics: [
          'Basics of Data',
          'Data Sources & Types',
          'Data Collection',
          'Data Quality & Cleaning',
          'Data Visualization',
          'Data Ethics & Privacy',
          'Intro to Data-Driven Roles'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-14F2691E3A32?ngo-id=0302',
        isRecommended: true,
        details: 'An entry-level, ~3-hour course presenting foundational concepts in data science. You’ll explore what data is, the different types of data, why quality and cleaning matter, basic data visualization, and jobs in the data field. Successfully finishing the course earns an IBM SkillsBuild digital badge.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'rec-genai-intro',
        title: 'Introduction to Generative AI and Agents',
        topics: ['Generative AI', 'LLMs', 'Prompting', 'AI Agents', 'Agentic AI'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-generative-ai/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        details: 'Understand how Large Language Models (LLMs) work, how to craft effective prompts, and the emerging field of autonomous AI agents.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'fcc-js',
        title: 'JavaScript Certification',
        topics: [
          'JavaScript Basics',
          'Data Structures',
          'ES6 Features',
          'Functions and Scope',
          'DOM Manipulation',
          'Object-Oriented Programming',
          'APIs and Fetch',
          'Test-Driven Development',
          'Frontend Project-Building'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/javascript-v9/',
        isRecommended: true,
        details: 'A comprehensive, hands-on program covering JavaScript from fundamentals to more advanced features like ES6, OOP, and APIs. Lessons combine interactive coding challenges, quizzes, and real-world projects (such as calculator and drum machine apps), ensuring strong foundations in JS for front-end development. Completion awards a recognized JavaScript certification.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'cloud-intro',
        title: 'Introduction to Cloud Infrastructure: Describe Cloud Concepts',
        topics: ['Cloud Computing', 'Shared Responsibility Model', 'Azure Basics'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Explains IaaS, PaaS, SaaS models, and the benefits of cloud scalability and high availability.',
        prerequisites: ['No prior experience required'],
        isRecommended: true,

      },

      {
        id: 'py-vscode',
        title: 'Getting Started with Python in VS Code',
        topics: ['Python Setup', 'VS Code', 'Debugging', 'Virtual Environments'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/shows/visual-studio-code/getting-started-with-python-in-vs-code-official-video?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Learn to use the Python extension for VS Code, including linting, formatting, and running Jupyter notebooks.',
        prerequisites: ['No prior experience required'],
        isRecommended: true,

      },
      {
        id: 'ibm-llm-intro',
        title: 'Introduction to Large Language Models',
        topics: [
          'Overview of LLMs',
          'IBM Granite Models',
          'Prompt Engineering',
          'LLM Use Cases (Customer Service, Content Creation)',
          'Model Capabilities & Limitations',
          'Practical LLM Guidance',
          'Simulation with IBM Granite'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/MDL-568?ngo-id=0302',
        isRecommended: true,
        details: 'A beginner-level, 1.5-hour course introducing large language models (LLMs), including hands-on use with IBM Granite models. Learn LLM concepts, explore prompting strategies for targeted outcomes, and apply LLMs in real-world scenarios such as customer service and content creation. Includes a guided simulation on crafting blog content using Granite.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'fcc-responsive-web',
        title: 'Responsive Web Design Certification',
        topics: [
          'HTML',
          'CSS',
          'Accessibility',
          'Modern Layouts',
          'Semantic HTML',
          'Responsive Design',
          'SEO Fundamentals',
          'Forms and Tables',
          'Project-Based Learning (Survey Form, Product Landing Page, etc.)'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/responsive-web-design-v9/',
        isRecommended: true,
        details: 'This self-paced, certification-track course teaches you the fundamentals of user-friendly, accessible web development using HTML and CSS. You learn through interactive labs and build multiple real-world projects (survey forms, landing pages, technical docs) to showcase your skills. The program emphasizes best practices in design and web accessibility, preparing you for modern front-end roles.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ml-cert',
        title: 'Microsoft Certified: Azure Data Scientist Associate',
        topics: ['Data Science', 'ML Models', 'MLflow', 'Azure AI Services', 'Python'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/credentials/certifications/azure-data-scientist/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Certification path for data scientists applying their knowledge of data exploration and model training on Azure.',
        prerequisites: ['DP-100 Skills'],
        isRecommended: true,

      },
      {
        id: 'ibm-cybersecurity-fund',
        title: 'Cybersecurity Fundamentals',
        topics: [
          'Cybersecurity Concepts',
          'Types of Attacks',
          'Threat Groups',
          'Risk Management',
          'Cryptography',
          'Social Engineering',
          'Case Studies',
          'Incident Response',
          'Cybersecurity Careers'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/cybersecurity-fundamentals',
        isRecommended: true,
        details: 'A foundational program for understanding cybersecurity threats, strategies, and practices. Learn the landscape of digital threats, cryptographic protections, real-world attack cases, incident response frameworks, and job market landscape. The course includes hands-on evaluation of threats/scenarios and is designed for further upskilling or entry roles. Earn an IBM Digital Badge on completion.',
        prerequisites: ['No prior experience required'],
      },

      {
        id: 'fcc-backend-apis',
        title: 'Back End Development and APIs Certification',
        topics: [
          'Node.js',
          'Express.js',
          'REST APIs',
          'MongoDB',
          'CRUD Operations',
          'Authentication',
          'Testing and Debugging',
          'Project-Based Backend Apps'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/',
        isRecommended: true,
        details: 'A beginner-friendly full stack curriculum focused on server-side and API development with Node.js, Express.js, and MongoDB. You learn to build and test RESTful APIs, perform CRUD operations, manage authentication, and deploy real-world applications. The course is project-based and includes a certification on completion.',
        prerequisites: [
          'Basic JavaScript'
        ],
      },

      {
        id: 'fcc-relational-db',
        title: 'Relational Databases Certification',
        topics: [
          'Relational Database Design',
          'SQL',
          'PostgreSQL',
          'Normalization',
          'Data Modeling',
          'CRUD Operations',
          'Advanced Queries (Joins, Aggregation)',
          'Database Security',
          'Real-World Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/relational-databases-v9/',
        isRecommended: true,
        details: 'This hands-on certification teaches you how to design, query, and manage relational databases with SQL and PostgreSQL. Lessons progress from ER modeling and normalization basics to advanced query techniques, security, and project deployment. You build several real-world projects for portfolio proof and certification.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ibm-cloud-fundamentals',
        title: 'Cloud Computing Fundamentals (Earn a credential!)',
        topics: [
          'Cloud Computing Basics',
          'Types of Cloud Services (IaaS, PaaS, SaaS)',
          'Deployment Models',
          'Virtualization and Containers',
          'Cloud Security and Compliance',
          'Practical Cloud Applications',
          'Cloud Career Paths'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-2EC3A305F2C3?ngo-id=0302',
        isRecommended: true,
        details: 'This ~3-hour credential-earning course covers foundational cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment strategies, security requirements, and real-world cloud solutions. Prepares you for further cloud certifications and offers a digital badge on completion.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'fcc-frontend-libraries',
        title: 'Front End Development Libraries Certification',
        topics: [
          'React',
          'Redux',
          'Bootstrap',
          'jQuery',
          'SASS',
          'UI Component Building',
          'State Management',
          'Single Page Apps',
          'React Project Labs'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.freecodecamp.org/learn/front-end-development-libraries-v9/',
        isRecommended: true,
        details: 'An intermediate, project-based certification on the key libraries in modern front-end web development. You’ll develop hands-on proficiency in React and Redux patterns, use Bootstrap and jQuery for rapid UI features, practice SASS styling, and build production-grade front-end apps through guided projects. Certification validates your ability to design, build, and deploy scalable interfaces.',
        prerequisites: [
          'Basic JavaScript',
          'HTML/CSS familiarity'
        ],
      }
    ]
  },
  {
    id: 'microsoft-learn',
    title: '⊞ Microsoft Learn — Featured Paths',
    description: 'Official Microsoft courses: AI, Cloud, Dev, Python, C#, and more. Free, self-paced, and industry-recognized.',
    courses: [
      {
        id: 'ms-az900-cert',
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        topics: ['Azure Fundamentals', 'Cloud Concepts', 'Azure Services', 'Security', 'Compliance', 'Cost Management'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        isMicrosoft: true,
        details: 'The most popular cloud certification for beginners. Validates core Azure knowledge including cloud concepts, services, security, and pricing. Industry-recognized and globally respected by employers. Free learning path included.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ms-ai-900-path',
        title: 'Azure AI Fundamentals (AI-900) Learning Path',
        topics: ['AI Fundamentals', 'Machine Learning', 'Computer Vision', 'NLP', 'Generative AI', 'Azure AI Services'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        isRecommended: true,
        isMicrosoft: true,
        details: 'The official Microsoft Learning Path for the AI-900 exam. Covers machine learning, computer vision, NLP, generative AI, and responsible AI. Free, self-paced, and earns a globally recognized certification upon exam completion.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ms-python-beginner',
        title: 'Python for Beginners',
        topics: ['Python Basics', 'Variables', 'Functions', 'Lists', 'Loops', 'VS Code', 'Modules'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/beginner-python/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Microsoft\'s official beginner Python path featuring short video lessons and hands-on exercises. Covers all Python essentials: variables, data types, lists, loops, functions, and file I/O—ideal for first-time coders.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ms-github-copilot-intro',
        title: 'Introduction to GitHub Copilot',
        topics: ['GitHub Copilot', 'AI Pair Programming', 'Code Generation', 'VS Code', 'Productivity', 'Testing'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/introduction-to-github-copilot/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Learn how GitHub Copilot (by Microsoft/GitHub) uses AI to generate code, write tests, explain logic, and automate repetitive tasks. Boost development speed from day one across any language in VS Code.',
        prerequisites: ['Basic programming knowledge'],
      },
      {
        id: 'ms-typescript-path',
        title: 'Build JavaScript Applications with TypeScript',
        topics: ['TypeScript', 'Static Types', 'Interfaces', 'Generics', 'Enums', 'Modules', 'Decorators'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-typescript/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Master TypeScript—Microsoft\'s own language that adds static typing to JavaScript. Learn interfaces, generics, enums, modules, and type safety to write robust, large-scale applications.',
        prerequisites: ['JavaScript Basics'],
      },
      {
        id: 'ms-ai-agents',
        title: 'Get Started with AI Agent Development on Azure',
        topics: ['AI Agents', 'Azure AI Foundry', 'Semantic Kernel', 'AutoGen', 'Tool Use', 'Agentic Workflows'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/ai-agent-fundamentals/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Understand what AI agents are and how to build them on Azure. Covers Semantic Kernel, AutoGen, Azure AI Agent Service, multi-agent patterns, tool integration, and deployment best practices.',
        prerequisites: ['Basic Python', 'Generative AI Concepts'],
      },
      {
        id: 'ms-foundry-sdk',
        title: 'Develop an AI App with the Microsoft Foundry SDK',
        topics: ['Azure AI Foundry', 'AI App Development', 'LLMs', 'REST APIs', 'Prompt Flow', 'Deployment'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/ai-foundry-sdk/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Build fully functional AI applications using the Azure AI Foundry SDK. Deploy LLMs, manage prompts, call AI APIs, and monitor your app end-to-end—complete with hands-on Azure exercises.',
        prerequisites: ['Python Basics'],
      },
      {
        id: 'ms-csharp-foundations',
        title: 'C# Foundations for Absolute Beginners',
        topics: ['C# Syntax', 'Variables', 'Methods', 'OOP', 'Console Apps', '.NET', 'Debugging'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/get-started-c-sharp-part-1/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Start from zero with C# and .NET. Microsoft\'s official path teaches variables, data types, control flow, methods, and OOP principles with interactive browser-based coding exercises—no setup required.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ms-ml-azure-path',
        title: 'Create Machine Learning Models on Azure',
        topics: ['Azure Machine Learning', 'Training', 'MLflow', 'Automated ML', 'Pipelines', 'Model Deployment'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/training/paths/create-machine-learn-models/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        isMicrosoft: true,
        details: 'End-to-end path for building, training, evaluating, and deploying ML models using Azure Machine Learning. Covers Automated ML, MLflow experiment tracking, and pipeline orchestration.',
        prerequisites: ['Python', 'Basic ML Concepts'],
      },
      {
        id: 'ms-power-bi',
        title: 'Get Started Building with Power BI',
        topics: ['Power BI Desktop', 'Data Visualization', 'Reports', 'Dashboards', 'DAX', 'Data Modeling'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Learn to create interactive charts, reports, and dashboards with Power BI Desktop. Understand the full data workflow from import to insight sharing—the #1 BI tool used by enterprises worldwide.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ms-devops',
        title: 'Evolve Your DevOps Practices',
        topics: ['DevOps', 'Azure DevOps', 'CI/CD', 'Git', 'GitHub Actions', 'Agile', 'Automation'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/paths/evolve-your-devops-practices/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Understand DevOps culture and implement it with Azure DevOps. Covers version control with Git, build/release pipelines, CI/CD automation, and agile planning boards.',
        prerequisites: ['Basic programming knowledge'],
      },
      {
        id: 'ms-responsible-ai',
        title: 'Responsible Generative AI with Microsoft Foundry',
        topics: ['Responsible AI', 'Content Safety', 'Bias Mitigation', 'AI Ethics', 'Evaluation', 'Azure AI Foundry'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/en-us/training/modules/responsible-ai-studio/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        isRecommended: true,
        isMicrosoft: true,
        details: 'Learn to build and deploy responsible generative AI using Azure AI Foundry. Covers content filtering, bias detection, evaluation frameworks, and Microsoft\'s Responsible AI Standard—crucial for production AI.',
        prerequisites: ['Basic Generative AI Knowledge'],
      },
      {
        id: 'ms-prepare-ai-dev',
        title: 'Plan and Prepare to Develop AI Solutions on Azure',
        topics: ['Azure AI Services', 'AI Solution Architecture', 'Resource Planning', 'SDK Setup', 'Security', 'Monitoring'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        isRecommended: true,
        isMicrosoft: true,
        details: 'The essential first step before building any Azure AI solution. Covers resource provisioning, SDK configuration, authentication, cost estimation, and monitoring setup for Azure AI projects.',
        prerequisites: ['Azure Basics'],
      },
    ],
  },
  {
    id: 'ai-genai',
    title: 'Artificial Intelligence & Generative AI',
    description: 'Master the future of technology with courses on LLMs, Copilot, and Azure AI.',
    courses: [
      {
        id: 'dlai-agentic-ai',
        title: 'Agentic AI with Andrew Ng',
        topics: [
          'Agentic Design Patterns',
          'Reflection',
          'Tool Use',
          'Planning',
          'Multi-Agent Workflows',
          'LLM Integration',
          'Tool/API Integration',
          'Evaluation & Optimization',
          'Production Deployment'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.deeplearning.ai/courses/agentic-ai/',
        isRecommended: true,
        details: 'Gain practical skills to build agentic AI systems—AI that takes iterative, multi-step actions based on workflows, tool use, and self-evaluation. The course covers foundational design patterns, tool integration, multi-agent orchestration, and system evaluation/optimization, preparing you to develop and deploy production-grade agentic applications.',
        prerequisites: [
          'Intermediate Python programming',
          'Basic understanding of LLMs and APIs'
        ],
      },
      {
        id: 'dlai-rag',
        title: 'Retrieval Augmented Generation (RAG) Course',
        topics: [
          'Retrieval-Augmented Generation (RAG)',
          'Document Retrieval',
          'Vector Databases (Weaviate)',
          'Keyword and Semantic Search',
          'Prompt Engineering',
          'Hybrid Retrieval',
          'Evaluation & Monitoring',
          'Production Deployment'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.deeplearning.ai/courses/retrieval-augmented-generation-rag/',
        isRecommended: true,
        details: 'Master the practical design and implementation of RAG systems for real-world applications. The course covers every core RAG component: document retrieval, vector/semantic search, database integration, prompt augmentation, evaluation, and moving projects from prototype to production—including unique tradeoffs, error analysis, and performance tuning.',
        prerequisites: [
          'Intermediate Python skills',
          'Basic generative AI concepts',
          'High school–level math'
        ],
      },
      {
        id: 'ai-intro',
        title: 'Introduction to AI',         // meeeeeeeeeeeeeee
        topics: ['AI Concepts', 'Machine Learning', 'Azure Services', 'AI Solutions'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/paths/introduction-to-ai-on-azure/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Get started with Artificial Intelligence on Azure. Learn about Computer Vision, NLP, and Document Intelligence services.',
        prerequisites: ['No prior experience required'],
      },

      {
        id: 'ai-genai-intro',
        title: 'Introduction to Generative AI and Agents', ///////kkkkriiiim
        topics: ['Generative AI', 'LLMs', 'Prompting', 'AI Agents', 'Agentic AI'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-generative-ai/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Explore the fundamentals of Generative AI, including how models are trained and how to use them responsibly.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ibm-llm-intro',
        title: 'Introduction to Large Language Models',
        topics: [
          'Overview of LLMs',
          'IBM Granite Models',
          'Prompt Engineering',
          'LLM Use Cases (Customer Service, Content Creation)',
          'Model Capabilities & Limitations',
          'Practical LLM Guidance',
          'Simulation with IBM Granite'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/MDL-568?ngo-id=0302',
        isRecommended: true,
        details: 'A beginner-level, 1.5-hour course introducing large language models (LLMs), including hands-on use with IBM Granite models. Learn LLM concepts, explore prompting strategies for targeted outcomes, and apply LLMs in real-world scenarios such as customer service and content creation. Includes a guided simulation on crafting blog content using Granite.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ibm-ai-intro',
        title: 'Getting Started with Artificial Intelligence',
        topics: [
          'Foundations of AI',
          'AI Applications',
          'Algorithmic Concepts',
          'Generative AI',
          'Prompt Engineering',
          'Real-World Case Studies',
          'Hands-on with Generative AI Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-artificial-intelligence',
        isRecommended: true,
        details: 'This 3-hour course covers essential Artificial Intelligence concepts, common AI applications, the basics of generative AI, and prompt engineering. Learners get practical experience by working directly with AI tools to refine and create prompts. Completion earns an IBM Digital Badge via Credly.',
        prerequisites: ['No prior experience required'],
      },

      {
        id: 'ibm-ai-fundamentals',
        title: 'Artificial Intelligence Fundamentals',
        topics: [
          'Natural Language Processing',
          'Computer Vision',
          'Machine Learning',
          'Deep Learning',
          'Chatbots',
          'Neural Networks',
          'AI Ethics',
          'AI Applications',
          'Watson Studio (AI model deployment)'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/artificial-intelligence-fundamentals',
        isRecommended: true,
        details: 'A comprehensive, 10+ hour course offering conceptual knowledge and hands-on skills across the landscape of AI—including NLP, vision, machine/deep learning, chatbots, neural networks, AI ethics, and deployment basics in IBM Watson Studio. Includes job outlook and career guidance for AI-related roles. Earn an IBM Digital Badge on completion.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ai-eng',
        title: 'Microsoft Certified: Azure AI Engineer Associate',  //meeee
        topics: ['Azure AI Services', 'NLP', 'Computer Vision', 'Generative AI', 'AI Solutions'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/credentials/certifications/azure-ai-engineer/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'The official certification page. Validates your ability to build, manage, and deploy AI solutions.',
        prerequisites: ['AI-102 Skills', 'Experience with Azure'],
      }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'Build, train, and deploy models using Azure Machine Learning and Python.',
    courses: [
      {
        id: 'ml-concepts',
        title: 'Introduction to Machine Learning Concepts',   //meeeeeeeee
        topics: ['ML Fundamentals', 'ML Types', 'Training/Evaluation', 'Deep Learning'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/fundamentals-machine-learning/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand the core principles of ML: Regression, Classification, and Clustering, and how to evaluate models.',
        prerequisites: ['Basic Math'],
        isRecommended: true,
      },
      {
        id: 'ibm-ml-ds-projects',
        title: 'Machine Learning for Data Science Projects',
        topics: [
          'Data Science Process',
          'Machine Learning Fundamentals',
          'Project Design & Deployment',
          'Feature Engineering',
          'Model Evaluation',
          'Real-World Case Studies',
          'Job Readiness Skills'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-D8E7C82C1D76?ngo-id=0302',
        isRecommended: true,
        details: 'A comprehensive 20-hour learning plan focused on building, evaluating, and deploying machine learning projects within data science workflows. Participants gain practical skills in feature engineering, model selection, error analysis, and project design through applied labs. Strong emphasis is placed on job readiness for data science roles.',
        prerequisites: [
          'Basic Python/programming',
          'Some exposure to data analysis'
        ],
      },
      {
        id: 'ml-create',                            //krim
        title: 'Create Machine Learning Models',
        topics: ['Regression', 'Classification', 'Clustering', 'Deep Learning'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/training/paths/create-machine-learn-models/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Hands-on labs using Python to train models with Scikit-Learn and PyTorch within the Azure environment.',
        prerequisites: ['Python', 'Basic ML Concepts'],
      },
      {
        id: 'ibm-data-intro',
        title: 'Getting Started with Data (Earn a credential!)',
        topics: [
          'Basics of Data',
          'Data Sources & Types',
          'Data Collection',
          'Data Quality & Cleaning',
          'Data Visualization',
          'Data Ethics & Privacy',
          'Intro to Data-Driven Roles'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-14F2691E3A32?ngo-id=0302',
        isRecommended: true,
        details: 'An entry-level, ~3-hour course presenting foundational concepts in data science. You’ll explore what data is, the different types of data, why quality and cleaning matter, basic data visualization, and jobs in the data field. Successfully finishing the course earns an IBM SkillsBuild digital badge.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ml-pipeline',
        title: 'Run pipelines in Azure Machine Learning',//amine
        topics: ['ML Pipelines', 'Automation', 'Components', 'Workflow Orchestration'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/run-pipelines-azure-machine-learning/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Automate your workflows by connecting data prep, training, and evaluation steps into reproducible pipelines.',
        prerequisites: ['Azure ML Workspace'],
      },
      {
        id: 'ml-cert',
        title: 'Microsoft Certified: Azure Data Scientist Associate', //krim
        topics: ['Data Science', 'ML Models', 'MLflow', 'Azure AI Services', 'Python'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/credentials/certifications/azure-data-scientist/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Certification path for data scientists applying their knowledge of data exploration and model training on Azure.',
        prerequisites: ['DP-100 Skills'],
      }
    ]
  },
  {
    id: 'python',
    title: 'Python Development',
    description: 'From basics to advanced data analysis and intelligent apps.',
    courses: [
      {
        id: 'fcc-python',
        title: 'Python Certification',
        topics: [
          'Python Fundamentals',
          'Control Structures',
          'Data Structures',
          'Functions',
          'OOP in Python',
          'File and API Operations',
          'Testing and Debugging',
          'Portfolio Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/python-v9/',
        isRecommended: true,
        details: 'A project-based Python certification that takes you from absolute beginner to job-ready fundamentals. Interactive challenges and projects build skill in variables, functions, OOP, file operations, API use, and debugging. The course concludes with several real-world projects for demonstrable Python fluency and awards a certification upon completion.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'py-analyze',
        title: 'Explore and analyze data with Python',            //me
        topics: ['Data Exploration', 'NumPy', 'Pandas', 'Matplotlib', 'Data Analysis'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/training/modules/explore-analyze-data-with-python/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Use Jupyter notebooks to manipulate large datasets and create visualizations for storytelling.',
        prerequisites: ['Python Syntax'],
      },
      {
        id: 'py-vs',
        title: 'Python Development with Visual Studio',//kr
        topics: ['Python Development', 'Visual Studio IDE', 'Python Apps', 'Debugging'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/visualstudio/python/?view=visualstudio?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Set up Visual Studio 2022 for Python development, including environment management and debugging tools.',
        prerequisites: ['No prior experience required'],
      },


      {
        id: 'py-copilot',  //me
        title: 'Using GitHub Copilot with Python',
        topics: ['GitHub Copilot', 'AI Pair Programming', 'Python Development'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/introduction-copilot-python/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Boost productivity by using AI to generate code snippets, write tests, and explain complex logic.',
        prerequisites: ['Basic Coding Knowledge'],
      },
      {
        id: 'py-apps',//kr
        title: 'Build intelligent apps with Python',
        topics: ['Python', 'Azure', 'Cloud Computing', 'Intelligent Applications'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/shows/azure-essentials-show/build-intelligent-apps-with-python?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Video series on integrating Azure AI services and databases into your Python web applications.',
        prerequisites: ['Web Dev Basics', 'Python'],
      }
    ]
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Modern web technologies including React, Node.js, and ASP.NET Core.',
    courses: [
      {
        id: 'fcc-responsive-web',
        title: 'Responsive Web Design Certification',
        topics: [
          'HTML',
          'CSS',
          'Accessibility',
          'Modern Layouts',
          'Semantic HTML',
          'Responsive Design',
          'SEO Fundamentals',
          'Forms and Tables',
          'Project-Based Learning (Survey Form, Product Landing Page, etc.)'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/responsive-web-design-v9/',
        isRecommended: true,
        details: 'This self-paced, certification-track course teaches you the fundamentals of user-friendly, accessible web development using HTML and CSS. You learn through interactive labs and build multiple real-world projects (survey forms, landing pages, technical docs) to showcase your skills. The program emphasizes best practices in design and web accessibility, preparing you for modern front-end roles.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'web-start',       ///krrr
        title: 'Get started with web development using Visual Studio Code',
        topics: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Browser DevTools'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/get-started-with-web-development/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Understand how the internet works and build your first static website using VS Code.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'fcc-frontend-libraries',
        title: 'Front End Development Libraries Certification',
        topics: [
          'React',
          'Redux',
          'Bootstrap',
          'jQuery',
          'SASS',
          'UI Component Building',
          'State Management',
          'Single Page Apps',
          'React Project Labs'
        ],
        level: CourseLevel.Intermediate,
        link: 'https://www.freecodecamp.org/learn/front-end-development-libraries-v9/',
        isRecommended: true,
        details: 'An intermediate, project-based certification on the key libraries in modern front-end web development. You’ll develop hands-on proficiency in React and Redux patterns, use Bootstrap and jQuery for rapid UI features, practice SASS styling, and build production-grade front-end apps through guided projects. Certification validates your ability to design, build, and deploy scalable interfaces.',
        prerequisites: [
          'Basic JavaScript',
          'HTML/CSS familiarity'
        ],
      },

      {
        id: 'web-html',
        title: 'Build web pages with HTML and CSS for beginners',      //meee
        topics: ['HTML', 'CSS', 'Web Pages', 'VS Code', 'Web Accessibility'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/paths/build-web-pages-html-css-for-beginners/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Deep dive into semantic HTML tags, CSS styling, layout techniques, and accessibility best practices.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'fcc-backend-apis',
        title: 'Back End Development and APIs Certification',
        topics: [
          'Node.js',
          'Express.js',
          'REST APIs',
          'MongoDB',
          'CRUD Operations',
          'Authentication',
          'Testing and Debugging',
          'Project-Based Backend Apps'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis-v9/',
        isRecommended: true,
        details: 'A beginner-friendly full stack curriculum focused on server-side and API development with Node.js, Express.js, and MongoDB. You learn to build and test RESTful APIs, perform CRUD operations, manage authentication, and deploy real-world applications. The course is project-based and includes a certification on completion.',
        prerequisites: [
          'Basic JavaScript'
        ],
      },

      {
        id: 'fcc-js',
        title: 'JavaScript Certification',
        topics: [
          'JavaScript Basics',
          'Data Structures',
          'ES6 Features',
          'Functions and Scope',
          'DOM Manipulation',
          'Object-Oriented Programming',
          'APIs and Fetch',
          'Test-Driven Development',
          'Frontend Project-Building'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/javascript-v9/',
        isRecommended: true,
        details: 'A comprehensive, hands-on program covering JavaScript from fundamentals to more advanced features like ES6, OOP, and APIs. Lessons combine interactive coding challenges, quizzes, and real-world projects (such as calculator and drum machine apps), ensuring strong foundations in JS for front-end development. Completion awards a recognized JavaScript certification.',
        prerequisites: ['No prior experience required'],
      },

    ]
  },
  {
    id: 'csharp',
    title: 'C# Development',
    description: 'Core fundamentals for building robust applications on the .NET platform.',
    courses: [

      {
        id: 'cs-write',           //ee
        title: 'Write your first C# code',
        topics: ['C# Basics', 'Console Applications', 'Syntax', 'First Code'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/training/modules/csharp-write-first/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Focuses on syntax precision, compilation, and understanding the .NET runtime environment.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'fcc-csharp',
        title: 'Foundational C# with Microsoft Certification',
        topics: [
          'C# Syntax',
          'Variables & Data Types',
          'Control Structures',
          'Methods & Functions',
          'Object-Oriented Programming',
          'Exception Handling & Debugging',
          'Console Applications',
          'Portfolio Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/',
        isRecommended: true,
        details: "Un parcours complet et interactif pour maîtriser la syntaxe C#, la programmation orientée objet, la gestion des exceptions et l’écriture d’applications console. Projets guidés et certifications Microsoft inclus.",
        prerequisites: [
          'Aucune connaissance préalable'
        ],
      }

    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',   //
    description: 'Essential knowledge for cloud computing and infrastructure.',
    courses: [
      {
        id: 'ibm-cloud-fundamentals',
        title: 'Cloud Computing Fundamentals (Earn a credential!)',
        topics: [
          'Cloud Computing Basics',
          'Types of Cloud Services (IaaS, PaaS, SaaS)',
          'Deployment Models',
          'Virtualization and Containers',
          'Cloud Security and Compliance',
          'Practical Cloud Applications',
          'Cloud Career Paths'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skills.yourlearning.ibm.com/activity/PLAN-2EC3A305F2C3?ngo-id=0302',
        isRecommended: true,
        details: 'This ~3-hour credential-earning course covers foundational cloud computing concepts, service models (IaaS, PaaS, SaaS), deployment strategies, security requirements, and real-world cloud solutions. Prepares you for further cloud certifications and offers a digital badge on completion.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'cloud-intro',
        title: 'Introduction to Cloud Infrastructure: Describe Cloud Concepts',
        topics: ['Cloud Computing', 'Shared Responsibility Model', 'Azure Basics'],
        level: CourseLevel.Beginner,
        isRecommended: true,     ///me

        link: 'https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Explains IaaS, PaaS, SaaS models, and the benefits of cloud scalability and high availability.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'fcc-relational-db',
        title: 'Relational Databases Certification',
        topics: [
          'Relational Database Design',
          'SQL',
          'PostgreSQL',
          'Normalization',
          'Data Modeling',
          'CRUD Operations',
          'Advanced Queries (Joins, Aggregation)',
          'Database Security',
          'Real-World Projects'
        ],
        level: CourseLevel.Beginner,
        link: 'https://www.freecodecamp.org/learn/relational-databases-v9/',
        details: 'This hands-on certification teaches you how to design, query, and manage relational databases with SQL and PostgreSQL. Lessons progress from ER modeling and normalization basics to advanced query techniques, security, and project deployment. You build several real-world projects for portfolio proof and certification.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'cloud-az900',
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        topics: ['Azure Fundamentals', 'Cloud Services', 'Certification Prep'],
        level: CourseLevel.Beginner,
        link: 'https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-900?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Study guide for the AZ-900 exam. Covers identity, governance, security, and cost management on Azure.',
        prerequisites: ['No prior experience required'],
      },
    ]
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    description: 'Pipelines, data storage, and analytics on the Azure platform.',
    courses: [
      {
        id: 'de-dp203',
        title: 'Data Engineering on Microsoft Azure (DP-203T00)',
        topics: ['Data Engineering', 'Azure Synapse', 'Azure Databricks', 'Data Pipelines'],
        level: CourseLevel.Intermediate,
        link: 'https://learn.microsoft.com/training/courses/dp-203t00?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Design and implement data storage, processing, and security using Azure Synapse Analytics and Databricks.',
        prerequisites: ['SQL', 'Python/Scala', 'Azure Fundamentals'],
      }
    ]
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    description: 'Protect systems, networks, and programs from digital attacks using Microsoft Security solutions.',
    courses: [
      {
        id: 'ibm-cybersecurity-intro',
        title: 'Getting Started with Cybersecurity',
        topics: [
          'Cybersecurity Fundamentals',
          'Key Elements & Threats',
          'Data Privacy',
          'CIA Triad Model',
          'Security Evaluation',
          'Cybersecurity Careers',
          'Essential Skills for Cyber Roles',
          'Intro to Security Tools'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/getting-started-with-cybersecurity',
        isRecommended: true,
        details: 'This course provides foundational knowledge of cybersecurity including data protection, privacy, security evaluation using the CIA triad, and current cyber threats. Learners explore skills required for cybersecurity jobs and understand fundamental tools. Completing the course earns an IBM digital badge via Credly.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'ibm-cybersecurity-fund',
        title: 'Cybersecurity Fundamentals',
        topics: [
          'Cybersecurity Concepts',
          'Types of Attacks',
          'Threat Groups',
          'Risk Management',
          'Cryptography',
          'Social Engineering',
          'Case Studies',
          'Incident Response',
          'Cybersecurity Careers'
        ],
        level: CourseLevel.Beginner,
        link: 'https://skillsbuild.org/college-students/course-catalog/cybersecurity-fundamentals',
        isRecommended: true,
        details: 'A foundational program for understanding cybersecurity threats, strategies, and practices. Learn the landscape of digital threats, cryptographic protections, real-world attack cases, incident response frameworks, and job market landscape. The course includes hands-on evaluation of threats/scenarios and is designed for further upskilling or entry roles. Earn an IBM Digital Badge on completion.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'sc-900',
        title: 'Microsoft Security, Compliance, and Identity Fundamentals',
        topics: ['Security Concepts', 'Identity Management', 'Compliance', 'Microsoft Entra ID'],
        level: CourseLevel.Beginner,   //nekk
        link: 'https://learn.microsoft.com/credentials/certifications/security-compliance-and-identity-fundamentals/?WT.mc_id=academic&wt.mc_id=studentamb_484680',
        details: 'Learn the fundamentals of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.',
        prerequisites: ['No prior experience required'],
      },
      {
        id: 'sc-200',
        title: 'Microsoft Security Operations Anaflyst',
        topics: ['Threat Protection', 'Microsoft Sentinel', 'Defender for Cloud', 'KQL'],
        level: CourseLevel.Intermediate, //krim
        link: 'https://learn.microsoft.com/credentials/certifications/security-operations-analyst/?WT.mc_id=academic&wt.mc_id=studentamb_490905',
        details: 'Learn to mitigate threats using Microsoft Sentinel, Microsoft Defender for Cloud, and Microsoft 365 Defender.',
        prerequisites: ['SC-900 Skills', 'Basic Scripting'],
      }
    ]
  }
];

