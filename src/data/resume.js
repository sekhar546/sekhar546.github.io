export const resume = {
  name: "Raja Sekhar Reddy Gajjala",
  title: "Lead Data Engineer",
  tagline: "Architecture & Modern Data Platforms",
  email: "shekhar.rj@gmail.com",
  phone: "+1 (437) 322 - 9719",
  location: "Toronto, ON",
  linkedin: "https://www.linkedin.com/in/sekhar546/",
  github: "https://github.com/sekhar546",
  resumeUrl: "https://flowcv.com/resume/g788k45ums",

  stats: [
    { label: "Years Experience", value: 14, suffix: "+" },
    { label: "Cloud Cost Savings", value: "$50K", suffix: "/mo" },
    { label: "Records Processed", value: "20M", suffix: "+" },
    { label: "Projects Delivered", value: 20, suffix: "+" },
  ],

  summary: [
    "Lead Data Engineer with 14 years of experience designing and owning enterprise data platforms across healthcare, insurance, and banking domains.",
    "Deep Snowflake platform expertise spanning end-to-end architecture — Snowpipe, Streams & Tasks, Snowpark, dbt Core, and zero-trust RBAC with Dynamic Data Masking.",
    "Proven track record of delivering $50K/month cost reductions, 40% pipeline efficiency improvements, and near real-time data latency through deliberate architectural decisions.",
  ],

  experience: [
    {
      title: "Senior Lead Software Engineer",
      company: "Virtusa",
      location: "Toronto, ON",
      period: "Aug 2025 — Present",
      tags: ["AWS", "Redshift", "MWAA", "Python", "PySpark"],
      achievements: [
        "Engineered end-to-end risk reporting data pipelines for BMO's MECH product processing 10M+ records, scaling to 20M+, powering downstream risk reporting for Deposits and Loans.",
        "Architected ~35 complex Redshift stored procedures with distribution keys, sort keys, and materialized views for financial calculation logic.",
        "Orchestrated pipeline execution via Apache Airflow on MWAA with SLA monitoring and automated alerting.",
        "Designed a spec-driven agentic development framework using GitHub Copilot Agent Harness with sub-agents, skills, hooks, and guardrails.",
        "Led remediation of security vulnerabilities in data handling, translating findings into architectural guardrails strengthening banking compliance.",
      ],
    },
    {
      title: "Technology Lead",
      company: "ValueMomentum Inc.",
      location: "Hyderabad, India",
      period: "Nov 2020 — Jun 2024",
      tags: ["Snowflake", "dbt", "AWS", "PySpark", "Databricks", "Snowpark"],
      achievements: [
        "Reduced healthcare data ingestion latency from 24 hours to near real-time by architecting an automated Snowpipe-based ingestion framework.",
        "Eliminated batch dependency and idle warehouse costs with event-driven CDC using Snowflake Streams and serverless Tasks.",
        "Engineered modular dbt Core transformation pipeline with unique key-based incremental materialization reducing warehouse runtime and credit consumption.",
        "Achieved $50K/month cloud cost reductions and 30% query latency improvement through capacity architecture optimization.",
        "Enforced zero-trust RBAC with Dynamic Data Masking and Row-Level Security for PHI/PII protection across clinical and financial teams.",
        "Drove Lakehouse architecture evaluation — proposed Databricks with Apache Iceberg, delivering structured trade-off analysis for stakeholder sign-off.",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Diligent Global Tech",
      location: "Hyderabad, India",
      period: "Feb 2020 — Nov 2020",
      tags: ["Talend", "Snowflake", "ETL", "SQL"],
      achievements: [
        "Spearheaded migration of legacy SSIS ETL pipelines to Talend Enterprise, improving processing efficiency by 25% and reducing execution time by 30%.",
        "Designed end-to-end ETL pipelines integrating flat file sources with Snowflake Data Warehouse.",
        "Established ETL development standards — reusable component patterns, error handling, and logging frameworks — reducing future effort by 20%.",
        "Delivered two high-impact projects independently in a fast-paced startup environment.",
      ],
    },
    {
      title: "Associate — Senior Software Engineer",
      company: "United Healthgroup / Optum",
      location: "Pittsburgh, USA / Hyderabad, India",
      period: "Mar 2011 — Jan 2020",
      tags: ["Talend", "Power BI", "Crystal Reports", "SQL", "ETL"],
      achievements: [
        "Deployed onshore to Pittsburgh, USA for 2.5 years working directly with US healthcare clients on Medicaid and Medicare programs across 25 states.",
        "Maintained 100% on-time delivery across high-stakes reporting cycles, directly avoiding penalties valued at $100K per report.",
        "Drove platform modernization by introducing Talend ETL — evaluated technology, built internal case for adoption, led implementation.",
        "Pioneered Power BI proof of concept, establishing foundation for self-service analytics adoption within the organization.",
        "Built and mentored a reporting engineering team over a 9-year engagement covering multiple healthcare domains.",
      ],
    },
  ],

  projects: [
    {
      title: "BMO Risk Reporting Platform",
      category: "data",
      summary: "End-to-end risk reporting pipelines for BMO's MECH product processing 10M+ records in a regulated Canadian banking environment.",
      highlights: [
        "Architected ~35 complex Redshift stored procedures for financial calculations.",
        "Orchestrated Airflow pipelines on MWAA with SLA monitoring.",
        "Designed agentic dev framework with GitHub Copilot Agent Harness.",
      ],
      tags: ["AWS", "Redshift", "MWAA", "Python", "Airflow"],
    },
    {
      title: "Healthcare Data Platform Modernization",
      category: "cloud",
      summary: "Transformed legacy healthcare data infrastructure into a modern cloud-native platform reducing ingestion latency from 24 hours to near real-time.",
      highlights: [
        "Reduced latency 24h → near real-time via Snowpipe automated ingestion.",
        "Achieved $50K/month cost savings through capacity optimization.",
        "Enforced zero-trust RBAC with Dynamic Data Masking for PHI/PII.",
      ],
      tags: ["Snowflake", "dbt", "AWS", "PySpark", "Snowpark"],
    },
    {
      title: "Enterprise Healthcare Data Platform (Optum / UHG)",
      category: "data",
      summary: "9-year multi-role engagement designing and evolving a healthcare reporting platform spanning Medicaid and Medicare programs across 25 US states — platform remains active today.",
      highlights: [
        "Integrated data from Facets (claims/enrollment), clinical systems, and pre-authorization workflows into a unified reporting layer.",
        "Wore multiple hats as Data Analyst, BI Report Developer, and Data Engineer across the full engagement lifecycle.",
        "Maintained 100% on-time delivery on state reporting cycles, directly avoiding $100K/report penalties.",
        "Drove platform modernization — introduced Talend ETL and pioneered Power BI self-service analytics within the organisation.",
      ],
      tags: ["Talend", "Power BI", "SQL", "Facets", "Healthcare", "ETL"],
    },
    {
      title: "AI-Augmented Data Workflows",
      category: "ai",
      summary: "Building hands-on depth in LLM integration and AI-augmented data workflows bridging traditional data infrastructure with modern model-serving.",
      highlights: [
        "Integrated LLMs via LangChain, HuggingFace Transformers, and Ollama.",
        "Designed agentic framework with GitHub Copilot Agent Harness.",
        "Building RAG pipelines for data-driven knowledge retrieval.",
      ],
      tags: ["LangChain", "Ollama", "Generative AI", "Python", "HuggingFace"],
    },
  ],

  skills: {
    "Cloud & Data Platforms": [
      { name: "AWS (EMR, Glue, Lambda, MWAA)", level: 5 },
      { name: "Azure (ADF, ADLS Gen2, Synapse)", level: 4 },
      { name: "Snowflake (Snowpipe, Streams, Snowpark)", level: 5 },
      { name: "Databricks (Delta Lake, Unity Catalog)", level: 4 },
      { name: "Amazon Redshift", level: 4 },
      { name: "Apache Iceberg / Open Table Formats", level: 4 },
    ],
    "Data Engineering & AI": [
      { name: "PySpark / Python (Pandas, Polars)", level: 5 },
      { name: "SQL (Advanced) / dbt Core", level: 5 },
      { name: "Airflow / MWAA / Docker", level: 4 },
      { name: "Terraform / CI/CD / Git", level: 4 },
      { name: "LangChain / HuggingFace / Ollama", level: 3 },
      { name: "DuckDB / PostgreSQL", level: 4 },
    ],
  },

  typingTitles: ["Lead Data Engineer", "Data Architect", "Lakehouse Architect"],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering",
      institution: "Jawaharlal Nehru Technological University",
      location: "Anantapur, India",
      period: "Jun 2006 — May 2010",
    },
  ],
};