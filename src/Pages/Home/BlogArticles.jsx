import React from "react";
import "./BlogArticles.css";

export default function BlogArticles() {
  const articles = [
    {
      id: 1,
      category: "DOCKER",
      categoryColor: "#2563eb", // Blue
      title: "Setting Up Multi-Container Applications with Docker Compose",
      description: "A step-by-step guide to orchestrating multiple containers for local development and production.",
      image: "./img/blog/docker-compose.jpg",
      alt: "Docker Compose Blog",
      link: "/blog/docker-compose-guide"
    },
    {
      id: 2,
      category: "ARCHITECTURE",
      categoryColor: "#10b981", // Green
      title: "Building an API Gateway with Nginx for Microservices",
      description: "Learn how to configure Nginx as a reverse proxy to create a unified entry point for your microservices.",
      image: "./img/blog/nginx-gateway.jpg",
      alt: "Nginx Gateway Blog",
      link: "/blog/nginx-api-gateway"
    },
    {
      id: 3,
      category: "CLOUD",
      categoryColor: "#8b5cf6", // Purple
      title: "Deploying Containerized Applications to AWS",
      description: "A comprehensive guide to deploying Docker containers to AWS using EC2, ECS, and load balancing.",
      image: "./img/blog/aws-deployment.jpg",
      alt: "AWS Deployment Blog",
      link: "/blog/aws-container-deployment"
    }
  ];

  return (
    <section id="Blog" className="blog-section">
      <div className="blog-container">
        <div className="section-header">
          <h2 className="section-heading">
            <i className="section-icon fas fa-book"></i>
            Technical Blog
          </h2>
          <a href="/blog" className="view-all-btn">
            <i className="fas fa-book-open"></i> View All Articles
          </a>
        </div>
        
        <p className="section-description">
          Insights and tutorials about my journey with microservices and cloud technologies.
        </p>

        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image-container">
                <img 
                  src={article.image} 
                  alt={article.alt} 
                  className="article-image"
                />
              </div>
              <div className="article-content">
                <span 
                  className="article-category" 
                  style={{color: article.categoryColor}}
                >
                  {article.category}
                </span>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <a href={article.link} className="read-more-link">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}