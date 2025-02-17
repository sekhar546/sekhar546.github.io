import styles from './page.module.css'
import Footer from '../components/Footer'

/**
 * Home component for the portfolio website.
 * Displays the user's name, job title, profile summary, about information, skills, experience, education, courses, and languages.
 */
const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>Raja Sekhar Reddy Gajjala</h1>
        <p className={styles.jobTitle}>Technology Leader - Data Engineering</p>
      </header>
      
      <section className={styles.section}>
        <h1>About Me</h1>
        <p className={styles.profileSummary}>
          Lead Data Engineer with 13+ years of expertise in architecting and
          delivering high-impact data solutions for complex business challenges.
          Proven ability to lead cross-functional teams in designing and
          implementing scalable data pipelines, optimizing cloud infrastructure,
          and driving data-driven decision-making. Adept at leveraging
          cutting-edge technologies such as AWS, Hadoop, PySpark, SnowFlake, and
          Databricks to deliver robust, cost-effective, and high-performance data
          ecosystems. Recognized for reducing operational costs by $50K/month,
          improving system reliability, and enabling business growth through
          innovative data strategies. Currently expanding expertise in AI/ML
          concepts to drive predictive analytics and intelligent automation. A
          strategic thinker with strong leadership, Agile, and DevOps practices,
          committed to transforming raw data into actionable insights.
        </p>
      </section>

      {/* Skills */}
      <h1>Skills</h1>
      <ul>
        <li>AWS (EMR, EC2, Lambda, Glue, S3, RedShift, Athena, Step-Functions, SNS)</li>
        <li>Hadoop</li>
        <li>Apache Spark</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Git</li>
        <li>Talend ETL</li>
        <li>Tableau</li>
        <li>Power BI</li>
        <li>SAP Crystal Reports</li>
      </ul>

      {/* Experience */}
      <h1>Experience</h1>
      <h2>Technology Leader - Data Engineering</h2>
      <p>ValueMomentum (November 2020 - June 2024)</p>
      <ul className={styles.experienceList}>
        <li>Architected and implemented a fully automated data pipeline integrating upstream and downstream systems (SnowFlake) using AWS Lambda, PySpark, and EMR, eliminating manual interventions and improving operational efficiency by 40%.</li>
        <li>Pioneered cost optimization strategies by leveraging spot instances, graviton processors, and managed scaling, resulting in monthly savings of $50K while maintaining high system performance.</li>
        <li>Revolutionized Spark processing efficiency by optimizing driver memory configurations in EMR clusters, reducing job failure rates to an industry-leading 0.05% and ensuring seamless data processing.</li>
        <li>Re-engineered the ETL architecture within the Hadoop ecosystem, achieving significant improvements in performance through advanced time and space complexity optimizations.</li>
        <li>Transformed commission payout dashboards for insurance agents, enabling real-time review of omissions and target planning, which directly contributed to a 15% increase in customer business revenue.</li>
        <li>Spearheaded the onboarding and upskilling of new team members, providing hands-on training in AWS, PySpark, SnowFlake, and Hadoop, enabling them to contribute to high-impact projects within weeks.</li>
        <li>Mentored junior engineers in best practices for ETL pipeline development, cloud cost optimization, and Agile methodologies, fostering a culture of continuous learning and innovation.</li>
        <li>Developed and delivered customized training programs on Spark memory optimization, AWS Glue, and Talend ETL, equipping the team with advanced skills to tackle complex data engineering challenges.</li>
        <li>Championed knowledge-sharing initiatives by conducting workshops on data architecture design and performance tuning, resulting in a 30% improvement in team productivity.</li>
        <li>Built a collaborative learning environment by guiding team members through real-world use cases, enabling them to master Lambda functions, EMR clusters, and SnowFlake integrations.</li>
        <li>Led code version control initiatives by managing the team's codebase in GitLab, implementing a streamlined branching strategy to reduce merge conflicts and save significant time for the DevOps team.</li>
        <li>Introduced and mentored the team on using graphical tools for version control (e.g., VSCode with Git extensions), establishing it as a standard practice and improving team efficiency.</li>
        <li>Reviewed and approved merge requests for code developed by the team, ensuring high-quality deliverables and adherence to best practices in version control.</li>
      </ul>

      <h2>Senior Software Engineer</h2>
      <p>Diligent Global Tech (February 2020 to November 2020)</p>
      <ul className={styles.experienceList}>
        <li>Spearheaded the migration of legacy SSIS ETL pipelines to Talend Enterprise, modernizing data workflows and improving processing efficiency by 25%.</li>
        <li>Designed and developed end-to-end ETL pipelines in Talend, integrating flat file data sources (e.g., manufacturing beverage containers, retail sales) with Snowflake Data Warehouse, ensuring seamless data flow and accuracy.</li>
        <li>Independently managed the entire ETL lifecycle, from pipeline creation to deployment on Talend Administration Center (TAC), orchestration, and post-deployment support, ensuring 100% uptime during the warranty period.</li>
        <li>Optimized data ingestion and transformation processes, reducing pipeline execution time by 30% and enabling faster insights for business stakeholders.</li>
        <li>Provided end-to-end support for ETL pipelines, including troubleshooting, performance tuning, and resolving production issues, ensuring uninterrupted data delivery for critical business operations.</li>
        <li>Collaborated with cross-functional teams to understand data requirements, translating complex business needs into scalable and efficient ETL solutions.</li>
        <li>Established best practices for Talend ETL development, including reusable components, error handling, and logging, which improved maintainability and reduced future development efforts by 20%.</li>
        <li>Delivered two high-impact projects within tight deadlines, showcasing the ability to work independently and deliver results in a fast-paced startup environment.</li>
      </ul>

      <h2>Senior Software Engineer</h2>
      <p>Optum Global Solutions (formerly United Health Group) (March 2011 to January 2020)</p>
      <ul className={styles.experienceList}>
        <li>Pioneered the development of business-critical reports using SAP Crystal Reports, delivering actionable insights for Medicaid and Medicare data across 25 U.S. states, enabling data-driven decision-making for healthcare plans.</li>
        <li>Introduced and implemented Worksheet XML reports to address complex multi-spreadsheet reporting requirements, streamlining reporting processes and reducing manual effort by 40%.</li>
        <li>Spearheaded the adoption of Power BI for data analytics, conducting a successful proof-of-concept (POC) that identified trends in healthcare plans and enhanced strategic planning capabilities.</li>
        <li>Delivered high-stakes reports under tight deadlines, ensuring zero penalties (saving $100K per report) and maintaining 100% on-time delivery for mission-critical projects.</li>
        <li>Revolutionized data integration processes by introducing Talend ETL to the team, enabling seamless data aggregation from multiple sources and automating the generation of pre-filled template-based spreadsheets.</li>
        <li>Designed and implemented complex data pipelines to consolidate data from healthcare data marts (e.g., claims, members, providers), facilitating the creation of new healthcare products and improving business agility.</li>
        <li>Deployed onshore in the U.S. for two years, collaborating directly with clients to deliver clinical data reporting projects, ensuring alignment with business needs and fostering strong client relationships.</li>
        <li>Mentored and trained newcomers on SAP Crystal Reports, Power BI, and Talend ETL, fostering a culture of knowledge-sharing and skill development within the team.</li>
        <li>Optimized reporting workflows by automating data extraction, transformation, and loading (ETL) processes, reducing report generation time by 30% and improving data accuracy.</li>
        <li>Played a key role in strategic initiatives by providing data-driven insights that supported the launch of new healthcare products, contributing to the company's growth and competitive edge.</li>
      </ul>

      {/* Education */}
      <h1>Education</h1>
      <h2>Bachelor of Technology in Computer Science and Engineering</h2>
      <p>Jawaharlal Nehru Technological University (August 2006 to May 2010)</p>

      {/* Courses */}
      <h1>Courses</h1>
      <ul>
        <li>Azure Databricks and Spark for Data Engineers (Udemy)</li>
        <li>AWS Cloud Practitioner Essentials (Amazon Web Services)</li>
        <li>Python Programming (Kaggle)</li>
        <li>SQL Advanced (HackerRank)</li>
      </ul>

      {/* Languages */}
      <h1>Languages</h1>
      <ul>
        <li>English</li>
        <li>Telugu</li>
        <li>Hindi</li>
      </ul>

      <Footer />
    </div>
  );
};

export default Home;
