import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import { ExternalLink } from 'lucide-react';
import { Excel, PowerBI, SQL } from '../Icons';
import ProjectBackground from '../Background/ProjectBackground';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Sales Analytics (FMCG)",
      tag: "Excel Project",
      description: "Created 2 reports for the sales team which will help them to evaluate customer performance and understand their market performance with respect to their target.",
      longDescription: "In this project, I created a sales report using excel pivot tables which will enable businesses to determine effective customer discounts, facilitate negotiations with consumers, and identify potential business expansion opportunities in promising countries. The reports generated will provide actionable insights and recommendations for businesses to optimize their sales strategies, enhance customer satisfaction, and maximize revenue generation.",
      learned: [
        "Pivot table",
        "Power Query",
        "DAX (Basics)",
        "Conditional Formatting",
        "Report Beautification",
        "Sales Domain Metrics"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop"
      ],
      imageCaptions: [
        "Customer Performance Report: Provides net sales performance of each customer across years",
        "Market Performance Report: Evaluates regional sales trends"
      ],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubUrl: "https://github.com",
      linkedInUrl: "https://linkedin.com",
      summary: "Overall, this project aims to empower businesses with the necessary tools and insights to monitor, evaluate, and enhance their sales activities. By leveraging sales data analysis, businesses can unlock new opportunities, drive growth, and stay competitive in the dynamic market landscape.",
      tech: "Excel",
      techIcon: Excel,
      color: "#107c41"
    },
    {
      title: "Business Insights 360 Dashboard",
      tag: "PowerBI Project",
      description: "AtliQ Hardware is a consumer electronics company expanding rapidly but is not able to compete with other companies using data as a tool.",
      longDescription: "This PowerBI project aims to provide 360-degree business insights across finance, sales, marketing, and supply chain. By integrating data from multiple sources, the dashboard enables stakeholders to make data-driven decisions, optimize inventory, and identify growth drivers.",
      learned: [
        "Power BI Visualization",
        "Data Modeling (Star Schema)",
        "Advanced DAX",
        "Power Query (ETL)",
        "Dynamic Dashboard Design",
        "Stakeholder Communication"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543286386-713bdd5486d3?q=80&w=1000&auto=format&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubUrl: "https://github.com",
      linkedInUrl: "https://linkedin.com",
      summary: "Overall, this project provides a comprehensive data-driven framework for AtliQ Hardware to scale efficiently. By leveraging Power BI's analytical capabilities, the company can now monitor performance in real-time and adapt to market changes with agility.",
      tech: "PowerBI",
      techIcon: PowerBI,
      color: "#f2c811"
    },
    {
      title: "CodeX (Food and Beverage Industry)",
      tag: "PowerBI Project",
      description: "CodeX is a German beverage company that is aiming to make its mark in the Indian market. They launched their energy drink recently.",
      longDescription: "Analyzed marketing survey data for CodeX to understand consumer preferences and brand awareness. The dashboard highlights demographic insights, consumption patterns, and competitor analysis to guide their India market entry strategy.",
      learned: [
        "Marketing Analytics",
        "Survey Data Analysis",
        "Demographic Insights",
        "Consumer Preference Mapping",
        "Competitive Benchmarking",
        "Insightful Storytelling"
      ],
      image: "https://images.unsplash.com/photo-1543286386-713bdd5486d3?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1543286386-713bdd5486d3?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubUrl: "https://github.com",
      linkedInUrl: "https://linkedin.com",
      summary: "Overall, this marketing analysis equips CodeX with the intelligence needed to penetrate the Indian market successfully. The insights derived from consumer surveys provide a clear roadmap for product positioning and targeted marketing campaigns.",
      tech: "PowerBI",
      techIcon: PowerBI,
      color: "#f2c811"
    },
    {
      title: "Shield Insurance (Health Industry)",
      tag: "PowerBI Project",
      description: "Shield Insurance, an insurance company would like to analyze customer count, total revenue, and the dynamic daily growth rates.",
      longDescription: "Developed a comprehensive reporting system for Shield Insurance to track key performance indicators. The dashboard provides a dynamic view of revenue trends, customer acquisition costs, and retention rates across various health plans.",
      learned: [
        "Insurance Domain Knowledge",
        "KPI Tracking",
        "Growth Rate Calculations",
        "Revenue Trend Analysis",
        "Customer Retention Metrics",
        "Advanced Visualization"
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubUrl: "https://github.com",
      linkedInUrl: "https://linkedin.com",
      summary: "Overall, this project empowers Shield Insurance to optimize their health plan offerings and improve customer retention. The granular visibility into growth rates and revenue drivers allows for more precise financial forecasting.",
      tech: "PowerBI",
      techIcon: PowerBI,
      color: "#f2c811"
    },
    {
      title: "WaveCon (Telecom Industry)",
      tag: "PowerBI Project",
      description: "This project explores how WaveCon, a telecom company, launched new 5G services. We look into the journey, effects, and revenue insights.",
      longDescription: "WaveCon launched 5G services and needed a deep dive into revenue performance and plan efficiency. This project involved analyzing churn rates, average revenue per user (ARPU), and network performance metrics to optimize their 5G rollout.",
      learned: [
        "Telecom Analytics",
        "Churn Rate Analysis",
        "ARPU Optimization",
        "5G Rollout Metrics",
        "Network Efficiency Tracking",
        "Executive Dashboarding"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e90526ef49?q=80&w=1000&auto=format&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubUrl: "https://github.com",
      linkedInUrl: "https://linkedin.com",
      summary: "Overall, the 5G rollout analysis provides WaveCon with critical insights into customer behavior and network performance. This data-driven approach ensures that the company can maximize the ROI on their 5G infrastructure investment.",
      tech: "PowerBI",
      techIcon: PowerBI,
      color: "#f2c811"
    },
    {
      title: "Ad-hoc Insights (Consumer Domain)",
      tag: "SQL Project",
      description: "AtliQ Hardware is one of the leading computer hardware producers in India and well expanded in other countries too.",
      longDescription: "Executed multiple ad-hoc SQL queries to answer critical business questions for the management team. This involved complex joins, window functions, and subqueries to extract insights on product performance, regional sales, and inventory levels.",
      learned: [
        "Advanced SQL Queries",
        "Joins & Window Functions",
        "Data Extraction (ETL)",
        "Business Insight Generation",
        "Performance Optimization",
        "Problem-Solving with SQL"
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e90526ef49?q=80&w=1000&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1504868584819-f8e90526ef49?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
      ],
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      githubUrl: "https://github.com",
      linkedInUrl: "https://linkedin.com",
      summary: "Overall, these SQL-based insights provide immediate answers to strategic questions from the management. The ability to quickly query and analyze large datasets is crucial for making informed decisions in a fast-paced retail environment.",
      tech: "SQL",
      techIcon: SQL,
      color: "#336791"
    }
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="projects-section">
      <ProjectBackground />
      <div className="section-content">
        <SectionHeading title="My" subtitle="Projects" />
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <button className="btn-view" onClick={() => handleOpenModal(project)}>
                    See My Work <ExternalLink size={18} />
                  </button>
                </div>
              </div>
              
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-footer">
                  <button className="btn-outline" onClick={() => handleOpenModal(project)}>See My Work</button>
                  <div className="tech-tag" style={{ '--tech-color': project.color }}>
                    <project.techIcon size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
