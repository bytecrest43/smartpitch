export default {
  firstName: "KoJo",
  lastName: "Lb",
  jobTitle: "MLOps Engineer",
  address: "525 N Tryon Street, NC 28117",
  phoneNumber: "(123)-456-7890",
  email: "admin@bytecrest.io",
  themeColor: "#3A3A3A",
  summary:
    "MLOps Engineer with 2+ years of experience designing, deploying, and maintaining end-to-end machine learning pipelines. Skilled in cloud infrastructure (AWS, GCP, Azure), CI/CD automation, containerization, and model monitoring. Experienced in bridging the gap between data science and production engineering by creating scalable and reliable ML systems. Strong understanding of DevOps principles, model lifecycle management, and continuous integration for ML workflows.",

  experience: [
    {
      id: 1,
      title: "MLOps Engineer",
      companyName: "TradeWave",
      city: "Madina",
      state: "MD",
      startDate: "Jan 2021",
      endDate: "Present",
      currentlyWorking: true,
      workSummary:
        "• Designed and implemented end-to-end MLOps pipelines using AWS Sagemaker, Docker, and Kubernetes.\n" +
        "• Automated model training, evaluation, and deployment workflows with CI/CD using GitHub Actions and AWS CodePipeline.\n" +
        "• Monitored production ML models using Prometheus and Grafana to ensure accuracy and performance stability.\n" +
        "• Collaborated with data scientists to streamline feature engineering and model retraining processes.\n" +
        "• Optimized cloud resource usage, reducing deployment cost by 20% through efficient container scaling.",
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      companyName: "ByteCrest Inc",
      city: "NogoKpo",
      state: "NG",
      startDate: "May 2019",
      endDate: "Jan 2021",
      currentlyWorking: false,
      workSummary:
        "• Built and deployed ML models for large-scale data analytics using TensorFlow and PyTorch.\n" +
        "• Developed automated data pipelines using Apache Airflow and Google Cloud Dataflow.\n" +
        "• Implemented model versioning and experiment tracking with MLflow.\n" +
        "• Partnered with DevOps teams to containerize and deploy models using Docker and Kubernetes.\n" +
        "• Contributed to improving model inference latency by 30% through optimized serving infrastructure.",
    },
  ],

  education: [
    {
      id: 1,
      universityName: "Self Taught University",
      startDate: "Aug 2020",
      endDate: "Present",
      degree: "Master of Science",
      major: "Computer Science",
      description:
        "Specialized in Artificial Intelligence, Machine Learning, and Automation for Financial Trading. Focused on developing intelligent systems for forex market analysis, predictive modeling, and automated trading strategies using AI-driven algorithms.",
    },
    {
      id: 2,
      universityName: "University of Professional Studies",
      startDate: "Aug 2019",
      endDate: "May 2023",
      degree: "Bachelor of Business Administration (BBA)",
      major: "Business Analytics",
      description:
        "Developed a strong foundation in business administration, data analysis, and decision science. Gained practical experience in analytics tools, data visualization, and applying statistical models to solve real-world business problems. Focused on leveraging data-driven insights to improve operational efficiency and strategic planning.",
    },
  ],

  skills: [
    {
      id: 1,
      name: "MLOps & Model Deployment (AWS, GCP, Docker, Kubernetes)",
      rating: 95,
    },
    {
      id: 2,
      name: "Machine Learning & Automation (TensorFlow, PyTorch, Forex AI Systems)",
      rating: 90,
    },
    {
      id: 3,
      name: "CI/CD & Workflow Orchestration (GitHub Actions, Airflow, MLflow, Jenkins)",
      rating: 90,
    },
    {
      id: 4,
      name: "Cloud Infrastructure & Monitoring (Linux, CloudWatch, Prometheus, Grafana)",
      rating: 88,
    },
  ],

  certifications: [
    {
      id: 1,
      name: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      year: "2024",
    },
    {
      id: 2,
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2023",
    },
    {
      id: 3,
      name: "Docker Certified Associate (DCA)",
      issuer: "Docker, Inc.",
      year: "2023",
    },
    {
      id: 4,
      name: "Microsoft Certified: Azure AI Engineer Associate",
      issuer: "Microsoft",
      year: "2024",
    },
  ],

  references: [
    {
      name: "John Smith",
      position: "Principal MLOps Architect",
      company: "Amazon Web Services",
      phone: "(555)-111-2222",
      email: "john.smith@amazon.com",
    },
    {
      name: "Sarah Johnson",
      position: "Lead Data Scientist",
      company: "Google Cloud",
      phone: "(555)-333-4444",
      email: "sarah.johnson@google.com",
    },
  ],
};
